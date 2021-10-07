const mongoose = require("mongoose");
const dataschema = mongoose.Schema({

  name :String,
  userID: String,
  Konami: Number,



})
module.exports = mongoose.model("Data", dataschema ); 