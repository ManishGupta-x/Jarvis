
const solenolyrics= require("solenolyrics"); 
const disTube = require('distube');

module.exports = {
  name: "lyrics",
  Description: "Get lyrics for the currently playing song",
  

  async execute(client, message, args, Discord) {
    
    
    //Get the current Queue
    let queue = await client.distube.getQueue(message);
    //If no Queue Error
    if (!queue ) { message.reply('No song Playing')}      
    let lyrics = null;
    //define the temporary Embed
    let temEmbed = new Discord.MessageEmbed()
    .setAuthor("Searching...", "https://cdn.discordapp.com/emojis/757632044632375386.gif?v=1").setFooter("Lyrics")
    .setColor("#ffe700")
    //send it and safe it in a variable
    let result = await message.channel.send({embeds: [temEmbed]})
    //try to find lyrics
    
      //use lyricsfinder
      lyrics = await solenolyrics.requestLyricsFor(`${queue.songs[0].name}`).catch(error => {
        {
            lyrics = `No lyrics found for ${queue.songs[0].title}.`;
          }
      });
      //If no Lyrics define no lyrics
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}.`;
    
    //catch any error

    //define lyrics Embed
    let lyricsEmbed = new Discord.MessageEmbed()
      .setTitle("📑 Lyrics")
      .setDescription(lyrics)
      .setColor("#ffe700")
    //if to long make slice it 
    if (lyricsEmbed.description.length >= 2048)
      //slice the embed description and redefine it
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
      //edit to approve
    return result.edit(lyricsEmbed).catch(console.error);
  }
};