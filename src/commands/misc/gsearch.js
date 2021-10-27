const Discord = require("discord.js")
const superagent = require('superagent')
module.exports.run = async (client, message, args, Discord) => {

	message.channel.send('Kya search krna h?')
	const filter = m => m.author.id == message.author.id;
	const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
	const query = collected.first().content;
	let result = await superagent.get("https://customsearch.googleapis.com/customsearch/v1").query({ q: query, cx: '2a2bde9b24e897647', key: "AIzaSyDAXbVjTS4gOEJdNvXaOtLUnmi0zo0gVUA" })
	if (!result.body.items) return message.channel.send(" Nothing Found! ")
	if (result.status >= 400)
		return message.channel.send("error");

	let res = result.body.items[0];
	if (res.pagemap.cse_image || res.pagemap.cse_thumbnail) {
		const embedd = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(res.title)
			.setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/899921053877432370/ben-sweet-2LowviVHZ-E-unsplash-1.png ')
			.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
			.setDescription(res.snippet)
			.setURL(res.link)
			.setImage(res.pagemap.cse_image[0].src || res.pagemap.cse_thumbnail[0].src)

			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp();
		message.channel.send({ embeds: [embedd] }).catch(error => {

			message.channel.send('Error ,  try searching something else')
		});
	} else {
		const embedd = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(res.title)
			.setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/899921053877432370/ben-sweet-2LowviVHZ-E-unsplash-1.png ')
			.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
			.setDescription(res.snippet)
			.setURL(res.link)


			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp();
		message.channel.send({ embeds: [embedd] })
	}




}

module.exports.config = {
	name: "'gsearch",
	aliases: ['gs'],
	Description: 'Command',
}