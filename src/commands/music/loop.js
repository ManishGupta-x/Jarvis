const disTube = require("distube");
var loop;

const Discord = require("discord.js");

module.exports.run = async (client, message, args, Discord) => {
	let queue = client.distube.getQueue(message);
	if (!queue) {
		message.reply("No song playing");
	}
	if (!args[0]) {
		message.reply(
			"What kind of loop U want type `p!loop song` to loop song or `p!loop queue ` to Loop Queue . To turn it off further type p!loop off "
		);
		return;
	} else if (args[0] == "song" || args[0] == "Song") {
		loop = 1;
	} else if (args[0] == "queue" || args[0] == "Queue") {
		loop = 2;
	} else if (args[0] == "off" || args[0] == "Off" || args[0] == "OFF") {
		loop = 0;
	} else {
		message.reply("Invalid loop type");
	}
	if (!message.member.voice.channel)
		return message.channel.send("You must be in a voice channel to use this command.");

	let mode = client.distube.setRepeatMode(message, loop);

	mode = mode ? (mode == 2 ? "Repeat queue" : "Repeat song") : "Off";
	const embed = new Discord.MessageEmbed()
		.setColor("#F0074F")
		.setThumbnail(
			"https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png"
		)
		.setAuthor(
			"Jarvis",
			"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
		)
		.setDescription("Set repeat mode to : `" + mode + "`")

		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp();
	message.channel.send({ embeds: [embed] });
};

module.exports.config = {
	name: "loop",
	aliases: [],
	Description: "Command",
};
