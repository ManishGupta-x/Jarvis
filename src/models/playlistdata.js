const mongoose = require("mongoose");
const playlistSchema = mongoose.Schema({

    UserID: String,
    playlist: Array
    


})
module.exports = mongoose.model("playlist", playlistSchema);