
const Discord = require("discord.js")

module.exports.run = async (client, message, args, Discord) => {
    const newEmbed = new Discord.MessageEmbed()
        .setColor('#ff3600')
        .setTitle('My INFO')
        .setAuthor('Freak Gamer')
        .setDescription("Hi bruh ! M jarvis, pleased to meet You :)) \n\n The Botfather is Manish ! \n Will help you at every moment ! <3 ")
        .setImage('https://cdn.discordapp.com/attachments/730714810614022228/855885746853642260/24664-jarvis-wallpaper-hd.png');


    message.channel.send({ embeds: [newEmbed] });
}

module.exports.config = {
    name: "botinfo",
    Description: 'Command',
}