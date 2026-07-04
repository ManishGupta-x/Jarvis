const steamModel = require("../../models/steamdata");
const Discord = require("discord.js");
const disTube = require("distube");
const mongoose = require("mongoose");
const config = require("../../../config");
mongoose.connect(config.mongodb, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
module.exports.run = async (client, message, args, Discord) => {
	const steamdata = await steamModel.findOne({
		userID: message.author.id,
	});

	if (!steamdata && !args[0])
		return message.channel.send(`You Haven't Registered Your Steam ID ❌`);

	if (args[0] && args[0].includes("steamcommunity.com")) {
		const steamlink = args[0];
		
		if (
			steamlink.includes("steamcommunity.com/id/") ||
			steamlink.includes("steamcommunity.com/profiles/")
		) {
			if (!steamdata) {
				let newData = new steamModel({
					name: message.author.username,
					userID: message.author.id,
					steamID: steamlink,
				});
				newData.save();
				message.channel.send(`Your Steam ID Has Been Registered ✅`);
			} else {
				message.channel.send(`You Already Registered Your Steam ID ❌ Please contact the server owner or nightmare_fuel if you want to change your steam ID`);
			}
		}
	} else if (!args[0]) {
		const steamLink = steamdata.steamID;
		if (!steamLink)
			return message.channel.send(`You Haven't Registered Your Steam ID ❌`);
		message.channel.send(`Your Steam ID is ${steamLink}`);
	} else if(args[0])
	{
		if (message.mentions.members.first()) {
			const steamdata = await steamModel.findOne({
				userID: message.mentions.members.first().id,
			});
			if (!steamdata) {
				return message.channel.send(`The person you are mentioning doesn't have steam id registered ❌`);
			}
			const steamLink = steamdata.steamID;
			if (!steamLink)
				return message.channel.send(`You Haven't Registered Your Steam ID ❌`);
			message.channel.send(`${steamLink}`);
		}
	} else {
		message.channel.send(`Inavlid Command ❌`)
	}
};

module.exports.config = {
	name: "steam",
	aliases: ["steamid"],
	Description: "Command",
};
