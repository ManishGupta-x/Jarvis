const disTube = require('distube');
module.exports ={
    name: 'nightcore',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        let filter = client.distube.setFilter(message, 'nightcore');
        message.channel.send("Current queue filter: " + (filter || "Off"));

        


    }  
}