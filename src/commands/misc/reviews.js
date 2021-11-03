const Discord = require("discord.js");
const disTube = require("distube");
const mongoose = require("mongoose");
const config = require("../../../settings.json");
const reviews = require("../../models/reviewdata");
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports.run = async (client, message, args, Discord) => {
	let data = await reviews.findOne({
		UseriD: message.author.id,
	});
	if (message.author.id == "550267183503114250" && args[0] == "add") {
		let text = args.slice(1).join(" ");

		if (data) {
			data.reviews.unshift({
				User: message.author.id,
				review: text,
			});
			data.save();

			message.reply("Added Boss");
		} else if (!data) {
			let newData = new reviews({
				UseriD: message.author.id,
				reviews: [
					{
						review: text,
					},
				],
			});
			newData.save();

			return;
		}
	} else {
		if (!data) {
			return;
		}

		const embed1 = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("__Jarvis Reviews__")
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/833731235821387826/905510143616229406/Healthcare-Thank-You.png"
			)
			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription(
				data.reviews
					.map((review, id, reviews) => ` **${id + 1}**.   \`${reviews[id].review}\``)
					.join("\n")
			)

			.setFooter(`Thank to All for these Amazing reviews 🥰 💘`, client.user.displayAvatarURL())
			.setTimestamp();
		message.channel.send({ embeds: [embed1] });
	}
};

module.exports.config = {
	name: "reviews",
	aliases: [],
	Description: "Command",
};
