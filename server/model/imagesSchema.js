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
  image: {
    type: String,
    required: true,
  },
});

// imagesSchema.methods.toJSON = function () {
//   const result = this.toObject();
//   return result;
// };
const Image = mongoose.model("IMAGE", imagesSchema);
module.exports = Image;
