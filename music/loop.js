const disTube = require('distube');
const { RepeatMode } = require("distube");
module.exports ={
    name: 'loop',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        
       
        let mode;
        switch(client.distube.setRepeatMode(message, parseInt(args[0]))) {
            case RepeatMode.DISABLED:
                mode = "Off";
                break;
            case RepeatMode.SONG:
                mode = "Repeat a song";
                break;
            case RepeatMode.QUEUE:
                mode = "Repeat all queue";
                break;
        }
        const embed = new Discord.MessageEmbed()
        .setColor('#F0074F')
        .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
        .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription("Set repeat mode to `" + mode + "`")
      
        
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send({embeds: [embed]});

        


    }  
}