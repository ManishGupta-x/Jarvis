const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({

    UserID: String,
    list : Array


})
module.exports = mongoose.model("todo", todoSchema ); 