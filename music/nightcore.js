const disTube = require('distube');
module.exports ={
    name: 'nightcore',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        let filter = client.distube.setFilter(message, 'nightcore');
        const embed = new Discord.MessageEmbed()
        .setColor('#F0074F')
        .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888053234273497179/1482252.png')
        .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription("Filter : " +  (filter.join(", ")  || "Off"))
         .setImage('https://cdn.discordapp.com/attachments/730714810614022228/888053145366835200/kPNqom.png')
        
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send({embeds: [embed]});

        



        


    }  
}