
const disTube = require('distube');
module.exports ={
    name: 'resume',
    Description: 'this is a music command!',
    async execute(client,message,args, Discord){
     
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);
    
        if(queue) {
             client.distube.resume(message)
             client.distube.pause(message)
             client.distube.resume(message)
            const embed = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882270899556991036/bhoZOt.png')
            .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Resumed the player! `)
          
            
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send(embed);
            
        } else if (!queue) {
            return
        };


    }  
}