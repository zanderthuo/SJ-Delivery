const express = require('express')
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../../controllers/auth')
const { role } = require('../../controllers/role')
const { getVehicles, addVehicles, vehicleById, readVehicle, updateVehicle, deleteVehicle } = require('../../controllers/vehicles')

router.post('/vehicle/addVehicles', addVehicles )
router.get('/vehicle/allVehicles', getVehicles )
router.get('/vehicle/:vehicleId')
router.delete('/vehicle/delete/:vehicleId' )

router.put('/vehicle/' )
router.put('/vehicle/' )

module.exports = router