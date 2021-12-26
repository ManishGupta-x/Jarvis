const Discord = require("discord.js");
const ClientManager = require(`../ClientManager`);
const client = new ClientManager({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS']
});
module.exports = (error) => {
	const errChannel = "918106499203616788";

	//client.channels.cache.get(errChannel).send({ content: error });

   /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
	process.on("unhandledRejection", (reason, p) => {
		console.log(" [Anti - Crash] :: Unhandled Rejection /crash");
		console.log(reason, p);

		const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("Error Boss")

			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription("\n\n**ERROR**\n\n ```" + reason + "\n\n" + `${p}` + "```")

			.setFooter(`Anti Crash System`, client.user.displayAvatarURL())
			.setTimestamp();
		client.channels.cache.get(errChannel).send({ embeds: [embed] });
	});

      /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
    process.on("uncaughtException", (err, origin) => {
		console.log(" [Anti - Crash] :: Unhandled Rejection /crash");
		console.log(err,origin);

		const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("Error Boss")

			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription("\n\n**ERROR**\n\n ```" + err + "\n\n" + `${origin}` + "```")

			.setFooter(`Anti Crash System`, client.user.displayAvatarURL())
			.setTimestamp();
		client.channels.cache.get(errChannel).send({ embeds: [embed] });
	});


	/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
	process.on("multipleResolves", (type,promise,reason) => {
		console.log(" [Anti - Crash] :: Multiple Resolves /crash");
		console.log(type,promise,reason);

		const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("Error Boss")

			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription("**ERROR**```" + type + "\n\n" + promise +"\n\n" + reason + "```")

			.setFooter(`Anti Crash System`, client.user.displayAvatarURL())
			.setTimestamp();
		client.channels.cache.get(errChannel).send({ embeds: [embed] });
	});

	/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
	process.on("uncaughtExceptionMonitor", (err, origin) => {
		console.log(" [Anti - Crash] :: UnCaught Exception  /crash (Monitor)");
		console.log(err, origin);

		const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("Error Boss")

			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription("\n\n**ERROR**\n\n ```" + err + "\n\n" + `${origin}` + "```")

			.setFooter(`Anti Crash System`, client.user.displayAvatarURL())
			.setTimestamp();
		client.channels.cache.get(errChannel).send({ embeds: [embed] });
	});
    require("./utils/loadCommands")(client);

};
