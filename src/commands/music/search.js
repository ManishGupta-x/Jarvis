const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });

    var wallpapers = ["https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png"
        , "https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
        "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png", "https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png"]
    var mu = wallpapers[Math.floor(Math.random() * wallpapers.length)];


    const searchsong = args.join(" ");
    if (!searchsong) {
        message.reply('Pls mention song to search')
    } if (searchsong) {

        const result = await client.distube.search(searchsong, { limit: 15 });

        const embed9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail(`${mu}`)
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`**Choose an Option from Below : **\n\n${result.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`)


            .setFooter(`Enter anything else or wait 60 seconds to cancel`)
            .setTimestamp();

        message.channel.send({ embeds: [embed9] });




        const filter = m => m.author.id == message.author.id;
        const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
        const numSong = collected.first().content - 1;
        if (numSong > 15 || numSong == NaN) {
            message.reply(`Invalid Song id`)
            return;
        } else {
            await client.distube.play(message, result[numSong]);
        }
    }
}

module.exports.config = {
    name: "search",
    aliases: ['s'],
    Description: 'Command',
}