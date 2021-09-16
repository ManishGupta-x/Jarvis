const disTube = require('distube');
module.exports ={
    name: 'bassboost',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        let filter = client.distube.setFilter(message,'bassboost');
        const embed = new Discord.MessageEmbed()
        .setColor('20B8FF')
        .setThumbnail('https://i.imgur.com/WaQJNfM.gif')
        .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription("BassBoost:`" + (filter ? "On" : "Off") + "`")
      
        
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send({embeds: [embed]});

        


        


    }  
}