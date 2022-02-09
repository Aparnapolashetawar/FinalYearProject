const express = require("express");
const multer = require("multer");
const Public = require("../model/publicSchema");
const authenticate = require("../middleware/authenticate");
const Image = require("../model/imagesSchema");
const Police = require("../model/policeSchema");
const VehicleData = require("../model/vehicleSchema");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
let path = require("path");

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
    adhar,
    phone,
    email,
    address,
    pincode,
    opponentName,
    opponentAddress,
    complaint,
  } = req.body;

  if (
    !fullname ||
    !adhar ||
    !phone ||
    !email ||
    !address ||
    !pincode ||
    !complaint
  ) {
    return res.status(422).json({ error: "please fill the filds" });
  }
  const ph = ["1", "2", "3", "4", "5", "6"];
  if (adhar.length !== 12) {
    return res.status(422).json({ error: "aadhar invalid" });
  } else if (phone.length !== 10) {
    return res.status(422).json({ error: "phone invalid" });
  } else if (phone[0] in ph) {
    return res.status(422).json({ error: "phone invalid" });
  } else if (pincode.length !== 6) {
    return res.status(422).json({ error: "pincode invalid" });
  }

  try {
    const public = new Public({
      fullname,
      adhar,
      phone,
      email,
      address,
      pincode,
      opponentName,
      opponentAddress,

      complaint,
    });

    const publicRegister = await public.save();
    res.status(201).json({ message: "user complaint registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

//Admin Info Below

//Admin Verification

router.post("/Verify", async (request, responce) => {
  const { adminkey } = request.body;

  if (!adminkey) {
    return responce.status(422).json({ error: "please fill the filds" });
  }

  try {
    if (adminkey != `admin`) {
      return responce.status(422).json({ error: "Invalid Admin Key" });
    }

    responce.status(201).json({ message: "Admin login successfully" });
    //request.session.redirectTo = "/PoliceUI/Admin";
    //return responce.redirect("/PoliceUI/Admin");
  } catch (err) {
    console.log(err);
  }
});

//Regestration of polices

router.post("/Admins", async (request, responce) => {
  const { policeName, policeEmail, policePassword, cpolicePassword, adminkey } =
    request.body;

  if (
    !policeEmail ||
    !policePassword ||
    !cpolicePassword ||
    !policeName ||
    !adminkey
  ) {
    return responce.status(422).json({ error: "please fill the filds" });
  }

  try {
    const policeExist = await Police.findOne({ policeEmail: policeEmail });
    if (policeExist) {
      return responce.status(422).json({ error: "Email already Exist" });
    } else if (policePassword != cpolicePassword) {
      return responce.status(422).json({ error: "Password not matching" });
    } else if (adminkey != `admin`) {
      return responce.status(422).json({ error: "Invalid Admin Key" });
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

//Police Info Display
router.get("/Admin", (req, res) => {
  Police.find().exec((err, Admin) => {
    if (err) return res.status(422).json({ success: false, err });
    return res.status(200).json({ success: true, Admin: Admin });
  });
});

//Update Query
router.put("/update/:id", (req, res) => {
  Police.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, Admin) => {
      if (err) return res.sendStatus(400).json({ success: false, err });

      return res.status(200).json({ success: true });
    }
  );
});

//Delete Query
router.delete("/delete/:id", (req, res) => {
  Police.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
    if (err) {
      res.send(err);
    }
    return res.json(deleteItem);
  });
});

//details of id

router.get("/detail/:id", (req, res) => {
  let id = req.params.id;
  Police.findById(id, function (err, post) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, post });
  });
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
  const { vehiclenumber, category, registeredname, place, fine } = req.body;

  if (!vehiclenumber || !category || !registeredname || !place) {
    return res.status(422).json({ error: "please fill the filds" });
  }

  try {
    const vehicledata = new VehicleData({
      vehiclenumber,
      category,

      registeredname,
      place,
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

//gallary Storage

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads/");
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//displaying details of gallaries
router.get("/AddGallaries", (req, res) => {
  Image.find()
    .then((gal) => res.json(gal))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//adding gallary details
router.post("/AddGallaries", upload.single("image"), (req, res) => {
  const image = new Image({
    title: req.body.title,
    description: req.body.description,
    image: req.file.originalname,
  });
  image
    .save()
    .then(() => res.json("The new Image added"))
    .catch((err) => res.status(400).json(`Error ${err}`));
});

//find by id
// router.get("/:id", (req, res) => {
//   Image.findById(req.params.id)
//     .then((gal) => res.json(gal))
//     .catch((err) => res.status(400).json(`Error:${err}`));
// });

// logout functinality

router.get("/policeUI/logout", (req, res) => {
  console.log("helwww logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});
module.exports = router;

// router.post("/Logins", authenticate, (req, res) => {
//   console.log("hii Homes");
//   res.send(req.rootuser);
// });

router.get("/Home", authenticate, (req, res) => {
  console.log("Hello My police Home");
  res.send(req.rootPolice);
});
