const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    

    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
  
    if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('You are not in the same voice channel!');
    let queue = await client.distube.getQueue(message);
    if (queue.songs.length < 1) return message.channel.send('There is nothing in the queue except the playing song!');
    if (!args[0] && !args[1]) {

        message.channel.send('Please provide the queue numbers to swap!');
        return;
    }
    if (args[0] == 1 || args[1] == 1) {
        
        message.channel.send('Cannot swap the playing song!');
        return;
    }
    if(args[0] > queue.songs.length || args[1] > queue.songs.length) {
        message.channel.send('Check your queue numbers!');
        return;
    }

    //swap queue.songs[args[0]] with queue.songs[args[1]]
    let temp = queue.songs[args[0] - 1];
    queue.songs[args[0] - 1] = queue.songs[args[1] - 1];
    queue.songs[args[1] - 1] = temp;

    message.channel.send(`Swapped ${args[0]} and ${args[1]} in the queue!`);

}

module.exports.config = {
    name: "swap",
    aliases: [],
    Description: 'Command',
}