const express = require('express')
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../../controllers/auth')
const { addUser, getUsers, findUserByEmail, userById, getAllActiveUsers, deleteUser, read, update } = require('../../controllers/user')
const { userSignupValidator } = require('../../validator/validators')

// @route userID
router.get('/user/:userId', requireSignin, isAuth, (req, res) => {
    res.json({
        user: req.profile
    })
})

router.post('/adduser', addUser) 
router.get('/user/allUsers', getUsers)
router.get('/active', getAllActiveUsers)
// router.get ('/:email', findUserByEmail)
router.get('/user/:userId', requireSignin, isAuth, read)
router.put('/user/:userId', requireSignin, isAuth, update)
router.delete('user/:userId', deleteUser)

router.param('userId', userById)

module.exports = router;