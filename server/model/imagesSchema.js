const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gallaryImage: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("IMAGE", imagesSchema);
module.exports = Image;
