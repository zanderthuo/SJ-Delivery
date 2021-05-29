const mongoose = require('mongoose')
const geocoder = require('../utils/geocoder')

const { Schema } = mongoose

const pickStoreSchema = new Schema({
  store_id: { type: String, required: [true, 'Please add a store ID'], unique: true, trim: true, maxlength: [10, 'pickup store ID must be less than 10 chars'] },
  store_name: { type: String, required: true},
  store_image_url: { type: String},
  town: { type: String, required: [true, 'Please add an address'] }, // address
  location: { 
    type: { 
        type: String, 
        enum: ['Point'] 
    },
    coordinates: { 
        type: [Number], 
        index: '2dsphere' },
    formattedAddress: { type: String }
  },
  pickupagent: {
    type: Schema.Types.ObjectId,
    ref: 'Agent',
    default: null
  },
  updatedAt: { type: Date, default: Date.now, },
  createdAt: { type: Date, default: Date.now }
});

// geocode and create location
pickStoreSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.town);
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
  


module.exports = mongoose.model('PickStore', pickStoreSchema);