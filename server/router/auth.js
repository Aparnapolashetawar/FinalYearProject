const express = require("express");
const Public = require("../model/publicSchema");
const Image = require("../model/imagesSchema");
const Police = require("../model/policeSchema");
const VehicleData = require("../model/vehicleSchema");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

//Image Storage
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "/client/src/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Publice Info below

//displaying details
router.get("/Complaints", (req, res) => {
  Public.find().exec((err, Complaints) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, Complaints: Complaints });
  });
});

//adding details

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
    let token;
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

      token = await policeLogin.generateAuthToken();
      console.log(token);
      resp.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

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

//Vehicle Info Below

router.post("/AddVehicles", async (req, res) => {
  const { vehiclenumber, category, registeredname, fine } = req.body;

  if (!vehiclenumber || !category || !registeredname) {
    return res.status(422).json({ error: "please fill the filds" });
  }

  try {
    const vehicledata = new VehicleData({
      vehiclenumber,
      category,
      registeredname,
      fine,
    });

    const vehicleRegister = await vehicledata.save();
    res.status(201).json({ message: "user vehicle registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

//displaying details of Vehicle
router.get("/AddVehicle", (req, res) => {
  VehicleData.find().exec((err, AddVehicle) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, AddVehicle: AddVehicle });
  });
});

//gallaries Details

router.post("/gallaries", upload.single("gallaryImage"), (req, res) => {
  const image = new Image({
    title: req.body.title,
    description: req.body.description,
    gallaryImage: req.file.originalname,
  });
  image
    .save()
    .then(() => res.json("New Post Added!"))
    .catch((err) => res.status(400).json(`error:${err}`));
});

//desplaying Gallaries

router.get("/gallaries", (req, res) => {
  Image.find()
    .then((gallary) => res.json(gallary))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

module.exports = router;
