const mongoose = require("mongoose");

const publicSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  adhar: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,

    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  opponentName: {
    type: String,
    required: false,
  },
  opponentAddress: {
    type: String,
    required: false,
  },

  complaint: {
    type: String,
    required: true,
  },
});

const Public = mongoose.model("PUBLIC", publicSchema);

module.exports = Public;
