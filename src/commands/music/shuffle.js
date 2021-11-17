const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    


    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
   const queue = client.distube.getQueue(message);
    if(!queue){
        return;
    }
    if(queue){

        await client.distube.shuffle(message);
        message.channel.send({content : "Successfully shuffeled queue"});
    }
}

module.exports.config = {
    name: "shuffle",
    aliases: [],
    Description: 'Command',
}