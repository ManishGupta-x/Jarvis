module.exports ={
    name: 'play',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        const music = args.join(" ");

        client.distube.play(message, music)


    }  
}