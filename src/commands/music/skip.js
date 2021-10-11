
const disTube = require('distube');

const Discord = require("discord.js")

module.exports.run = async (client, message, args, Discord) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await client.distube.getQueue(message);
    if (!queue) {
        message.reply('No Song in Queue !')
    } else if (queue.songs.length <= 1 && !queue.autoplay) {
        message.reply(" No Upcoming Song")

    } else if (queue) {
        client.distube.skip(message)

        message.channel.send({ content: 'Skipped' })
    };
}

module.exports.config = {
    name: "skip",
    aliases: [],
    Description: 'Command',
}