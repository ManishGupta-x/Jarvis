const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args, Discord) => {
    if (!args[0]) {

        message.reply('Provide time to seek in secs')
    }
    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
    let queue = await client.distube.getQueue(message);
    try { 
        
        client.distube.seek(message, Number(args[0])); 
    }catch(err){


        message.reply("Invalid position specified")
        return;
    }

        const embed8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888335393542524948/wp4067216.png')
        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription(`Jumped to : \`${queue.formattedCurrentTime}\``)


        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
    message.channel.send({ embeds: [embed8] });
}

module.exports.config = {
    name: "seek",
    aliases: [],
    Description: 'Command',
}