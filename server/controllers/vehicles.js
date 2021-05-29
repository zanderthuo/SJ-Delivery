
// models and helpers
const Vehicle = require('../models/vehicles')

exports.addVehicles = async (req, res, next) => {
    try {
        const { vehicleType, vehicleBrand, numberPlate, capacity, cargoVolume, cargoType, taxAddon } = req.body
      
        const vehicle = new Vehicle({ vehicleType, vehicleBrand, numberPlate, capacity, cargoVolume, cargoType, taxAddon })
        console.log('my car ===>', vehicle)
        const vehicleDoc = await vehicle.save()
        console.log('my car db ===>', vehicleDoc )


        res.status(200).json({
            success: true,
            message: `Vehicle has been added successfully!`,
            vehicle: vehicleDoc
        })

    } catch (err) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
}

exports.getVehicles = async (req, res) => {
    try {
        const vehicles = Vehicle.find({isActive: true}).populate('rider', 'first_name').
        exec(function (err, vehicles) {
            if (err) return handleError(err);
            console.log('The rider is %s', vehicles.rider);
          })

        res.status(200).json({
            vehicles
        })
    } catch (error) {
        res.status(400).json({
            error: 'your request could not be processed. Please try again.'
        })
    }
}