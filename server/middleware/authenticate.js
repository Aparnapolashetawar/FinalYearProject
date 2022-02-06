const jwt = require("jsonwebtoken");
const User = require("../model/policeSchema");
const mongoose = require("mongoose");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
    const rootuser = await User.findOne({
      _id: verifytoken._id,
      "tokens.token": token,
    });
    if (!rootuser) {
      console.log("USer not found");
    }
    req.token = token;
    req.rootuser = rootuser;
    req.userid = rootuser._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
    console.log(err);
  }
};
module.exports = authenticate;
