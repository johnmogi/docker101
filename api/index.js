const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.get("/test", (req, res) => {
  res.send("all correct");
});
// insert db connection
mongoose.connect("mongodb://localhost:27017/docker101");

// app.listen(PORT);
// console.log(`started at http://localhost:${PORT}, destination: ${HOST}`);
