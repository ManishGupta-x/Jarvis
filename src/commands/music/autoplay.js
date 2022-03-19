const Discord = require("discord.js");

module.exports.run = async (client, message, args, Discord) => {
	if (!message.member.voice.channel)
		return message.channel.send("You must be in a voice channel to use this command.");
	let mode = client.distube.toggleAutoplay(message);
	const embed = new Discord.MessageEmbed()
		.setColor("20B8FF")
		.setThumbnail("https://i.imgur.com/WaQJNfM.gif")
		.setAuthor(
			"Jarvis",
			"https://cdn.discordapp.com/avatars/778267007439077396/b3f9ab1c6342de220b333fcbdff93ec5.png?size=256"
		)
		.setDescription("Autoplay Mode : `" + (mode ? "On" : "Off") + "`")

		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp();
	message.channel.send({ embeds: [embed] });
};

module.exports.config = {
	name: "autoplay",
	aliases: ["ap"],
	Description: "Command",
};
