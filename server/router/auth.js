const express = require("express");
const Public = require("../model/publicSchema");
const Police = require("../model/policeSchema");
<<<<<<< HEAD
const VehicleData = require("../model/vehicleSchema");
=======
const Image = require("../model/imageSchema");
>>>>>>> 7d8736fa0fc3f1e49db09372b18d4a8428e966c5
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const storage = multer.memoryStorage();
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

<<<<<<< HEAD
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

//Editing Details From Database
/*router.put("/update/:id", async (req, res) => {
  VehicleData.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true });
    }
  );
});

//deleating Data from database
router.delete("/delete/:id", (req, res) => {
  VehicleData.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
    if (err) {
      res.send(err);
    }
    return res.json(deleteItem);
  });
});
*/

router.put("/update", async (req, res) => {
  const nvehiclenumber = req.body.nvehiclenumber;
  const ncategory = req.body.ncategory;
  const nregisteredname = req.body.nregisteredname;
  const nfine = req.body.nfine;
  try {
    await VehicleData.findById(id, (error, frd) => {
      frd.vehiclenumber = nvehiclenumber;
      frd.category = ncategory;
      frd.registeredname = nregisteredname;
      frd.fine = Number(nfine);
      frd.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});
=======
// image upload section

router.post(
  "/policeUI/AddGallary",
  upload.single("image"),
  function (req, res, next) {
    const { image, caption } = req.body;
    image.img.data = fs.readFileSync(req.file.path);
    image.img.contentType = "image/jpg";
    image.save(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  }
);

>>>>>>> 7d8736fa0fc3f1e49db09372b18d4a8428e966c5
module.exports = router;
