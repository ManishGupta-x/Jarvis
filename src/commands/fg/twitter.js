

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    message.channel.send({content : 'https://twitter.com/officialpes'});
}

module.exports.config = {
    name: "twitter",
    Description: 'Command',
}