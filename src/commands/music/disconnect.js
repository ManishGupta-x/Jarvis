const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    client.distube.voices.leave(message);
                    message.channel.send({ content: 'Successfully Disconnected' });
}

module.exports.config = {
    name: "disconnect",
    Description: 'Command',
}