const mongoose = require("mongoose");
const dataschema = mongoose.Schema({

  name :String,
  userID: String,
  id: Number,



})
module.exports = mongoose.model("data", dataschema ); 