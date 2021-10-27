const Discord = require("discord.js")

module.exports.run = async (client, message, args, Discord) => {

	const msg = client.snipes.get(message.channel.id)
	if (!msg) {
		message.reply(`Nothing to snipe!`);
		return;
	}
	const embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setAuthor(msg.author, client.user.displayAvatarURL())
		.setDescription(msg.content)
		.setFooter('Caught :)')
		.setTimestamp();
	message.channel.send({ embeds: [embed] }).catch(error => {

		const embed5 = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
			.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
			.setDescription(`Message could not be loaded !`)


			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp();
		message.channel.send({ embeds: [embed5] });
	});;


}

module.exports.config = {
	name: "snipe",
	aliases: [],
	Description: 'Command',
}