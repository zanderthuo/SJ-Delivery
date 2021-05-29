const bcrypt = require('bcryptjs')
const crypto = require('crypto')

// models and helpers
const mg = require('../utils/mailgun-services')
const Vehicle = require('../models/vehicles')
const Rider = require('../models/riders')
const User = require('../models/users')
const role = require('./role')


 /**
   * @desc adds an agent 
   * @route POST /api/v1/agents
   * @param  { None } - Request object
   * @return { get all users } res
   * @access Public
   */

  exports.addRider = async (req, res, next) => {
    try {
        console.log(req.body)
        const rider = await Rider.create(req.body);

        return res.status(201).json({
          success: true,
          data: rider
        });

    } catch (err) {
        console.error(err)
        if (err.code === 11000) {
            return res.status(400).json({ error: 'This rider already exists' })
        }
        res.status(500).json({ error: 'Server error' })
    }
 }

 /**
   * @desc Creates a riders
   * @route POST /api/v1/riders
   * @param  { None } - Request object
   * @return { get all riders } res
   * @access Public
   */

 exports.getRiders = async (req, res, next) => {
    try {
        const riders = await Rider.find();
        
        return res.status(200).json({
           success: true,
           count: riders.length,
           data: riders
        });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Sever error'})
    }
 }

 /**
   * @desc Signup a rider rider
   * @route POST /api/v1/riders/rider-request
   * @param  { None } - Request object
   * @return { request to be a riders } res
   * @access Public
   */

exports.signup = async (req, res) =>{
    try {
        const { email,  firstName, lastName, password } = req.body

        // check if user is available
        const userDoc = await User.findOne({ email, resetlink: req.params.token })

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // query user id
        const query = { _id: userDoc._id }
        const update = { email, firstName, lastName, password: hash, resetlink: undefined } 

        await User.findOneAndUpdate(query, update, {
            new: true
        })

        const riderDoc = await Rider.findOne({ email })

        await createRiderVehicle(riderDoc)

        res.status(200).json({
            sucess: true,
            data: riderDoc
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
}

 /**
   * @desc Creates request for user to be  a rider
   * @route POST /api/v1/riders/rider-request
   * @param  { None } - Request object
   * @return { request to be a riders } 
   * @access Public
   */

 exports.riderRequest = async (req, res) => {
     try {
         console.log(req.body)
         const { username, email, first_name, last_name, gender, idnumber, vehicle, current_city } = req.body

         if(!username || !email) {
             return res
            .status(400)
            .json({ error: 'You must enter your username and email.' });
         }

         if(!first_name || !last_name) {
            return res
            .status(400)
            .json({ error: 'You must enter your full name.' });   
         }

         if(!current_city) {
            return res
            .status(400)
            .json({ error: 'You must enter your currrent city.' });   
         }

        // check if rider exist
        const existingRider = await Rider.findOne({ email });
        if(existingRider) {
            return res
            .status(400)
            .json({ error: `This ${email} email address is already in use.` });
        }


         const rider = new Rider({ username, email, first_name, last_name, gender, idnumber, vehicle, current_city })
        //  console.log('rider request details ==>', rider)
        //  save data to rider
         const riderDoc = await rider.save()
        //  console.log('rider request details', riderDoc)
        
        // send response email to user 
        // Todo create a mailgun template
         await mg.sendEmail(email, 'rider-application')
        
         return res.status(201).json({
            success: true,
            message: `We have received your request! We will reach out to you on your phone number ${email}!`,
            data: riderDoc
          });

     } catch (err) {
         return res.status(400).json({
             error: 'Your request could not be processed. Please try again.'
         })
     }
 }

 /**
   * @desc Admin approve request for user to be a rider
   * @route POST /api/v1/riders/rider-approve
   * @param  { Id } - Request object
   * @return { Approved } res
   * @access Admin
   */

exports.approveRequest = async (req, res) => {
    try {
        const riderId = req.params.riderId
        const query = { _id: riderId }
        const update = { status: 'Approved', isActive: true }
    
        // find rider and update status
        const riderDoc = await Rider.findOneAndUpdate(query, update, {new: true})
        console.log('status changed to approved ==>', riderDoc)
        console.log('check data to create user==>', createRiderUser(
            riderDoc.email,
            riderDoc.first_name,
            riderId,
            req.headers.host
        ))

        await createRiderUser(
            riderDoc.email,
            riderDoc.first_name,
            riderId,
            req.headers.host
        )
    
        res.status(200).json({
            success: true
        })

    } catch (err) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
}

 /**
   * @desc Admin reject request for user to be a rider
   * @route POST /api/v1/riders/rider-reject
   * @param  { Id } - Request object
   * @return { Rejected } res
   * @access Admin
   */
  
exports.rejectRequest = async (req, res) => {
    try {
       const riderId = req.params.riderId
       
       const query = { _id: riderId }
       const update = { status: 'Rejected' }

       // find rider and update status
       await Rider.findOneAndUpdate(query, update, {
           new: true
       })

       res.status(200).json({
           sucess: true
       })
    } catch(err) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }

}

 /**
   * @desc Delete rider
   * @route DELETE /api/v1/riders/delete/:id
   * @param  { id } - Request object
   * @return { rider delete } res
   * @access Admin
   */

exports.deleteRider = async (req, res) => {
    try {
        const rider = await Rider.deleteOne({ _id: req.params.id })
        
        res.status(200).json({
            success: true,
            message: `Rider has been deleted successfully!`,
            rider
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
}

 /**
   * @func createRiderVehicle from user data
   * @desc create Rider Vehicle
   * 
   */

 const createRiderVehicle = async ({ _id, vehicle}) => {
     const newVehicle = new Vehicle({
     vehicleType: 'Boda Boda',
     vehicleBrand: vehicle,
     rider: _id,
     capacity: 5000,
     cargoType: 'flowers',
     cargoVolume: 50,
     numberPlate: 'kas-234r',
     taxAddon: 10,
     isActive: false
    })
    console.log(newVehicle)
    return await newVehicle.save()
 }
  
 /**
   * @func createRiderUser from user data
   * @desc change user role to rider, add user to user table
   * 
   */

const createRiderUser = async (email, first_name, last_name, rider, host) => {
    const firstName = first_name
    const lastName = last_name

    // check if user exist 
    const existingUser = await User.findOne({ email })
    if(existingUser) {
        // query for user Id and update user to rider
        const query = { _id: existingUser._id }
        const update = { rider, role: role.ROLES.Rider }
        const riderDoc = await Rider.findOne({ email })

        // add rider to vehicle table
        await createRiderVehicle(riderDoc)

        // send welcome email to rider
        await mg.sendEmail(email, 'rider-welcome', null, first_name)

        return  User.findOneAndUpdate(query, update, {
            new: true
        })
    } else {
        const buffer = await crypto.randomBytes(48)
        const resetLink = buffer.toString('hex')
        const resetPasswordLink = resetLink

        const user = new User({ email, firstName, lastName, resetPasswordLink, rider, role: role.ROLES.Rider })

        // send rider an email for signup
        await mg.sendEmail(email, 'rider-signup', host, {
            resetLink,
            email
        })
        
        return await user.save()
    }
}
