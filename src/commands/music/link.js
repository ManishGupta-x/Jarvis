const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await client.distube.getQueue(message);
    if (!queue) {
        message.reply('No Song in Queue !')
    }
    const song = queue.songs[0];
    message.channel.send(song.url);
}

module.exports.config = {
    name: "link",
    aliases: [],
    Description: 'Command',
}