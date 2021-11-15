
const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    

    const queue = client.distube.getQueue(message);
    if(!queue){
        return;
    }
    if(queue){

        if(!args[0]){

            message.reply('Mention song number from queue to jump on');

        }else if(args[0]){
 
            const num = args[0]+1;
            await client.distube.jump(message, num);
            const embed6 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Jumped to : ${Number(args[0])}`)


            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed6] });

            
        }
        
    }
}

module.exports.config = {
    name: "jumpto",
    aliases: ['jt'],
    Description: 'Command',
}