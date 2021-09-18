const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports ={
    name: 'music',
    Description: 'Gives Commands Info !',
    execute(client,message,args,Discord){
      
      var wallpapers = ["https://cdn.discordapp.com/attachments/730714810614022228/888355120411209738/1792303.png",
      "https://cdn.discordapp.com/attachments/730714810614022228/888355457704542278/977273-desktop-background-music-1920x1080-for-samsung.png",
      "https://cdn.discordapp.com/attachments/730714810614022228/888355852082376724/photo-1513829596324-4bb2800c5efb.png","https://cdn.discordapp.com/attachments/730714810614022228/888355302599196692/maxresdefault.png",
    "https://cdn.discordapp.com/attachments/730714810614022228/888355751276449822/photo-1499415479124-43c32433a620.png"]
       var mu = Math.floor(Math.random() * wallpapers.length);
       const newEmbed1 = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('Command Menu Music')
       .setAuthor('The Jarvis v2.0.0', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
       .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/848623748050976858/dj-console-mixing-music-with-hands-with-blurred-people-dancing-night-club-party_137321-140.png')
       .setTimestamp()
       .addFields( 
            
            {name : "🎧 p!play [song name] " , value : ` •  Plays the song mentioned`},
            {name : "🎧 p!np " , value : ` • Shows current song playing! Button Access! `},
            {name : "🎧 p!loop song/queue" , value : ` • Loops song Queue `},
            {name : "🎧 p!pause/resume/stop" , value : ` •  Pause/Resume/stop Songs`},
            {name : "🎧 p!queue" , value : ` •  Gives Current queue`},
            {name : "🎧 p!skip" , value : ` •  Skips Current song to next one`},
            {name : "🎧 Filters Available " , value : ` •  Bassboost , 8d , Echo , Nightcore, Vaporwave `},
            {name : "🎧 p!volume [value] " , value : ` • Sets Volume to the value . Eg ! p!volume 70 `},
            
             
             
          
        
        
           )
           .setFooter(client.user.username , client.user.displayAvatarURL() )
          .setImage(`${wallpapers[mu]}`);

          
          message.channel.send({embeds: [newEmbed1]});
          
               
          

        } 
        
        
}
