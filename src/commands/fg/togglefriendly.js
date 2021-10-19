const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    
   let member = message.member;
    let memberTarget = message.guild.members.cache.get(member.id);
    let Role = message.guild.roles.cache.find(role => role.name === 'friendly');
    if (message.member.roles.cache.has('885896296739790919')) {
        memberTarget.roles.remove(Role.id);
        message.reply('You will not get pinged for friendlies now  :)!')
    }
    else {

        memberTarget.roles.add(Role.id);
        message.reply('You Joined Friendlies Channel  :)!')
    }
}

module.exports.config = {
    name: "togglefriendly",
    aliases: ['tf'],
    Description: 'Command',
}