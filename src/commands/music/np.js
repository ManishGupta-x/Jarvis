const disTube = require('distube');
const { MessageActionRow, MessageButton } = require('discord.js');

const Discord = require("discord.js")

module.exports.run = async (client, message, args, Discord) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    var wallpapers = ["https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png"
        , "https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
        "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png", "https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png"]
    var mu = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    let queue = await client.distube.getQueue(message);
    if (!queue) {
        message.reply('No Song in Queue !')
    } else {
        const song = queue.songs[0];
        const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Repeat queue" : "Repeat song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('skip')
                    .setLabel('🏃‍♂️ Skip')
                    .setStyle('DANGER'),

                new MessageButton()
                    .setCustomId('bassboost')
                    .setLabel('🎶 Bassboost')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('nightcore')
                    .setLabel('🎧 Nightcore')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('8d')
                    .setLabel('🎼 8D')
                    .setStyle('SUCCESS'),
            );
        if (queue.songs.length <= 1) {
            const embed1 = new Discord.MessageEmbed()
                .setColor('#F0074F')
                .setThumbnail(`${mu}`)
                .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                .setTitle(`Now Playing`)
                .setDescription(`${song.name} | Requested by: ${song.user} || at \`${queue.formattedCurrentTime}\`/ \`${song.formattedDuration}\` \n\n${status(queue)}`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp();
            message.channel.send({ embeds: [embed1], components: [row] });
        } else {
            const upcomingsong = queue.songs[1];
            const embed2 = new Discord.MessageEmbed()
                .setColor('#F0074F')
                .setThumbnail(`${mu}`)
                .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                .setTitle(`Now Playing`)
                .setDescription(`${song.name} | Requested by: ${song.user} || at \` ${queue.formattedCurrentTime}\`/ \`${song.formattedDuration}\` \n ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ `)
                .addField("Upcoming Song :", `${upcomingsong.name} | Requested by: ${upcomingsong.user}\` | ${upcomingsong.formattedDuration}\`\n\n${status(queue)}`)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp();
            message.channel.send({ embeds: [embed2], components: [row] });
        }





        const filter = (interaction) => interaction.isButton() && interaction.customId === 'skip' || interaction.customId === '8d' || interaction.customId === 'bassboost' || interaction.customId === 'nightcore';

        const collector = message.channel.createMessageComponentCollector({ filter, time: 180000 });
        collector.on('collect', async collected => {

            const commandfile = client.commands.get(collected.customId)



            if (collected.customId === 'skip') {
                await collected.channel.send({ content: "Skipping" })
                
                await commandfile.run(client, message, args, Discord)
            } else if (collected.customId === 'bassboost') {


                
                await commandfile.run(client, message, args, Discord)


            } else if (collected.customId === 'nightcore') {

               
                await commandfile.run(client, message, args, Discord)


            } else if (collected.customId === '8d') {

               
                await commandfile.run(client, message, args, Discord)


            }
            collected.deferUpdate()

        })

    }

}

module.exports.config = {
    name: "np",
    aliases: [],
    Description: 'Command',
}