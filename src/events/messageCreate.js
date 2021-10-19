const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const mongoose = require("mongoose");
const prefix = require('../models/prefix');
const prefixModel = require("../models/prefix")
const config = require('../../settings.json')
const superagent = require('superagent')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
var d;
module.exports = async (client, message) => {
	const data = await prefixModel.findOne({
		GuildID: message.guild.id
	});

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

	if (message.author.bot || message.channel.type === 'dm') return;



	if (message.author.bot) return;
	if (message.mentions.members.first()) {
		if (message.mentions.members.first().id == '550267183503114250' || message.mentions.members.first().id == '852779571816562729') {
			if (d == 1 && message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') {
				message.reply("Tumahra Darloo so rha h abhi 🥱, thodi der me ana 😴")
			}
			else if (d == 1) {
				message.reply("Boss sleeping rn 😴 , Ping him after a while 🥱")
			}
		}
	}
	if (data) {


		const prefix1 = data.Prefix;
		if (!message.content.startsWith(prefix1)) {

			switch (message.content) {
				case 'hey jarvis': if (message.author.id == '550267183503114250' || message.guild.id == '730714810064306188') { message.reply("Yes Boss 🙃") }
				else message.channel.send({ content: 'Hn bol bsdk 😒' })
					break;
				case 'jarvis': if (message.author.id == '550267183503114250' || message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') { message.reply("Yes Boss 🙃") }
				else if (message.author.id == '761159077639356446') {
					message.channel.send({ content: 'Hn bolo Janeman 🙃' })
				}
				else message.channel.send({ content: 'Hn bol bsdk 😒' })

					break;
				case "adnan short story": message.channel.send("https://cdn.discordapp.com/attachments/794240262972243979/860556430490468362/VID_20210701_195116_318.mp4")
					break;

				case "jarvis google kr":
					message.channel.send('Kya search krna h?')
					const filter = m => m.author.id == message.author.id;
					const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
					const query = collected.first().content;
					let result = await superagent.get("https://customsearch.googleapis.com/customsearch/v1").query({ q: query, cx: '2a2bde9b24e897647', key: "AIzaSyDAXbVjTS4gOEJdNvXaOtLUnmi0zo0gVUA" })
					if (!result.body.items) return message.channel.send(" Nothing Found! ")
					if (result.status >= 400)
						return message.channel.send("error");

					let res = result.body.items[0];
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
					message.channel.send({ embeds: [embedd] });
					break;




				case "jarvis expose cvm": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
					break;
				case "jarvis expose shivam": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
					break;
				case "-friendly": await message.channel.send({ content: `<@&885896296739790919>` })
					break;
				case "togglefriendly": let member = message.member;
					let memberTarget = message.guild.members.cache.get(member.id);
					let Role = message.guild.roles.cache.find(role => role.name === 'friendly');
					if (message.member.roles.cache.has('885896296739790919')) {
						memberTarget.roles.remove(Role.id);
						message.reply('You will not get pinged for friendlies now  :)!')
					}
					else {

						memberTarget.roles.add(Role.id);
						message.reply('You Joined Friendlies Channel  :)!')
					}
					break;
				case "sleep mode on": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {
					message.reply("Sweet dreams boss 🥱 ")
					d = 1;
				}
					break;
				case "sleep mode off": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {
					if (d == 1) {
						message.reply("Deactivated Boss!!")
					}
					d = 0;
				} break;
				case "jarvis snipe": const msg = client.snipes.get(message.channel.id)
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
					break;
				case "snipe": const msg1 = client.snipes.get(message.channel.id)
					if (!msg1) {
						message.reply(`Nothing to snipe!`);
						return;
					}

					;
					const embed17 = new Discord.MessageEmbed()
						.setColor('RANDOM')
						.setAuthor(msg1.author, client.user.displayAvatarURL())
						.setDescription(msg1.content)
						.setFooter('Caught :)')
						.setTimestamp();
					message.channel.send({ embeds: [embed17] }).catch(error => {

						const embed8 = new Discord.MessageEmbed()
							.setColor('RANDOM')
							.setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
							.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
							.setDescription(`Message could not be loaded !`)


							.setFooter(client.user.username, client.user.displayAvatarURL())
							.setTimestamp();
						message.channel.send({ embeds: [embed8] });
					});;
					break;

			}

		} else if (message.content.startsWith(prefix1)) {
			const commandfile = client.commands.get(cmd.slice(prefix1.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix1.length).toString().toLowerCase()));
			if (commandfile) {
				commandfile.run(client, message, args, Discord);
			}

		}
	} else if (!data) {

		const prefix2 = 'p!';
		if (!message.content.startsWith(prefix2)) {

			switch (message.content) {
				case 'hey jarvis': if (message.author.id == '550267183503114250' || message.guild.id == '730714810064306188') { message.reply("Yes Boss 🙃") }
				else message.channel.send({ content: 'Hn bol bsdk 😒' })
					break;
				case 'jarvis': if (message.author.id == '550267183503114250' || message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') { message.reply("Yes Boss 🙃") }
				else if (message.author.id == '761159077639356446') {
					message.channel.send({ content: 'Hn bolo Janeman 🙃' })
				}
				else message.channel.send({ content: 'Hn bol bsdk 😒' })

					break;
				case "adnan short story": message.channel.send("https://cdn.discordapp.com/attachments/794240262972243979/860556430490468362/VID_20210701_195116_318.mp4")
					break;
				case "jarvis google kr":
					message.channel.send('Kya search krna h?')
					const filter = m => m.author.id == message.author.id;
					const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
					const query = collected.first().content;
					let result = await superagent.get("https://customsearch.googleapis.com/customsearch/v1").query({ q: query, cx: '2a2bde9b24e897647', key: "AIzaSyDAXbVjTS4gOEJdNvXaOtLUnmi0zo0gVUA" })
					if (!result.body.items) return message.channel.send(" Nothing Found! ")
					if (result.status >= 400)
						return message.channel.send("error").then(console.log(result.message));

					let res = result.body.items[0];
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
					message.channel.send({ embeds: [embedd] });
					break;
				case "jarvis expose cvm": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
					break;
				case "jarvis expose shivam": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
					break;
				case "-friendly": await message.channel.send({ content: `<@&885896296739790919>` })
					break;
				case "togglefriendly": let member = message.member;
					let memberTarget = message.guild.members.cache.get(member.id);
					let Role = message.guild.roles.cache.find(role => role.name === 'friendly');
					if (message.member.roles.cache.has('885896296739790919')) {
						memberTarget.roles.remove(Role.id);
						message.reply('You will not get pinged for friendlies now  :)!')
					}
					else {

						memberTarget.roles.add(Role.id);
						message.reply('You Joined Friendlies Channel  :)!')
					}
					break;
				case "sleep mode on": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {
					message.reply("Sweet dreams boss 🥱 ")
					d = 1;
				}
					break;
				case "sleep mode off": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {
					if (d == 1) {
						message.reply("Deactivated Boss!!")
					}
					d = 0;
				} break;
				case "jarvis snipe": const msg = client.snipes.get(message.channel.id)
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
					break;
				case "snipe": const msg1 = client.snipes.get(message.channel.id)
					if (!msg1) {
						message.reply(`Nothing to snipe!`);
						return;
					}

					;
					const embed17 = new Discord.MessageEmbed()
						.setColor('RANDOM')
						.setAuthor(`${msg1.author}`, client.user.displayAvatarURL())
						.setDescription(msg1.content)
						.setFooter('Caught :)')
						.setTimestamp();
					message.channel.send({ embeds: [embed17] }).catch(error => {

						const embed8 = new Discord.MessageEmbed()
							.setColor('RANDOM')
							.setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
							.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
							.setDescription(`Message could not be loaded !`)


							.setFooter(client.user.username, client.user.displayAvatarURL())
							.setTimestamp();
						message.channel.send({ embeds: [embed8] });
					});;
					break;

			}

		} else if (message.content.startsWith(prefix2)) {
			const commandfile = client.commands.get(cmd.slice(prefix2.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix2.length).toString().toLowerCase()));
			if (commandfile) {
				commandfile.run(client, message, args, Discord);
			}

		}


	}


}