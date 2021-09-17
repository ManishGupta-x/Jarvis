
const { MessageEmbed } = require("discord.js");

module.exports ={
    name: 'music',
    Description: 'Gives Commands Info !',
    execute(client,message,args,Discord){
      const row = new MessageActionRow()
      .addComponents(
          new MessageButton()
              .setCustomId('Next')
              .setLabel('Next')
              .setStyle('SUCCESS'),);


       const newEmbed1 = new Discord.MessageEmbed()
       .setColor('#F0074F')
       .setTitle('Command Menu Music')
       .setAuthor('The Jarvis v2.0.0', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
       .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/848623748050976858/dj-console-mixing-music-with-hands-with-blurred-people-dancing-night-club-party_137321-140.png')
       .setTimestamp()
       .addFields( 
            
            {name : "🎧 p!play [song name] " , value : ` •  Plays the song mentioned`},
            {name : "🎧 p!queue" , value : ` •  Gives Current queue`},
            {name : "🎧 p!skip" , value : ` •  Skips Current song to next one`},
            {name : "🎧 Filters Available " , value : ` •  Bassboost , 8d , Echo , Nightcore, Vaporwave `},
            {name : "🎧 p!volume [value] " , value : ` • Sets Volume to the value . Eg ! p!volume 70 `}
             
             
          
        
        
           )
           .setFooter(client.user.username , client.user.displayAvatarURL() )
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png');

          const newEmbed2 = new Discord.MessageEmbed()
       .setColor('#F0074F')
       .setTitle('Special Command Menu Music 2')
       .setAuthor('The Jarvis v2.0.0', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
       .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/848623748050976858/dj-console-mixing-music-with-hands-with-blurred-people-dancing-night-club-party_137321-140.png')
       .setTimestamp()
       .addFields( 
            
            {name : "🎧 p!np " , value : ` • Shows current song playing! Button Access! `},
            {name : "🎧 p!autoplay", value : ` •  Toggles Autoplay On and Off`},
            {name : "🎧 p!8d " , value : ` • Activates 8D Filter `},
            {name : "🎧 p!loop" , value : ` • Loops queue If typed 1st time , 2nd time Loops song `},
            {name : "🎧 p!pause/resume" , value : ` •  Pause/Resume Songs `},
            {name : "🎧 p!stop " , value : ` • Stops Music  `}
             
             
          
        
        
           )
           .setFooter('Type p!music to get the first menu' , client.user.displayAvatarURL() )
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png');
          message.channel.send({embeds: [newEmbed1], components : [row]});
          
               
          const filter = (interaction) => interaction.isButton() && interaction.customId === 'Next' ;

          const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });
          collector.on('collect', async collected => {
  
  
       
              
  
                  if (collected.customId === 'Next') {
                      
                    
                      await message.edit(newEmbed2);
                  } 
              
              
          })

        } 
        
        
}
