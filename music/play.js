
const disTube = require('distube');
module.exports ={
    name: 'play',
    Description: 'this is a play  command!',
   async  execute(client,message,args, Discord){
        if(!args[0]){
          
            message.channel.send({content :'Please Mention song!'})
           return;

        }
        let textchannel = message.channel;
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        const music = args.join(" ");

        client.distube.playVoiceChannel(voiceChannel, music,{textChannel : textchannel})
        

    }  
}
