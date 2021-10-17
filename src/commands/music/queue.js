const disTube = require('distube');
const { MessageEmbed, Util } = require("discord.js")
const { MessageActionRow, MessageSelectMenu } = require('discord.js')
const Discord = require("discord.js")



module.exports.run = async (client, message, args, Discord) => {


     if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

     var wallpapers = ["https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png"
          , "https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
          "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png", "https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png"]

     var mu = wallpapers[Math.floor(Math.random() * wallpapers.length)];

     let queue = await client.distube.getQueue(message);

     /*-----------------------------------------------------------------------------------------------------------------*/
  

     /*-----------------------------------------------------------------------------------------------------------------*/
     //row1
     const row1 = new Discord.MessageActionRow()
          .addComponents(

               new MessageSelectMenu()
                    .setCustomId('queue1')
                    .setPlaceholder('Skip to Next or Previous songs')
                    .addOptions([
                         {
                              label: `Previous Song`,
                              value: 'first1',
                              emoji: '🎶',
                              description: `Play the previous song`
                         }
                    ],
                    )
          )





     /*-----------------------------------------------------------------------------------------------------------------*/
     if (!queue) {
          message.reply('No queue Available');
     } else if (queue) {

          const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Repeat queue" : "Repeat song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;


          let y = Util.splitMessage(`__**Current Queue**__\n\n${queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`, { maxLength: 3500 })

          if (!y[1]) {
               const embed9 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${mu}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`${y[0]}\n\n${status(queue)}`)
                    .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                    .setTimestamp();
               if (queue.previousSongs.length < 1) {
                    message.channel.send({ embeds: [embed9] })
               } else if (queue.songs.length == 1 && queue.previousSongs.length >= 1) {
                    message.channel.send({ embeds: [embed9], components: [row1] })


               } else if (queue.songs.length == 2 && queue.previousSongs.length >= 1) {

                    /*------------------------------------------------------------------------------------*/
                    //row2

                    const row2 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue2')
                                   .setPlaceholder('Skip to Next or Previous songs')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first2',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {
                                             label: `Play 2nd Song`,
                                             value: 'second2',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row2] })
               }
               else if (queue.songs.length == 3 && queue.previousSongs.length >= 1) {

                    /*-------------------------------------------------------------------------------------*/
                    //row3
                    const row3 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue3')
                                   .setPlaceholder('Skip to Next or Previous songs')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first3',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {
                                             label: `Play 2nd Song`,
                                             value: 'second3',
                                             emoji: '🎶',


                                        }, {

                                             label: `Play 3rd Song`,
                                             value: 'third3',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row3] })
               }
               else if (queue.songs.length == 4 && queue.previousSongs.length >= 1) {
                    /*-----------------------------------------------------------------------------------*/
                    //row4
                    const row4 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue4')
                                   .setPlaceholder('Skip to Next or Previous songs')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first4',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {
                                             label: `Play 2nd Song`,
                                             value: 'second4',
                                             emoji: '🎶',

                                        },
                                        {

                                             label: `Play 3rd song`,
                                             value: 'third4',
                                             emoji: '🎶',


                                        },
                                        {

                                             label: `Play 4th song`,
                                             value: 'fourth4',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row4] })
               } else if (queue.songs.length == 5 && queue.previousSongs.length >= 1) {
                    /*-----------------------------------------------------------------------------------------------------------------*/
                    //row5
                    const row5 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue5')
                                   .setPlaceholder('Skip to Next 5 songs ')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first5',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {

                                             label: `Play 2nd song`,
                                             value: 'second5',
                                             emoji: '🎶',


                                        },
                                        {
                                             label: `Play 3rd song `,
                                             value: 'third5',
                                             emoji: '🎶',


                                        },
                                        {

                                             label: `Play 4th song`,
                                             value: 'fourth5',
                                             emoji: '🎶',


                                        },
                                        {

                                             label: `Play 5th song`,
                                             value: 'fifth5',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row5] })
               }
          }
          const filter = (interaction) => interaction.isSelectMenu() && interaction.user.id == message.author.id;
          const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 , max: 2 });
          collector.on('collect', async collected => {

               const value = collected.values[0];
               switch (value) {

                    case 'first1': client.distube.previous(message);
                         break;
                    case 'first2': client.distube.previous(message);
                         break;
                    case 'first3': client.distube.previous(message);
                         break;
                    case 'first4': client.distube.previous(message);
                         break;
                    case 'first5': client.distube.previous(message);
                         break;
                    case 'second2': client.distube.jump(message, 1);
                         break;
                    case 'second3': client.distube.jump(message, 1);
                         break;
                    case 'second4': client.distube.jump(message, 1);
                         break;
                    case 'second5': client.distube.jump(message, 1);
                         break;
                    case 'third3': client.distube.jump(message, 2);
                         break;
                    case 'third4': client.distube.jump(message, 2);
                         break;
                    case 'third5': client.distube.jump(message, 2);
                         break;
                    case 'fourth4': client.distube.jump(message, 3);
                         break;
                    case 'fourth5': client.distube.jump(message, 3);
                         break;
                    case 'fifth5': client.distube.jump(message, 4);
                         break;
               }

               collected.deferUpdate();
          })

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
               await message.channel.send({ embeds: [embed10], components: [row] })
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
                    await message.channel.send({ embeds: [embed10] })
                    await message.channel.send({ embeds: [embed12], components: [row] })
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
                    await message.channel.send({ embeds: [embed10] })
                    await message.channel.send({ embeds: [embed12] })
                    await message.channel.send({ embeds: [embed14], components: [row] })

               }








          }




     }
}

module.exports.config = {
     name: "queue",
     aliases: ['q'],
     Description: 'Command',
}