const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    client.distube.voices.leave(message);

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png')
    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
    .setDescription(`Succesfully Disconnected ! I hope you enjoyed 💘 ! Do write your reviews by p!review`)
    
    
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp();
    message.channel.send({ embeds: [embed] });
}

module.exports.config = {
    name: "disconnect",
    aliases: ['dc'],
    Description: 'Command',
}