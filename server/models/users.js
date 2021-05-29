const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1} = require("uuid");

// helpers and utils
const geocoder = require('../utils/geocoder')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    first_name: { type: String, trim: true, required: true, maxlength: 32, },
    last_name: { type: String, trim: true, required: true, maxlength: 32, },
    username: { type: String, required: true, },
    email: { type: String, trim: true, required: true, unique: true, lowrcase: true, },
    gender: {type: String, required: true},
    current_city: { type: String, required: true },
    location: { 
      type: { 
          type: String, 
          enum: ['Point'] 
      },
      coordinates: { 
          type: [Number], 
          index: '2dsphere' },
      formattedAddress: { type: String }
    }, // [ "lat": 40.7484474, "lng": -73.9871516 ]
    rider: {
      type: Schema.Types.ObjectId,
      ref: 'Rider',
      default: null 
    }, // riders table
    agent: {
      type: Schema.Types.ObjectId,
      ref: 'Agent',
      default: null 
    }, // agents table
    resetlink: {data: String, default: ''},
    hashed_password: { type: String, required: true, minlength: 6, maxlength: 128, },
    about: { type: String, trim: true, },
    active: { type: Boolean, default: true },
    image_url: { type: String, trim: true, },
    salt: String,
    role: { type: String, default: 'user', enum: ['user', 'admin', 'rider', 'pick-up-agent'], },
    history: { type: Array, dafault: [], },
    updatedAt: { type: Date, default: Date.now, },
    createdAt: { type: Date, default: Date.now, },
  },
  { timestamps: true }
);


// geocode and create location
userSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.current_city);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // do not save address
  this.address = undefined;
  next();
});

// virtual field
userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  // authenticate user method
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
   
  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
};

module.exports = mongoose.model("User", userSchema);
