const disTube = require('distube');
module.exports ={
    name: 'nightcore',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
        
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        let filter = client.distube.setFilter(message, 'nightcore');
        const embed = new Discord.MessageEmbed()
        .setColor('#F0074F')
        .setThumbnail('https://i.imgur.com/CpmhwPH.gif')
        .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription(`${"Nightcore : " + (filter || "Off")} `)
      
        
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send(embed);

        



        


    }  
}