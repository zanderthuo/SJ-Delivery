const express = require('express')
const router = express.Router()

// load controllers 
// @requireSignin @protected routes
// TODO googlelogin, googlesignup
const { signup, accountActivation, signin, signout, forgotPassword, resetPassword, googlelogin, googlesignup, requireSignin }  = require("../../controllers/auth")
const { userSignupValidator } = require('../../validator/validators')

// @route signup @userdetails
// @route signin @email @password
// @route forgetpassword
// @route signout
router.post('/signup', signup)
router.post('/account-activation', accountActivation)
router.post('/signin', signin)

router.get('/signout', signout)

router.put('/forgot-password', forgotPassword)
router.put('/reset-password', resetPassword)

// router.post('/google-login', googlelogin)
// router.post('/google-signup', googlesignup)
   
module.exports = router
