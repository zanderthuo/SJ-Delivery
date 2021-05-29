const User = require('../models/users')

// get active users

exports.getActiveUsers = async (query) => {
    try {
        const users = await User.find(query).find({ role: ['user', 'admin', 'rider', 'pick-up-agent'] })
        return users
    } catch (err) {
        throw Error(err)
    }
}