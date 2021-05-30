module.exports ={
    name: 'stop',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
     
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await bot.distube.getQueue(message);
    
        if(queue) {
            bot.distube.stop(message)
    
            message.channel.send('Stopped Music')
        } else if (!queue) {
            return
        };


    }  
}