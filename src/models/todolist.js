const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({

    userID: String,
    list : Array


})
module.exports = mongoose.model("todo", todoSchema ); 