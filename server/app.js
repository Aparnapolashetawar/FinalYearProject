const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB =
  "mongodb+srv://polashetawaraparna:Apu@1311@cluster0.tcgjq.mongodb.net/policeproject?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedToplogy: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection succesful!!!");
  })
  .catch((err) => {
    console.log("no connection, Why????");
  });

const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("hello world from the server");
});
app.get("/About", middleware, (req, res) => {
  res.send("hello About from the server");
});
app.get("/Complaints", (req, res) => {
  res.send("hello Complaints from the server");
});
app.get("/Login", (req, res) => {
  res.send("hello Login from the server");
});
app.get("/Gallary", (req, res) => {
  res.send("hello gallary from the server");
});
console.log("yess");
app.listen(5000, () => {
  console.log("server is running");
});
