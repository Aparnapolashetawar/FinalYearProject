const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const policeSchema = new mongoose.Schema({
  policeName: {
    type: String,
    required: true,
  },
  policeEmail: {
    type: String,
    required: true,
  },
  policePassword: {
    type: String,
    required: true,
  },
  cpolicePassword: {
    type: String,
    required: true,
  },
});

policeSchema.pre("save", async function (next) {
  console.log("hi from inside");
  if (this.isModified("policePassword")) {
    this.policePassword = await bcrypt.hash(this.policePassword, 12);
    this.cpolicePassword = await bcrypt.hash(this.cpolicePassword, 12);
  }
  next();
});

const Police = mongoose.model("POLICE", policeSchema);

module.exports = Police;
