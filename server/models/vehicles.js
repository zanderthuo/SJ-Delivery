const mongoose = require("mongoose")
const slug  = require('mongoose-slug-generator')

const { Schema } = mongoose

const options = { separator: '-', lang: 'en', truncate: 120 } 
mongoose.plugin(slug, options)


// vehicle
const vehicleSchema = Schema({
    vehicleType :{ type : String, required : true },
    image: {
        data: Buffer,
        contentType: String
    },
    vehicleBrand       :{ type : String, required : true },
    numberPlate     :{ type : String, required : true },
    capacity     :{ type : Number, required : true },
    cargoVolume: { type : Number, required : true },
    cargoType   :{ type : String, required : true },
    taxAddon    :{ type : Number, required : true },
    additional   :{ type : String },
    isActive: { type: Boolean, default: true },
    rider: {
        type: Schema.Types.ObjectId,
        ref: 'Rider',
        default: null
      },
    updatedAt: { type: Date, default: Date.now, },
    createdAt: { type: Date, default: Date.now, },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);