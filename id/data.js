const mongoose = require("mongoose");
const dataschema = mongoose.Schema({

  name :String,
  userID: String,
  Konami: String,



})
module.exports = mongoose.model("Data", dataschema ); 