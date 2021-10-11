
const disTube = require('distube');

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await client.distube.getQueue(message);

    if(!queue) {
        return;
       
    } else if(queue) {
        client.distube.stop(message)

        message.channel.send({content: 'Stopped Music'})
    };

}

module.exports.config = {
    name: "stop",
    aliases: [],
    Description: 'Command',
}