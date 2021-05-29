const passport = require('passport')
const JWTStrategy = require('passport-jwt').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose')

// model user
const User = require("../models/users")
const secret = process.env.JWT_SECRET


const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = secret

passport.use(
    new JWTStrategy(opts, (payload, done) => {
        User.findById(payload.id).then(user => {
            if(user) {
                return done(null, user)
            }
            return done(null, false)
        })
        .catch(err => {
            return done(err, false)
        })
    })
)

// google pass
passport.use(
    new GoogleStrategy({ clientID: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET , callbackURL: `${process.env.CLIENT_URL}/api/v1/${process.env.GOOGLE_CALLBACK_URL}`},
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ email: profile.email }).then(user => {
                if(user) {
                    return done(null, user)
                }

                // split name 
                const name = profile.displayName.split('')

                const newUser = new User({
                    provider: 'google',
                    googleId: profile.id,
                    email: profile.email,
                    first_name: name[0],
                    last_name: name[1],
                    image_url: profile.piture,
                    password: null
                })

                newUser.save((err, user) => {
                    if(err) {
                        return done(err, false)
                    }
                    return done(null, user)
                })
            }).catch(err => {
                return done(err, flase)
            })
        }
    )
)




