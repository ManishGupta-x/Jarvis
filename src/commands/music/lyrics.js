
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
          .setDescription(`**${searchsong}}**\n\n${y1[0]}`)
          .setColor('RANDOM')
        let lyricsEmbed3 = new Discord.MessageEmbed()
          .setTitle("📑 Lyrics")
          .setDescription(`${y1[1]}`)
          .setColor('RANDOM')


        message.channel.send({ embeds: [lyricsEmbed1] })

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
        lyrics = `No lyrics found for ${song.name}.`;
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


        message.channel.send({ embeds: [lyricsEmbed] })

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