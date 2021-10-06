
const solenolyrics= require("solenolyrics"); 
const disTube = require('distube');

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
    
      if (!lyrics) lyrics = `No lyrics found for ${song.name}.`;
    
    

    let lyricsEmbed = new Discord.MessageEmbed()
      .setTitle("📑 Lyrics")
      .setDescription(`${lyrics}`)
      .setColor("#ffe700")
    //if to long make slice it 
    if (lyricsEmbed.description.length >= 2048)
      //slice the embed description and redefine it
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
      //edit to approve
    message.channel.send({ embeds : [lyricsEmbed]})
  }
};