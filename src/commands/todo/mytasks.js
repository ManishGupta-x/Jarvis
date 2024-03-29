const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
const mongoose = require("mongoose");
const config = require("../../../settings.json");
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require("../../models/todolist");
module.exports.run = async (client, message, args, Discord) => {
	let data = await list.findOne({
		UserID: message.author.id,
	});

	if (data) {


		const embed1 = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("__Your Todo List__")
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png"
			)
			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription(
				data.list
					.map(
						(Task, id, list) => ` **${id + 1}**.    \`${list[id].Task}\` \t  \`${list[id].status}\``
					)
					.join("\n")
			)

			.setFooter(`Type p!todo [task] to add task`, client.user.displayAvatarURL())
			.setTimestamp();

		const row = new MessageActionRow().addComponents(
			new MessageButton().setCustomId("Dm").setLabel("Dm").setStyle("SUCCESS"),

			new MessageButton().setCustomId("Channel").setLabel("Channel").setStyle("DANGER")
		);



		const embed6 = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png"
			)
			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription(`Do you want Send your tasks in Dm or in this channel?`)

			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp();

		message.channel.send({ embeds: [embed6], components: [row] });

		const filter1 = (interaction) =>
			(interaction.isButton() &&
				interaction.user.id == message.author.id &&
				interaction.customId === "Dm") ||
			interaction.customId === "Channel";

		const collector = message.channel.createMessageComponentCollector({ filter1, time: 10000 });
		

     collector.on('collect',async collected =>{

          if(collected.customId =='Dm'){

            message.author.send({embeds : [embed1]});

            message.channel.send({content : 'Your Tasks have been uploaded to your dm !'})
          }else if(collected.customId == 'Channel'){

             message.channel.send({embeds : [embed1] });
          }

     })




	} else if (!data) {
		const embed2 = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setThumbnail(
				"https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png"
			)
			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription(`Bruh You dont have a Task to do 😥`)

			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp();
		message.channel.send({ embeds: [embed2], ephemeral: true });
	}
};

module.exports.config = {
	name: "mytasks",
	aliases: [],
	Description: "Command",
};
