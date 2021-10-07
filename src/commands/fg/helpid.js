

const Discord = require("discord.js")

module.exports.run = async (client, message, args, Discord) => {
   const newEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('ID HELP')
      .setAuthor('Freak Gamer')
      .addFields(

         { name: "How to Set your id ", value: 'Commands for setting up your id p!setid [id]  Eg:  p!setid 609045656' },
         { name: "Getting Your id", value: 'Type p!id to get your id and p!copyid to get a copyable Id ' },
         { name: "Getting others Id", value: 'Type p!id @user or p!copyid @user' }


      )



   message.channel.send({ embeds: [newEmbed] });
}

module.exports.config = {
   name: "helpid",
   Description: 'id command',
}