const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var user_model = require('./User');
const UserModel = user_model.User;


const vehicleSchema = new Schema({
  hostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
 },
  make: String,
  model: String,
  vin: String,
  street: String,
  city: String,
  availableFrom: {
    type: String,
  },
  availableTill: {
    type: String,
  },
  carImage:{
    type:String
  },
  // carImage:{
  //   data: Buffer,
  //   contentType: String,
  // },
  pricing: Number,
  rating: Number
});

const vehicle = mongoose.model('Vehicle',vehicleSchema);

module.exports = {Vehicle:vehicle };

