

const Discord = require("discord.js")

module.exports.run = async (client, message, args, Discord) => {

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;
    const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setColor('RANDOM')
        .setImage(member.user.displayAvatarURL())

    message.channel.send({ embeds: [userEmbed] });

}

module.exports.config = {
    name: "av",
    Description: 'Command',
}