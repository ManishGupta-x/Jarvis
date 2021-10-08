const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require("discord.js");


const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
  
   const newEmbed1 = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('Command Menu For Todo List')
   .setAuthor('The Jarvis v2.0.0', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
   .setThumbnail('https://media.discordapp.net/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
   .setTimestamp()
   .addFields( 
        
        {name : "✍️ p!todo [task]" , value : ` • Adds Your Task to the List!`},
        {name : "✍️ p!mytasks" , value : ` • Shows task You have Done`},
        {name : "✍️ p!task remove [number]" , value : ` • Removes The Task  `},
        {name : "✍️ p!done [number]" , value : ` • Marks the Task as Complete`},
        {name : "✍️ p!deletetodolist" , value : ` • Deletes The Whole List`},
        {name : "✍️ Status" , value : ` • ✅ :  Task Done | ❌ : Task Incomplete `},
        
      
        
         
         
      
    
    
       )
       .setFooter(client.user.username , client.user.displayAvatarURL() )
      .setImage(`https://cdn.discordapp.com/attachments/730714810614022228/895998644807942174/unknown.png`);
      
      message.channel.send({embeds: [newEmbed1]});
      
           
      
}

module.exports.config = {
    name: "helptodo",
    Description: 'Command',
}