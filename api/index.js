const express = require("express");
const { port, host } = require("./src/config");
const { connectDb } = require("./src/helpers/db");
const app = express();

app.get("/test", (req, res) => {
  res.send("all correct");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`started at http://localhost:${port}, destination: ${host}`);
  });
};
connectDb()
  .on("error", console.log())
  .on("disconnected", connectDb)
  .once(startServer);
