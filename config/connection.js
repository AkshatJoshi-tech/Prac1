const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/Practice").then(() => {
  console.log("DataBase Connected SuccessFully!!");
});
