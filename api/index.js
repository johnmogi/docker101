const express = require("express");
const { port, host } = require("./src/config");
const { connectDb } = require("./src/helpers/db");
const app = express();

connectDb()
  .on("disconnected", connectDb)
  .on("error", console.log())
  .once("open", startServer);

const startServer = () => {
  app.listen(port, () => {
    console.log(`started at http://localhost:${port}, destination: ${host}`);
  });
};

app.get("/test", (req, res) => {
  res.send("all correct");
});
