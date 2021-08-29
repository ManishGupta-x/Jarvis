const Discord = require('discord.js');

module.exports ={
    name: 'janeman',
    Description: 'this is a role command!',
    execute(client,message,args, Discord){
        let text = args.slice(0).join(' ');
        
        if (!args[0]) {

           return message.channel.send('You didnt specified a sentence')
       }
       
        
           
       channelID = '833731235821387826';
           
       client.channels.cache.get(`${channelID}`).send(text)
           message.delete({ timeout: 2000 })


    }  
}