const Discord = require('discord.js');

module.exports ={
    name: 'janeman',
    Description: 'this is a role command!',
    execute(client,message,args, Discord){
     
        
        if (!args[0]) {

           return message.channel.send('You didnt specified a sentence')
       }
       let question = message.content.slice(prefix.length + 3)
        
           
       channelID = '833731235821387826';
           
       client.channels.cache.get(`${channelID}`).send(question)
           message.delete({ timeout: 2000 })


    }  
}