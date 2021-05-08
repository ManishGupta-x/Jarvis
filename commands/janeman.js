const Discord = require('discord.js');

module.exports ={
    name: 'janeman',
    Description: 'this is a role command!',
    execute(client,message,args, Discord){
     
        
        if (!args[0]) {

           return message.channel.send('You didnt specified a sentence')
       }
   
        
           
       channelID = '745878533246681170';
           
       client.channels.cache.get(`${channelID}`).send(args[0])
           message.delete({ timeout: 2000 })


    }  
}