/*╠══════════════════════════════════════════ 𝕸𝖊𝖘𝖘𝖆𝖌𝖊 𝖈𝖗𝖊𝖆𝖙𝖊 𝖊𝖛𝖊𝖓𝖙 ═════════════════════════════════════════════════════════════════╣*/
const errChannel = "918106499203616788";
const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const mongoose = require("mongoose");
const prefix = require("../models/prefix");
const prefixModel = require("../models/prefix");
const playMusic = require("../utils/playMusic");
const config = require("../../config");

mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
var d;
var g;

var gptuser;

/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
//gettingprefix

module.exports = async (client, message) => {
	const data = await prefixModel.findOne({
		GuildID: message.guild.id,
	});

	// /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

	//commandfile declaration

	const file = client.commands.get(`snipe`);
	const searchfile = client.commands.get(`gsearch`);
	const ipfile = client.commands.get(`ip`);
	const gpt = client.commands.get(`gpt`);

	/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

	//args system

	const messageArray = message.content.split(" ");
	const cmd = messageArray[0];
	const args = messageArray.slice(1); 

	if (message.author.bot || message.channel.type === "dm") return;
	if (message.author.bot) return;
	/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
	//gpt system

	if (g == 1 && message.author.id == gptuser) {

		gpt.run(client, message, args, Discord);

	}


	/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
	if (message.mentions.members.first()) {
		if (
			message.mentions.members.first().id == "550267183503114250" ||
			message.mentions.members.first().id == "852779571816562729"
		) {
			if (
				d == 1 &&
				message.author.id == "761159077639356446" &&
				message.guild.id == "730714810064306188"
			) {
				message.reply("Tumahra Darloo so rha h abhi 🥱, thodi der me ana 😴");
			} else if (d == 1) {
				message.reply("Boss sleeping rn 😴 , Ping him after a while 🥱");
			}
		}
	}

	/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
	//maincode

	if (data) {
		const prefix1 = data.Prefix;

		/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

		if (!message.content.startsWith(prefix1)) {
			switch (message.content.toLowerCase()) {
				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "jarvis":
					if (
						message.author.id == "550267183503114250" ||
						(message.author.id == "761159077639356446" && message.guild.id == "730714810064306188")
					) {
						message.reply("Yes Boss 🙃");
					} else if (message.author.id == "761159077639356446") {
						message.channel.send({ content: "Hn bolo Janeman 🙃" });
					} else if (message.author.id == "725997903629385789") {
						message.channel.send({ content: "ji aseem ji kaise ho🙃" });
					} else message.channel.send({ content: "Hn bol bsdk 😒" });

					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "activate chat mode":
					
					g = 1;
					message.channel.send("Alright!");
					gptuser = message.author.id;

					break;
				
				case "deactivate chat mode":

					g = 0;
					message.channel.send("Nice talk!");
					gptuser = null;

					break;
				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "jarvis google kr":
					searchfile.run(client, message, args, Discord);

					break;
				
				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "jarvis ip dena":
					ipfile.run(client, message, args, Discord);

					break;
				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "jarvis playlist lgade":
					playMusic(
						client,
						message,
						`https://open.spotify.com/playlist/0WJNp4U7stGpoAOlIZo29r?si=85bff0487fc74d6a`
					)
						.catch((error) => {
							const embed = new Discord.MessageEmbed()
								.setColor("RANDOM")
								.setTitle("Error Boss")

								.setAuthor(
									"Jarvis",
									"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
								)
								.setDescription("\n\n**ERROR**\n\n ```" + error + "```")

								.setFooter(`Anti Crash System`)
								.setTimestamp();
							client.channels.cache.get(errChannel).send({ embeds: [embed] });
							message.channel.send(
								" Bot Is Down Currently, the problem has been reported ! \n Service will be back soon kindly Disconnect the bot ! "
							);
						});

					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "-friendly":
					await message.channel.send({ content: `<@&885896296739790919>` });

					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "sleep mode on":
					if (
						message.author.id == "550267183503114250" ||
						message.author.id == "852779571816562729"
					) {
						message.reply("Sweet dreams boss 🥱 ");
						d = 1;
					}
					break;

				case "sleep mode off":
					if (
						message.author.id == "550267183503114250" ||
						message.author.id == "852779571816562729"
					) {
						if (d == 1) {
							message.reply("Deactivated Boss!!");
						}

						d = 0;
					}
					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
				case "jarvis snipe":
					file.run(client, message, args, Discord);

					break;

				case "snipe":
					file.run(client, message, args, Discord);

					break;
			}
		} else if (message.content.startsWith(prefix1)) {

			
			// if (message.author.id == "550267183503114250") {
				const commandfile =
					client.commands.get(cmd.slice(prefix1.length).toString().toLowerCase()) ||
					client.commands.get(client.aliases.get(cmd.slice(prefix1.length).toString().toLowerCase())); //-play

				if (commandfile) {
					commandfile.run(client, message, args, Discord);
				}
			// } else {
			// 	message.channel.send("Boss is sprucing me up for peak performance—stay tuned for the upgraded version!")

			// }
		}
	} else if (!data) {
		const prefix2 = "o!";

		if (!message.content.startsWith(prefix2)) {
			switch (message.content.toLowerCase()) {
				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "jarvis":
					if (
						message.author.id == "550267183503114250" ||
						(message.author.id == "761159077639356446" && message.guild.id == "730714810064306188")
					) {
						message.reply("Yes Boss 🙃");
					} else if (message.author.id == "761159077639356446") {
						message.channel.send({ content: "Hn bolo Janeman 🙃" });
					} else if (message.author.id == "725997903629385789") {
						message.channel.send({ content: "ji aseem ji kaise ho🙃" });
					}else if(message.author.id == "1106366063542796359"){
						message.channel.send({content : "Hn Bol meri jaan 🥰"});   
				   } else message.channel.send({ content: "Hn bol bsdk 😒" });

					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "jarvis google kr":
					searchfile.run(client, message, args, Discord);

					break;
				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
				case "jarvis ip dena":
					ipfile.run(client, message, args, Discord);
					break;
				
				case "jarvis playlist lgade":
					playMusic(
						client,
						message,
						`https://open.spotify.com/playlist/0WJNp4U7stGpoAOlIZo29r?si=85bff0487fc74d6a`
					)
					.catch((error) => {
						const embed = new Discord.EmbedBuilder()
							.setColor("RANDOM")
							.setTitle("Error Boss")

							.setAuthor(
								"Jarvis",
								"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
							)
							.setDescription("\n\n**ERROR**\n\n ```" + error + "```")

							.setFooter(`Anti Crash System`)
							.setTimestamp();
						client.channels.cache.get(errChannel).send({ embeds: [embed] });
						message.channel.send(
							" Bot Is Down Currently, the problem has been reported ! \n Service will be back soon kindly Disconnect the bot ! "
						);
					});
				   	
					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "-friendly":
					await message.channel.send({ content: `<@&885896296739790919>` });

					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

				case "sleep mode on":
					if (
						message.author.id == "550267183503114250" ||
						message.author.id == "852779571816562729"
					) {
						message.reply("Sweet dreams boss 🥱 ");
						d = 1;
					}
					break;

				case "sleep mode off":
					if (
						message.author.id == "550267183503114250" ||
						message.author.id == "852779571816562729"
					) {
						if (d == 1) {
							message.reply("Deactivated Boss!!");
						}

						d = 0;
					}
					break;

				/*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
				case "jarvis snipe":
					file.run(client, message, args, Discord);

					break;

				case "snipe":
					file.run(client, message, args, Discord);

					break;
			}
		} else if (message.content.startsWith(prefix2)) {

			
			// if (message.author.id == "550267183503114250") {
				const commandfile =
					client.commands.get(cmd.slice(prefix2.length).toString().toLowerCase()) ||
					client.commands.get(client.aliases.get(cmd.slice(prefix2.length).toString().toLowerCase()));

				if (commandfile) {
					commandfile.run(client, message, args, Discord);
				}
			// } else {
			// 	message.channel.send("Boss is sprucing me up for peak performance—stay tuned for the upgraded version!")

			// }
		}
	}
};
