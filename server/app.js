const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
require("./db/conn");

//const Public = require("./model/publicSchema");
//const Police=require('./model/policeSchema');
// const Image = require("./model/imageSchema");

app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

app.use(require("./router/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("hello world from the server as app");
// });
app.get("/About", middleware, (req, res) => {
  res.send("hello About from the server");
});
app.get("/Complaint", (req, res) => {
  res.send("hello Complaints from the server");
});
app.get("/Logins", (req, res) => {
  res.send("hello Login from the server");
});

app.get("/Admin", (req, res) => {
  res.send("hello Admin from the server");
});

app.get("/Gallary", (req, res) => {
  res.send("hello gallary from the server");
});

app.get("/AddVehicles", (req, res) => {
  res.send("hello police from the server");
});
app.get("/policeUI/AddGallary",(req,res)=>{
res.send("hello policeui addgallary from the server")
})
console.log("yess");
app.listen(PORT, () => {
  console.log(`server is running and having port number ${PORT}`);
});
