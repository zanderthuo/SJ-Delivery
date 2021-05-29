const express = require('express')
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../../controllers/auth')
const { role } = require('../../controllers/role')
const { addRider, getRiders, riderRequest, approveRequest, rejectRequest, deleteRider, readRider, updateRider,  } = require('../../controllers/rider')
const { userSignupValidator } = require('../../validator/validators')

router.post('/riders/addrider', addRider)
router.get('/riders/allriders', getRiders)
router.delete('/riders/delete/:riderId', deleteRider)
router.post('/riders/rider-request', riderRequest)
router.put('/riders/approve-request/:riderId', approveRequest)
router.put('/riders/reject-request/:riderId', rejectRequest)

module.exports = router