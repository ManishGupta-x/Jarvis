
const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    

    const queue = client.distube.getQueue(message);
    if(!queue){
        return;
    }
    if(queue){

        if(!args[0]){

            message.reply('Mention song number from queue to jump on');

        }else if(args[0]){

            await client.distube.jump(message, args[0]+1);
        }
        
    }
}

module.exports.config = {
    name: "jumpto",
    aliases: ['jt'],
    Description: 'Command',
}