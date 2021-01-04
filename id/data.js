const mongoose = require("mongoose");
const dataschema = mongoose.Schema({

  name :String,
  userID: String,
  ID: String,



})
module.exports = mongoose.model("Data", dataschema ); 