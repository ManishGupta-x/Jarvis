const Discord = require("discord.js");
const disTube = require("distube");
const playMusic = require("../../utils/playMusic");
const errChannel = "918106499203616788";

module.exports.run = async (client, message, args, Discord) => {
	if (!message.member.voice.channel)
		return message.channel.send({
			content: "You must be in a voice channel to use this command.",
		});
	const Hindiplaylists = {
		RomanticHindi:
			"https://open.spotify.com/playlist/0zc6Hq9OIAengtGG6a3lfs?si=d86e1530519447e8",
		SadHindi:
			"https://open.spotify.com/playlist/1KUTJPKwafNFQOG8wRoL1e?si=526c36ff80304817",
		LofiHindi:
			"https://open.spotify.com/playlist/0Gug5ATgJnrG0C5q4Dh3Iq?si=d6338cc9a5af4979",
		RetroHindi:
			"https://open.spotify.com/playlist/0q55nsUOxBTEH4kEoDJlYi?si=f2774b1231a145c2",
		JoyHindi:
			"https://open.spotify.com/playlist/6mMJ2cs48LRYOhvlLabNeB?si=f9a3d350fde54fad",
		PartyHindi:
			"https://open.spotify.com/playlist/4udNXOu0kdCx6NFfgCnOAr?si=a8bbf20efcb14e3a",
		SoothingHindi:
			"https://open.spotify.com/playlist/28NyTCpPmAair9waKZqCwo?si=d9b5091f65334a17",
		GetOutOfDepression:
			"https://open.spotify.com/playlist/6AZ5xv3NfssZzoDo1OMFUj?si=aa328e7bcf0f4db4",
		MotivationHindi:
			"https://open.spotify.com/playlist/5VYMXArk2XJB7ZOIPAZGWm?si=3c95b12f75ed480c",
	};

	const Englishplaylists = {
		RomanticEng:
			"https://open.spotify.com/playlist/45pQ7PTHp84S0jVScurkLw?si=4896a28fc8d8427a",
		SadEng:
			"https://open.spotify.com/playlist/17JKuYHk942oNIvlVacKkR?si=64fe479f75c04115",
		PartyEng:
			"https://open.spotify.com/playlist/7lJWhVTtuRkisRchiEdYXr?si=ba20d34059be4426",
		GymEng:
			"https://open.spotify.com/playlist/2emOxunHtFSsfcPLjGCK0c?si=af98cd415740433b",
		MotivationalEng:
			"https://open.spotify.com/playlist/2emOxunHtFSsfcPLjGCK0c?si=af98cd415740433b",
	};

	const PunjabiPlaylists =
		"https://open.spotify.com/playlist/3lot3HM1GHmXDzJFt1cjTb?si=09d71619e99f4391";
	const MeditationPlaylists = "https://www.youtube.com/watch?v=PszSx4HvKAA";
	

	 const playPlaylist = (message,playlist) => {
		
		 playMusic(client, message, playlist).catch((error) => {
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
		
	}

	const Menuembed = new Discord.MessageEmbed()
		.setTitle("Menu For Languages")
		.setThumbnail("https://cdn.discordapp.com/attachments/1172582591187144766/1172583531562668123/150-1509345_dj-electronic-music-music-wallpaper-for-macbook-pro.png?ex=6560d883&is=654e6383&hm=cfb4ff1883d4b405cf3350acf464964c5ca168959d18bd11e00d9c33e390fbf1&")
		.setAuthor("Jarvis", client.user.displayAvatarURL())
		.setColor("#F0074F")
		.setDescription(
		`Select Your Language For Songs\n‎`
	)
		.addFields(
			{ name: "Hindi 🎼", value: "Hindi Songs", inline: true },
			{ name: "English 🎧", value: "English Songs", inline: true },
			{ name: "Other Options 🎵", value: "Meditation and Punjabi", inline: true }
	)
		.setImage("https://cdn.discordapp.com/attachments/1172582591187144766/1172583435441807400/554935.png?ex=6560d86c&is=654e636c&hm=60ad584c1f41a37a64585b94b96773df2bfab7c3d6cc1a87cf9cd8f3ccf71cdc&")
		.setFooter("Select a language for songs or type cancel ")
		.setTimestamp();

	const row = new Discord.MessageActionRow()
		.addComponents(
		new Discord.MessageButton()
			.setCustomId("hindi")
			.setLabel("Hindi 🎼")
			.setStyle("DANGER"),
		new Discord.MessageButton()
			.setCustomId("english")
			.setLabel("English 🎧")
			.setStyle("SUCCESS"),
		new Discord.MessageButton()
			.setCustomId("other")
			.setLabel("Other Options 🎵")
			.setStyle("PRIMARY")
	);
	const menu = message.channel.send({ embeds: [Menuembed] , components: [row]});
	const filter = (interaction) =>
		(interaction.isButton() &&
			interaction.user.id === message.author.id &&
			interaction.customId === "hindi") ||
		interaction.customId === "english" ||
		interaction.customId === "other";
	const collector = message.channel.createMessageComponentCollector({
		filter,
		max : 1,
		time: 180000,
	});
	collector.on("collect", async (collected) => {
		if (collected.customId === "hindi") {
			
			const HindiEmbed = new Discord.MessageEmbed()
				.setColor("#B233FF")
				.setTitle("Menu For Hindi Moods")
				.setAuthor("Jarvis", client.user.displayAvatarURL())
				.setDescription("Select your Mood for Hindi Songs\n‎")
				.setThumbnail(
					"https://imgur.com/7XhELQ3.gif"
					
				)
				.addFields(
					{ name: "Romantic 💖", value: "Romantic Rhythms" , inline : true },
					{ name: "Sad 😢", value: "Melancholic Melodies" , inline : true},
					{ name: "Lofi 🎧", value: "Lofi Bliss",inline : true },
					{ name: "Retro Songs 🎼", value: "Timeless Retro Tunes",inline : true },
					{ name: "Joyful 🎶", value: "Joyful Beats",inline : true },
					{ name: "Party 🎉", value: "Celebration Grooves",inline : true },
					{ name: "Soothing 🎵", value: "Serenading Sounds",inline : true },
					{
						name: "Get Out Of Depression 🎵",
						value: "Uplifting from the Blues",
						inline : true,
					},
					{ name: "Motivational 🎵", value: "Motivational Powerhouse" ,inline : true}
				)
				.setFooter("Select a mood for Hindi songs or type cancel ")
				.setImage("https://imgur.com/GVqW9cw.gif")
				.setTimestamp();
				
			const HindiRowone = new Discord.MessageActionRow().addComponents(
				new Discord.MessageButton()
					.setCustomId("Romantic")
					.setLabel("Romantic 💖")
					.setStyle("PRIMARY"),
				new Discord.MessageButton()
					.setCustomId("Sad")
					.setLabel("Sad 😢")
					.setStyle("DANGER"),
				new Discord.MessageButton()
					.setCustomId("Lofi")
					.setLabel("Lofi 🎧")
					.setStyle("SUCCESS"),
				new Discord.MessageButton()
					.setCustomId("Retro Songs")
					.setLabel("Retro Songs 🎼")
					.setStyle("PRIMARY"),
				new Discord.MessageButton()
					.setCustomId("Joyful")
					.setLabel("Joyful 🎶")
					.setStyle("DANGER"),
				
			);
			const HindiRowtwo = new Discord.MessageActionRow().addComponents(
				new Discord.MessageButton()
					.setCustomId("Party")
					.setLabel("Party 🎉")
					.setStyle("SUCCESS"),
				new Discord.MessageButton()
					.setCustomId("Soothing")
					.setLabel("Soothing 🎵")
					.setStyle("PRIMARY"),
				new Discord.MessageButton()
					.setCustomId("Get Out Of Depression")
					.setLabel("Get Out Of Depression 🎵")
					.setStyle("DANGER"),
				new Discord.MessageButton()
					.setCustomId("Motivational")
					.setLabel("Motivational 🎵")
					.setStyle("SUCCESS")
			);
			const HindiMsg = await message.channel.send({embeds: [HindiEmbed], components: [HindiRowone, HindiRowtwo]});
			const HindiFilter = (interaction) =>
				(interaction.isButton() &&
					interaction.user.id === message.author.id &&
					interaction.customId === "Romantic") ||
				interaction.customId === "Sad" ||
				interaction.customId === "Lofi" ||
				interaction.customId === "Retro Songs" ||
				interaction.customId === "Joyful" ||
				interaction.customId === "Party" ||
				interaction.customId === "Soothing" ||
				interaction.customId === "Get Out Of Depression" ||
				interaction.customId === "Motivational";
			const HindiCollector = message.channel.createMessageComponentCollector({
				HindiFilter,
				max : 1,
				time: 180000,
			});
			HindiCollector.on("collect", async (collected) => {
				if (collected.customId === "Romantic") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.RomanticHindi);
				} else if (collected.customId === "Sad") {
					await HindiMsg.delete();
				   playPlaylist(message,Hindiplaylists.SadHindi);
				} else if (collected.customId === "Lofi") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.LofiHindi);
				} else if (collected.customId === "Retro Songs") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.RetroHindi);
				} else if (collected.customId === "Joyful") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.JoyHindi);
				} else if (collected.customId === "Party") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.PartyHindi);
				} else if (collected.customId === "Soothing") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.SoothingHindi);
				} else if (collected.customId === "Get Out Of Depression") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.GetOutOfDepression);
				} else if (collected.customId === "Motivational") {
					await HindiMsg.delete();
					playPlaylist(message,Hindiplaylists.MotivationHindi);
				}
			});
			
		} else if (collected.customId === "english") {

			const EnglishEmbed = new Discord.MessageEmbed()
				.setColor("#B233FF")
				.setTitle("Menu For English Moods")
				.setThumbnail("https://imgur.com/aXaS7N7.gif")
				.setImage("https://imgur.com/PTV0xKY.gif")
				.setAuthor("Jarvis", client.user.displayAvatarURL())
				.setDescription("Select your Mood for English Songs\n‎")
				.addFields(
					{ name: "Romantic 💖", value: "Romantic Rhythms", inline: true },
					{ name: "Sad 😢", value: "Melancholic Melodies", inline: true },
					{ name: "Party 🎉", value: "Celebration Grooves", inline: true },
					{ name: "Gym 🏋️‍♂️", value: "Gym Workout", inline: true },
					{ name: "Motivational 🎵", value: "Motivational Powerhouse", inline: true }
			)
				.setFooter("Select a mood for English songs or type cancel ")
				.setTimestamp();
			
			const EnglishRowone = new Discord.MessageActionRow().addComponents(
				new Discord.MessageButton()
					.setCustomId("Romantic")
					.setLabel("Romantic 💖")
					.setStyle("PRIMARY"),
				new Discord.MessageButton()
					.setCustomId("Sad")
					.setLabel("Sad 😢")
					.setStyle("DANGER"),
				new Discord.MessageButton()
					.setCustomId("Party")
					.setLabel("Party 🎉")
					.setStyle("SUCCESS"),
				new Discord.MessageButton()
					.setCustomId("Gym")
					.setLabel("Gym 🏋️‍♂️")
					.setStyle("PRIMARY"),
				new Discord.MessageButton()
					.setCustomId("Motivational")
					.setLabel("Motivational 🎵")
					.setStyle("DANGER")
			);
			const EnglishMsg = await message.channel.send({ embeds: [EnglishEmbed], components: [EnglishRowone] });
			const EnglishFilter = (interaction) =>
				(interaction.isButton() &&
					interaction.user.id === message.author.id &&
					interaction.customId === "Romantic") ||
				interaction.customId === "Sad" ||
				interaction.customId === "Party" ||
				interaction.customId === "Gym" ||
				interaction.customId === "Motivational";
			const EnglishCollector = message.channel.createMessageComponentCollector({
				EnglishFilter,
				max : 1,
				time: 180000,
			});
			EnglishCollector.on("collect", async (collected) => {
				if (collected.customId === "Romantic") {
					await EnglishMsg.delete();
					playPlaylist(message,Englishplaylists.RomanticEng);
				} else if (collected.customId === "Sad") {
					await EnglishMsg.delete();
					playPlaylist(message,Englishplaylists.SadEng);
				} else if (collected.customId === "Party") {
					await EnglishMsg.delete();
					playPlaylist(message,Englishplaylists.PartyEng);
				} else if (collected.customId === "Gym") {
					await EnglishMsg.delete();
					playPlaylist(message,Englishplaylists.GymEng);
				} else if (collected.customId === "Motivational") {
					await EnglishMsg.delete();
					playPlaylist(message,Englishplaylists.MotivationalEng);
				}
			});

		} else if (collected.customId === "other") {
			const OtherEmbed = new Discord.MessageEmbed()
				.setColor("#F0074F")
				.setTitle("Menu For Other Options")
				.setThumbnail("https://imgur.com/f2XuoCJ.gif")
				.setImage("https://imgur.com/CmQUbZe.gif")
				.setAuthor("Jarvis", client.user.displayAvatarURL())
				.setDescription("Select your Mood for Other Options\n‎")
				.addFields(
					{ name: "Punjabi 🎵", value: "Punjabi Songs", inline: true },
					{ name: "Meditation 🧘‍♂️", value: "Meditation", inline: true }
				)
				.setFooter("Select a mood for Other Options or type cancel ")
				.setTimestamp();
			const OtherRowone = new Discord.MessageActionRow().addComponents(
				new Discord.MessageButton()
					.setCustomId("Punjabi")
					.setLabel("Punjabi 🎵")
					.setStyle("DANGER"),
				new Discord.MessageButton()
					.setCustomId("Meditation")
					.setLabel("Meditation 🧘‍♂️")
					.setStyle("SUCCESS")
			);
			const OtherMsg = await message.channel.send({ embeds: [OtherEmbed], components: [OtherRowone] });
			const OtherFilter = (interaction) =>
				(interaction.isButton() &&
					interaction.user.id === message.author.id &&
					interaction.customId === "Punjabi") ||
				interaction.customId === "Meditation";
			const OtherCollector = message.channel.createMessageComponentCollector({
				OtherFilter,
				max : 1,
				time: 180000,
			});
			OtherCollector.on("collect", async (collected) => {
				if (collected.customId === "Punjabi") {
					await OtherMsg.delete();
					playPlaylist(message,PunjabiPlaylists);
				} else if (collected.customId === "Meditation") {
					await OtherMsg.delete();
					playPlaylist(message,MeditationPlaylists);
				}
			});
			
		}
		collected.deferUpdate();
	});
};

module.exports.config = {
	name: "mood",
	aliases: ["moods", "playlists"],
	Description: "Command",
};
