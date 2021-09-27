const disTube = require('distube');
const { MessageEmbed, Util } = require("discord.js")
module.exports = {
    name: 'queue',
    Description: 'this is a music command!',
    async execute(client, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        var wallpapers = ["https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png"
            , "https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
            "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png", "https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png"]
        var mu = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        let queue = await client.distube.getQueue(message);
        if (!queue) {
            message.reply('No queue Available');
        } else if (queue) {

            const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Repeat queue" : "Repeat song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;


            let y = Util.splitMessage(`**Current Queue**\n\n${queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`, { maxLength: 3500 })

            if (!y[1]) {
                const embed9 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${mu}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`${y[0]}\n\n${status(queue)}`)
                    .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                    .setTimestamp();
                await message.channel.send({ embeds: [embed9] })
            }

            if (y[1] && !y[2]) {

                const embed9 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${mu}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`${y[0]}`)
                    .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                    .setTimestamp();

                const embed10 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${mu}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`${y[1]}\n\n${status(queue)}`)
                    .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                    .setTimestamp();
               message.channel.send({ embeds: [embed9] })
               await message.channel.send({embeds : [embed10]})
                if (y[2] && !y[3]) {

                    const embed9 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail(`${mu}`)
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`${y[0]}`)
                        .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                        .setTimestamp();

                    const embed10 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail(`${mu}`)
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`${y[1]}`)
                        .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                        .setTimestamp();


                    const embed12 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail(`${mu}`)
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`${y[2]}\n\n${status(queue)}`)
                        .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                        .setTimestamp();
                     message.channel.send({ embeds: [embed9] });
                    await message.channel.send({embeds : [embed10]})
                    await message.channel.send({embeds : [embed12]})
                }
                if (y[3]) {

                    const embed9 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail(`${mu}`)
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`${y[0]}`)
                        .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                        .setTimestamp();

                    const embed10 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail(`${mu}`)
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`${y[1]}`)
                        .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                        .setTimestamp();


                    const embed12 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail(`${mu}`)
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`${y[2]}`)
                        .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                        .setTimestamp();


                    const embed14 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail(`${mu}`)
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`${y[3]}\n\n${status(queue)}`)
                        .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                        .setTimestamp();
                   
                    message.channel.send({ embeds: [embed9] });
                    await message.channel.send({embeds : [embed10]})
                    await message.channel.send({embeds : [embed12]})
                    await message.channel.send({embeds : [embed14]})

                }








            }




        }

    }


}