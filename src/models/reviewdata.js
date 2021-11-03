const mongoose = require("mongoose");
const reviewschema = mongoose.Schema({
	UseriD: String,
	reviews: Array,
});
module.exports = mongoose.model("review", reviewschema);
