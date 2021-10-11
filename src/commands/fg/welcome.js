const Discord = require("discord.js")

    module.exports.run = async (client, message, args,Discord) => {
      const newEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('WELCOME TO FREAK GAMER')
      .setDescription('Have a Pleasant Stay in the Server')
      .setAuthor('Freak Gamer')
      .addFields(
       
       
       {name: "Enjoy Your stay " , value: 'Have fun'},
       
       
       
       )
         
          
          
       message.channel.send({embeds : [newEmbed]});
          message.delete({ timeout: 2000 })
    }
    
    module.exports.config = {
        name: "welcome",
        aliases: [],
        Description: 'Command',
    }