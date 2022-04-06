const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/myapp");

module.exports.connectDB = () => {
  mongoose.connect();
  return mongoose.connection;
};
