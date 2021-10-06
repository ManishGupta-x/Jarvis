
const solenolyrics= require("solenolyrics"); 
const lyricsFinder = require("lyrics-finder")
const disTube = require('distube');
const { MessageEmbed, Util } = require("discord.js")
module.exports = {
  name: "lyrics",
  Description: "Get lyrics for the currently playing song",
  

  async execute(client, message, args, Discord) {
    
    
    //Get the current Queue
    let queue = await client.distube.getQueue(message);
    const song = queue.songs[0];
    //If no Queue Error
    if (!queue ) { message.reply('No song Playing')}      
     
  
     
     var lyrics = await solenolyrics.requestLyricsFor(`${song.name}`).catch(error => {
        {
            lyrics = `No lyrics found for ${song.name}.`;
          }
      });
    
      if (!lyrics) 
    {  lyrics = await lyricsFinder(`${song.name}`,'')}
      if(!lyrics){
      lyrics = `No lyrics found for ${song.name}.`;}
    
      let y = Util.splitMessage(lyrics, { maxLength: 3500 })

    let lyricsEmbed = new Discord.MessageEmbed()
      .setTitle("📑 Lyrics")
      .setDescription(`${y[0]}`)
      .setColor('RANDOM')
      let lyricsEmbed2 = new Discord.MessageEmbed()
      .setTitle("📑 Lyrics")
      .setDescription(`${y[1]}`)
      .setColor('RANDOM')
    
     
    message.channel.send({ embeds : [lyricsEmbed]})

    if(y[1]){
    await   message.channel.send({ embeds : [lyricsEmbed2]})}
  }
};