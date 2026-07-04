const mongoose = require("mongoose");
const dataschema = mongoose.Schema({

  name :String,
  userID: String,
  steamID: String,



})
module.exports = mongoose.model("steam", dataschema ); 