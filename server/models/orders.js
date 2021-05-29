const mongoose = require("mongoose");
const { v1: uuidv1} = require("uuid");


const orderSchema = mongoose.Schema({
    username: { type : String },
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    status: { type: String, required: true, enum: [ "Placed", "Cancelled", "Accepted", "Completed", "Ready for Pickup", "Out For Delivery" ], },
    items: { type: Array, },
    specialInstructions: { type: String, },
    selectedShop:  { type: String, },
    selectedShop_id: { type: String, },
    favorited: { type: Boolean, },
    date: { type: String, },
    time: { type: String, },
    timeUntilArrival: { type: String, },
    secondsUntilArrival: { type: Number, },
    timeSelectedForPickup: { type: String, },
    expectedPickupTime: { type: String, },
    totalPrice: { type: Number, required: true, default: 0.0, },
    isPaid: { type: Boolean, required: true, default: false, },
    paidAt: { type: Date, },
    deliveredAt: { type: Date, },
    completed: { type: Boolean }
});

module.exports = mongoose.model("Order", orderSchema);