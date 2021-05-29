const jwt = require("jsonwebtoken") //to genrate signed token
const _ = require("lodash")
const expressJwt = require("express-jwt") // for authorization check
const gravatar = require("gravatar")
const passport = require('passport');
const mailgun = require("mailgun-js")

// models and helpers
const User = require("../models/users")
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: process.env.MAILGUN_DOMAIN })
const mailGun = require('../utils/mailgun-services')
const { errorHandler } = require("../helpers/dbErrorHandler")

// email activation 
exports.signup = (req, res) => {
    console.log("user info", req.body)
    const { username, email, first_name, last_name, gender, current_city, image_url, password } = req.body
    User.findOne({email}).exec((err, user) => {
        if(user) {
            return res.status(400).json({error: `User with this email ${email} already exists.`})
        }
        // garvatar for providing unique avatar to all users
        const image_url = gravatar.url(email, { s: "200", r: "pg", d: "mm" }) // size, rating, default

        // expiresIn: 120 // it will be expired after 20m // hold user input
        const token = jwt.sign({ username, email, first_name, last_name, gender, current_city, image_url, password }, process.env.JWT_RESET_ACTIVATION, { expiresIn: '9m' }) 

        const data = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Email Activation Link',
            html:`<h2>Please click on the link given to Activate your account</h2>
                  <a>${process.env.CLIENT_URL}/activate-account/${token}</a>`
        }

        mg.messages().send(data, function (error, body) {
            if(error) {
                return res.json({
                    message: error.message
                })
            }
            return res.json({message: `An activation Email link has been sent to ${email} , Kindly activate your account`})
        })
    })
}

// account activation with email
exports.accountActivation = (req, res) => {
    const {token} = req.body
    if(token) {
        // verify token
        jwt.verify(token, process.env.JWT_RESET_ACTIVATION, function(err, decodedToken) {
            if(err) {
                return res.status(400).json({error: 'Incorrect or Expired Link.'})
            }
            // decode user data
            const { username, email, first_name, last_name, gender, current_city, password } = decodedToken
            User.findOne({email}).exec((err, user) =>{
                if(user) {
                    return res.status(400).json({error: `User with this email ${email} already exists.`})
                }
                const newUser = new User({ username, email, first_name, last_name, gender, current_city, password })
                newUser.save((err, user) => {
                    if(err) {
                        console.log('error signup while account activation ====>', err)
                        return res.status(400).json({ error: errorHandler(err) })
                    }
                    user.salt = undefined
                    user.hashed_password = undefined
                    
                    res.json({ user, message: 'SignUp Success!' })
                })
            })
        })
    } else {
        return res.json({ error: 'Something went wrong!'})
    }
}

// googlelogin, googlesignup
exports.googlesignup = passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
    accessType: 'offline',
    approvalPrompt: 'force'
})

exports.googlelogin = passport.authenticate('google', {
    failureRedirect: '/login',
    session: false }), (req, res) => {
        const payload = { id: req.user.id }

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
            const jwt_token = `Bearer ${token}`

            const htmlWithEmbeddedJWT = `
            <html>
            <script>
              // Save JWT to localStorage
              window.localStorage.setItem('token', '${jwt_token}');
              // Redirect browser to root of application
              window.location.href = '/auth/success';
            </script>
          </html>`
          
          res.send(htmlWithEmbeddedJWT)
        })
    }

// signin 
exports.signin = (req, res) => {
    // find user based on email
    const { email, password} = req.body
    User.findOne({email}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: `User with that email ${email} does not exist. Please signup`
            })
        }
        //user found make sure the email and password match
        // fetch authenticate method from user model
        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password dont match'
            })
        }
        // generate a signed token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
        // persist the token as 't' in cookie with expiry date of 9999 secs
        res.cookie('t', token, { expire: new Date() + 9999 })
        // return response with user and token to frontend client
        const {_id, first_name, last_name, email, role} = user
        return res.json({token, user:{_id, first_name, last_name, email, role}})
    })
}

exports.signout = (req, res) =>{
    res.clearCookie('t');
    res.json({ message: 'signout successful'})
}

// send reset password link
exports.forgotPassword = (req, res) => {
    const { email } = req.body

    User.findOne({email}, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: `User with that email ${email} does not exist. Please signup`
            })
        }
        // token sign and verification
        // expiresIn: '24h' // it will be expired after 24 hours // expiresIn: '10h' // it will be expired after 10 hours
        // expiresIn: '20d' // it will be expired after 20 days // expiresIn: '20m' // it will be expired after 20m
        // expiresIn: '120' // it will be expired after 120ms // expiresIn: '120s' // it will be expired after 120s
        const token = jwt.sign({ _id: user._id }, process.env.JWT_RESET_PASSWORD, { expiresIn: '9m' }) 
        const data = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Password Reset Link',
            html:`<h2>Please click on the link given to rest your password</h2>
                  <a>${process.env.CLIENT_URL}/resetpassword/${token}</a>`
        }

        console.log("reset password info", data)

        return user.updateOne({ resetlink: token }, function (err, success) {
            if(err) {
                return res.status(400).json({error: 'reset password error'})
            } else {
                mg.messages().send(data, function (error, body) {
                    if(error) {
                        // console.log("this a error ==>", error)
                        return res.json({
                            error: error.message
                        })
                    }
                    return res.json({ 
                        message: `A reset Email link has been sent to ${email}, Kindly follow the instractions` 
                    })  
                    // console.log("this a error ==>", body)                
                })
            }
        })
    }) 
}

// verfiy reset password link
exports.resetPassword = (req, res) => {
    const {resetlink, newPassword} = req.body
    if(resetlink) {
        // verify token
        jwt.verify(resetlink, process.env.JWT_RESET_PASSWORD, function(error, decodedData) {
            if(error) {
                return res.status(401).json({
                    error: "Incorrect token or it is expired."
                })
            }
            // find user by rest-link token
            User.findOne({resetlink}, (err, user) => {
                if(err || !user) {
                    return res.status(400).json({
                        error: 'User with this token does not exist. Please signup'
                    })
                }
                const obj = {
                    hashed_password: newPassword,
                    resetlink: ''
                }
                // save new password object
                user = _.extend(user, obj)
                user.save( async (err, result) => {
                    if(err) {
                        return res.status(400).json({error: 'Reset password error. Please try again!'})
                    } else {

                        await mailGun.sendMail(user.email, 'reset-password-confirmation')
                        
                        return res.status(200).json({ 
                            success: true,
                            message: 'Your password has been changed successfuly' })
                    }
                })
            })             
        })
    } else {
        return res.status(401).json({error: 'Authentication error!!' })
    }
}

// require login 
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // express-jwt requiers algorithms
    userProperty: 'auth'
})

// is authenticated
exports.isAuth = (req, res, next) => {
    const user = req.profile && req.auth && req.profile._id == req.auth._id
    if (!user) {
        return res.status(403).json({
            error: 'Access denied'
        })
    }
    next()
}

// is admin
exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 'user') {
        return res.status(403).json({
            error: 'Admin resourse! Access denied'
        })
    }
    next()
}



