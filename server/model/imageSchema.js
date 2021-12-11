const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: {
    data: buffer,
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
    max: 50,
  },
});

const Image = mongoose.model("IMAGE", imageSchema);

module.exports = Image;
