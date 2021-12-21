const express = require("express");
const multer = require("multer");
const Public = require("../model/publicSchema");
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

router.post("/Admins", async (request, responce) => {
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/gallaries").post(upload.single("image"), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.file.filename;

  const dataData = {
    title,
    description,
    image,
  };

  const data = new Image(dataData);

  data
    .save()
    .then(() => res.json("Image Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//displaying images gallary

//photo = Image.find({}); add this line
// photo.exec(function(err,data){
//   if(err) throw err;
//   res.render('upload-file',{title:'Upload File',records:data,success:success})
// })

/* add from this
router.get("/AddGallary", function (req, res, next) {
  photo.exec(function (err, data) {
    if (err) throw err;
    res.render("upload-file", {
      title: "Upload File",
      records: data,
      success: "success",
    });
  });
});
*/

router.get("/AddGallary", (req, res) => {
  Image.find().exec((err, AddGallary) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, AddGallary: AddGallary });
  });
});

// logout functinality
router.get("/policeUI/logout", (req, res) => {
  console.log("helwww logout");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});
module.exports = router;
