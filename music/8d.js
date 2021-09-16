const disTube = require('distube');
module.exports ={
    name: '8d',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        let filter = client.distube.setFilter(message,'8d');

        const embed = new Discord.MessageEmbed()
        .setColor('#F0074F')
        .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888052883549995048/maxresdefault.png')
        .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription("Filter :`" + (filter || "Off") + "`")
        .setImage('https://cdn.discordapp.com/attachments/730714810614022228/888052065631354930/maxresdefault.png')
        
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send({embeds: [embed]});

        


    }  
}