const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//password hashing

policeSchema.pre("save", async function (next) {
  console.log("hi from inside");
  if (this.isModified("policePassword")) {
    this.policePassword = await bcrypt.hash(this.policePassword, 12);
    this.cpolicePassword = await bcrypt.hash(this.cpolicePassword, 12);
  }
  next();
});

//generating Token

policeSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Police = mongoose.model("POLICE", policeSchema);

module.exports = Police;
