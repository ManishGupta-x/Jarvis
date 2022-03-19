
const solenolyrics = require("solenolyrics");
const lyricsFinder = require("lyrics-finder")
const disTube = require('distube');
const { MessageEmbed, Util } = require("discord.js")

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    //Get the current Queue
    let queue = await client.distube.getQueue(message);
    
    //If no Queue Error
    if (!args[0]) { if (!queue) { message.reply('No song Playing') } }
    if (args[0]) {

      const searchsong = args.join(" ");
      var lyrics1 = await lyricsFinder("", searchsong)

      if (!lyrics1) {
        lyrics1 = await solenolyrics.requestLyricsFor(searchsong)

      }
      if (!lyrics1) {
        lyrics1 = `No lyrics found for ${song.name}.`;
      }


      let y1 = Util.splitMessage(lyrics1, { maxLength: 3500 })
      if (lyrics1) {
        let lyricsEmbed1 = new Discord.MessageEmbed()
          .setTitle("📑 Lyrics")
          .setDescription(`**${searchsong}**\n\n${y1[0]}`)
          .setColor('RANDOM')
        let lyricsEmbed3 = new Discord.MessageEmbed()
          .setTitle("📑 Lyrics")
          .setDescription(`${y1[1]}`)
          .setColor('RANDOM')


        message.channel.send({ embeds: [lyricsEmbed1] }).catch(error => {

          const embed1 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
              .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
              .setDescription(`Getting some issues try again `)
  
  
              .setFooter(`Report Manish<3 if you get this error`, client.user.displayAvatarURL())
              .setTimestamp();
          message.channel.send({ embeds: [embed1] });
      });

        if (y1[1]) {
          await message.channel.send({ embeds: [lyricsEmbed3] })
        }
      }

    }

    if (!args[0] && queue) {
      const song = queue.songs[0] ;
      var lyrics = await lyricsFinder("", `${song.name}`)

      if (!lyrics) {
        lyrics = await solenolyrics.requestLyricsFor(`${song.name}`)

      }
      if (!lyrics) {
        lyrics = `No lyrics found for ${song.name}. Try Typing song name after command!`;
      }

      let y = Util.splitMessage(lyrics, { maxLength: 3500 })
      if (lyrics) {
        let lyricsEmbed = new Discord.MessageEmbed()
          .setTitle("📑 Lyrics")
          .setDescription(`**${song.name}**\n\n${y[0]}`)
          .setColor('RANDOM')
        let lyricsEmbed2 = new Discord.MessageEmbed()
          .setTitle("📑 Lyrics")
          .setDescription(`${y[1]}`)
          .setColor('RANDOM')


        message.channel.send({ embeds: [lyricsEmbed] }).catch(error => {

          const embed9 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
              .setAuthor(
                "Jarvis",
                "https://cdn.discordapp.com/avatars/778267007439077396/b3f9ab1c6342de220b333fcbdff93ec5.png?size=256"
              )
              .setDescription(`Getting some issues try again `)
  
  
              .setFooter(`Report Manish<3 if you get this error`, client.user.displayAvatarURL())
              .setTimestamp();
          message.channel.send({ embeds: [embed9] });
      });

        if (y[1]) {
          await message.channel.send({ embeds: [lyricsEmbed2] })
        }
      }
    }
  }



module.exports.config = {
    name: "lyrics",
    aliases: ['ly'],
    Description: 'Command',
}