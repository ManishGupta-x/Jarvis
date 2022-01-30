/*╠════════════════════════════════════════ 𝓒𝓵𝓲𝓮𝓷𝓽 𝓶𝓪𝓷𝓪𝓰𝓮𝓻 ═════════════════════════════════════════════════╣*/

const { Client, Collection } = require("discord.js");
const client = require('../index');
const EventHandler = require("./utils/loadEvents");
const Discord = require("discord.js");
const cookie = require(`../settings.json`);
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
module.exports = class ClientManager extends Client {
	constructor(options) {
		super(options);
		this.commands = new Collection();
		this.snipes = new Collection();
		this.aliases = new Collection();
	}

	setup() {
		const { DisTube } = require("distube");
		const { SpotifyPlugin } = require("@distube/spotify");
		this.distube = new DisTube(this, {
			emitNewSongOnly: true,
			plugins: [
				new SpotifyPlugin({
					parallel: true,
					emitEventsAfterFetching: false,
				}),
			],
			customFilters: {
				"8d": "apulsator=hz=0.08",
				lightbass: "bass=g=8,dynaudnorm=f=200",
				heavybass: "bass=g=20,dynaudnorm=f=200",
			    slowreverb: "atempo=0.85,aecho=1.0:0.5:10:0.5"
			},
			ytdlOptions : {
				quality : 'highestaudio',
				format : 'audioonly'
                },
			leaveOnFinish: false,
			emptyCooldown: 15,
			leaveOnEmpty: true,
			leaveOnStop: false,
			youtubeCookie: `${cookie}`,
		});
		this.events = new EventHandler(this);
		this.events.init();
		
		this.distube
			.on("playSong", async (queue, song) => {
				var wallpapers = [
					"https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png",
                    "https://cdn.discordapp.com/attachments/730714810614022228/888355852082376724/photo-1513829596324-4bb2800c5efb.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/888355751276449822/photo-1499415479124-43c32433a620.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/888355120411209738/1792303.png",
					"https://cdn.discordapp.com/attachments/730714810614022228/888355457704542278/977273-desktop-background-music-1920x1080-for-samsung.png"


				];
				const likes = numberWithCommas(song.likes);
				const views = numberWithCommas(song.views);
				var mu = Math.floor(Math.random() * wallpapers.length);

				const playsong = new Discord.MessageEmbed()
					.setColor("#F0074F")
					.setThumbnail(`${wallpapers[mu]}`)
					.setAuthor(
						"Jarvis",
						"https://images-ext-1.discordapp.net/external/DkPCBVBHBDJC8xHHCF2G7-rJXnTwj_qs78udThL8Cy0/%3Fv%3D1/https/cdn.discordapp.com/emojis/859459305152708630.gif"
					)
					.setTitle(`Now Playing`)
					.setDescription(
						`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\` `
					)

					.setFooter(`Likes • 💖 ${likes} 〣 Views • 👁️ ${views}`)
					.setTimestamp();

				queue.textChannel.send({ embeds: [playsong] });
			})
			.on("addSong", (queue, song) => {
				const addsong = new Discord.MessageEmbed()
					.setColor("#F0074F")
					.setThumbnail(`${song.thumbnail}`)
					.setTitle(`Added to Queue`)
					.setAuthor(
						"Jarvis",
						"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
					)
					.setDescription(
						`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\``
					)

					.setFooter(`p!music for Command List`)
					.setTimestamp();

				queue.textChannel.send({ embeds: [addsong] });
			})
			.on("searchResult", (message, results) => {
				message.channel.send(
					`**Choose an option from below**\n${results
						.map((song, i) => `**${i + 1}**. ${song.name} - \`${song.formattedDuration}\``)
						.join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`
				);
			})
			.on("searchDone", (message) => message.channel.send(`Search Done!`))
			.on("searchCancel", (message) => message.channel.send(`Searching canceled`))
			.on("searchInvalidAnswer", (message) => message.channel.send(`You answered an invalid `))
			.on("error" , (channel,error) => {
			
				const errChannel = "918106499203616788";
			const embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setTitle("Error Boss")

			.setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
			)
			.setDescription("\n\n**ERROR**\n\n ```" + error  + "```")

			.setFooter(`Anti Crash System`)
			.setTimestamp();
			this.channels.cache.get(errChannel).send({ embeds: [embed] });
			message.channel.send(" Bot Is Down Currently, the problem has been reported ! \n Service will be back soon kindly Disconnect the bot ! ")
			}
			)
			
			.on("searchNoResult", (message, query) =>
				message.channel.send(`No result found for ${query}!`)
			)
			.on("noRelated", (queue) => queue.textChannel.send("Can't find related video to play."));
		require("./utils/loadCommands")(this);
           
		this.login(process.env.token);
	}
};
