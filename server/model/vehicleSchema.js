const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehiclenumber: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  registeredname: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  fine: {
    type: Number,
    required: false,
  },
});

const VehicleData = mongoose.model("VEHICLEDATA", vehicleSchema);

module.exports = VehicleData;
