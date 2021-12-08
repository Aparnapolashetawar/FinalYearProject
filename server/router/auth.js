const express = require("express");
const Public = require("../model/publicSchema");
const Police = require("../model/policeSchema");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");

//Publice Info below

router.get("/", (req, res) => {
  res.send("hello world from the server as router");
});

router.post("/Complaint", async (req, res) => {
  const {
    fullname,
    phone,
    email,
    address,
    pincode,
    opponentName,
    opponentAddress,
    opponentPincode,
    complaint,
  } = req.body;

  if (!fullname || !phone || !email || !address || !pincode || !complaint) {
    return res.status(422).json({ error: "please fill the filds" });
  }

  try {
    const public = new Public({
      fullname,
      phone,
      email,
      address,
      pincode,
      opponentName,
      opponentAddress,
      opponentPincode,
      complaint,
    });

    const publicRegister = await public.save();
    res.status(201).json({ message: "user complaint registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

//Admin Info Below

router.post("/Admin", async (request, responce) => {
  const { policeName, policeEmail, policePassword, cpolicePassword } =
    request.body;

  if (!policeEmail || !policePassword || !cpolicePassword || !policeName) {
    return responce.status(422).json({ error: "please fill the filds" });
  }

  try {
    const policeExist = await Police.findOne({ policeEmail: policeEmail });
    if (policeExist) {
      return responce.status(422).json({ error: "Email already Exist" });
    } else if (policePassword != cpolicePassword) {
      return responce.status(422).json({ error: "Password not matching" });
    } else {
      const police = new Police({
        policeName,
        policeEmail,
        policePassword,
        cpolicePassword,
      });
      await police.save();

      responce.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Police Login Route

router.post("/Logins", async (requ, resp) => {
  try {
    const { loginEmail, loginPassword } = requ.body;
    console.log("From server");

    if (!loginEmail || !loginPassword) {
      return resp.status(400).json({ error: "Please fill the data" });
    }

    const policeLogin = await Police.findOne({ policeEmail: loginEmail });

    //console.log(policeLogin);

    if (policeLogin) {
      const isMatch = await bcrypt.compare(
        loginPassword,
        policeLogin.policePassword
      );

      if (!isMatch) {
        resp.status(400).json({ error: "Invalid credentials " });
      } else {
        resp.json({ message: "user Login Successful" });
      }
    } else {
      resp.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
