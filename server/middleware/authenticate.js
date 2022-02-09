const jwt = require("jsonwebtoken");
const Police = require("../model/policeSchema");
const mongoose = require("mongoose");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
    const rootPolice = await Police.findOne({
      _id: verifytoken._id,
      "tokens.token": token,
    });
    if (!rootPolice) {
      console.log("User not found");
    }
    req.token = token;
    req.rootPolice = rootPolice;
    req.userid = rootPolice._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
    console.log(err);
  }
};
module.exports = authenticate;
