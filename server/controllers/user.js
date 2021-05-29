const bcrypt = require('bcryptjs')

// models and services
const User = require('../models/users')
const { getActiveUsers } = require('../helpers/user.services')

 /**
   * Add a user
   * @param  { Null } - Request object
   * @return {add a user} res
   */

exports.addUser = (req, res) => {
    const { username, email, first_name, last_name, gender, current_city, password } = req.body
    
    try {
        User.findOne({ email }).exec((err, user) => {
            if(user) {
                return res.status(400).json({error: `User with this email ${email} already exists.`})
            } else {
                const newUser = new User({ username, email, first_name, last_name, gender, current_city, password })

                // Todo send username and password to user
                
                newUser.save().then((err, user) => {
                    res.json({ user, message: 'User added successfully. Refreshing data...' })
                }).catch ((err) => {
                    return res.status(400).json({
                        error: 'User was not saved!'
                    })
                })
            }
        })
    } catch (err) {
        return res.status(400).json({
            error: 'Your request could not be processed.'
        })
    }
}

 /**
   * Get all users
   * @param  { Null } - Request object
   * @return {get all users} res
   */

exports.getUsers = (req, res) => {
    User.find((err, users) => {
        if( err || !users) {
            return res.status(400).json({ error: 'No users exist' })
        }
        res.status(200).json({
            success: true,
            count: users.length, 
            data: users })
    })
}

 /**
   * Get single User id 
   * @param  {id} - Request object
   * @return {user info} res
   * @access Public 
   */

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            })
        }
        req.profile = user
        next() // continue the flow of system
    })
}

 /**
   * Find user by email
   * @param  { email } email - Request object
   * @return { user email/details } res
   */

exports.findUserByEmail = (req, res, next, email) => {

}

exports.getAllActiveUsers = async (req, res) => {
    try {
        const users = await getActiveUsers({ active: true });
        return res.status(200).json({ 
            data: users 
        });
      } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

 /**
   * Read User
   * @param  { null } - Request object
   * @return { null } res
   */

exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}

 /**
   * update user
   * @param  { null } - Request object
   * @return { null } res
   */

exports.update = (req, res) => {
    console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { username, email, first_name, last_name, gender, location, password } = req.body;

    User.findOne({ _id: req.profile._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!username) {
            return res.status(400).json({
                error: 'Username is required'
            });
        } else {
            user.username = username;
        }

        if (!first_name) {
            return res.status(400).json({
                error: 'First Name is required'
            });
        } else {
            user.first_name = first_name;
        }

        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }

        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};

 /**
   * delete user
   * @param  { id } - Request object
   * @return { null } res deleted user
   * @acces  Admin
   */

  exports.deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id })
        
        res.status(200).json({
            success: true,
            message: `User has been deleted successfully!`
        })
    } catch (error) {
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        })
    }
}
