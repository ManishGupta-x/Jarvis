const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({

    UserID: String,
    list : Array,
    status : String


})
module.exports = mongoose.model("todo", todoSchema ); 