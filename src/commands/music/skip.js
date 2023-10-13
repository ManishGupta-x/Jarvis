
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

        message.react('✅');
        const number_of_members = message.member.voice.channel.members.size -1;
        const number_of_members_needed = Math.ceil(number_of_members / 2);
        message.channel.send(`We need ${number_of_members_needed} votes to skip the song !`);
        let number_of_reactions = 0;
        setTimeout(() => {
            number_of_reactions = message.reactions.cache.get('✅').count;
            console.log(number_of_reactions);
            
        if(number_of_reactions > number_of_members_needed) {
            message.channel.send('Skipping the song');
            client.distube.skip(message);
        } else {
            
            message.channel.send(`We needed ${number_of_members_needed} votes to skip the song ! sadly not enough ☹️`);
        }
        }, 15000);

        
    };
}

module.exports.config = {
    name: "skip",
    aliases: [],
    Description: 'Command',
}