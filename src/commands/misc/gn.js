
const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    message.channel.send({content :'Very Good Night Janeman <3'});
}

module.exports.config = {
    name: "gn",
    Description: 'Command',
}