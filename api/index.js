const express = require("express");
const app = express();
const PORT = 3000;
app.get("/test", (req, res) => {
  res.send("all correct");
});
app.listen(PORT);
console.log(`started at http://localhost:${PORT}`);
