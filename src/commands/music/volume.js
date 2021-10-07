const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    if (!args[0]) {

        message.reply('Pls Specify Volume Level . Eg : p!volume 80')
    } if (args[0] > 100) {

        message.reply('Max Volume is 100')
    } if (args[0] <= 100) {
        if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
        client.distube.setVolume(message, Number(args[0]));
        const embed6 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888335393542524948/wp4067216.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Volume Set to : ${Number(args[0])}`)


            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed6] });

    }
}

module.exports.config = {
    name: "volume",
    Description: 'Command',
}