const mongoose = require("mongoose");

// utils
const geocoder = require('../utils/geocoder')

const { Schema } = mongoose

const agentSchema = new Schema(
    {
      first_name: { type: String, trim: true, required: true, maxlength: 32, },
      last_name: { type: String, trim: true, required: true, maxlength: 32, },
      username: { type: String, required: true, },
      phone_number: {type: String },
      email: { type: String, trim: true, required: true, unique: true, lowrcase: true, },
      gender: { type: String, required: true},
      idnumber: { type: Number, required: true }, // national id number
      store: { type: String },
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
      isActive: { type: Boolean, default: false },
      status: { type: String, default: 'Waiting Approval', enum: ['Waiting Approval', 'Approved', 'Rejected', 'Suspend'] },
      history: { type: Array, dafault: [], },
      updatedAt: { type: Date, default: Date.now },
      createdAt: { type: Date, default: Date.now, },
    },
    { timestamps: true }
  );


// geocode and create location
agentSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.current_city);
  console.log(loc)
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model("Agent", agentSchema);