const disTube = require('distube');
module.exports ={
    name: 'vaporwave',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        let filter = client.distube.setFilter(message, 'vaporwave');
        const embed = new Discord.MessageEmbed()
        .setColor('#F0074F')
        .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
        .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription("Vapourwave :`" + (filter ? "On" : "Off") + "`")
      
        
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send({embeds: [embed]});

        



        


    }  
}