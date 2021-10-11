const Discord = require("discord.js")
const math = require('mathjs')
module.exports.run = async (client, message, args,Discord) => {
    let task = args.slice(0).join(" ");

try {

    const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/897101009132871690/calculator-pencil-pen-paper.png')
.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
.addField("**__Question__**", task)
.addField("**__Solution__**", math.evaluate(task))
.setFooter(client.user.username, client.user.displayAvatarURL())
.setTimestamp();
message.channel.send({ embeds: [embed] });
 
}catch(err){

    message.channel.send(' Invalid Question -_-')
}


}

module.exports.config = {
    name: "calculate",
    aliases: ['cal','calc' ,'c'],
    Description: 'Command',
}