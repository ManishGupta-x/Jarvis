
const disTube = require('distube');
m
const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);
    
        if(queue) {
            client.distube.pause(message)
            const embed = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882269936716763136/thumb-pause-neon-icon-4k-purple-background-neon-symbols-pause.png')
            .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Paused the player! `)
          
            
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send({embeds: [embed]});
            
        } else if (!queue) {
            return
        };
}

module.exports.config = {
    name: "pause",
    Description: 'Command',
}