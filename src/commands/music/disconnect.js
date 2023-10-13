const Discord = require("discord.js")
const disTube = require('distube');
const prefixModel = require("../../models/prefix")
const mongoose = require("mongoose");
const config = require('../../../settings.json');
const { client } = require("discord.js");
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports.run = async (client, message, args, Discord) => {
    
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    
    client.distube.voices.leave(message);
    
    if (!data) {
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png')
            .setAuthor(
                "Jarvis",
                "https://cdn.discordapp.com/avatars/778267007439077396/b3f9ab1c6342de220b333fcbdff93ec5.png?size=256"
            )
            .setDescription(`Succesfully Disconnected ! I hope you enjoyed 💘 ! Do write your reviews by p!review`)
        
        
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed] });
    } else if (data) {
        
        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png')
            .setAuthor(
                "Jarvis",
                "https://cdn.discordapp.com/avatars/778267007439077396/b3f9ab1c6342de220b333fcbdff93ec5.png?size=256"
            )
            .setDescription(`Succesfully Disconnected ! I hope you enjoyed 💘 ! Do write your reviews by ${data.Prefix}review`)
        
        
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed2] });
    }
    

    
}

module.exports.config = {
    name: "disconnect",
    aliases: ['dc'],
    Description: 'Command',
}