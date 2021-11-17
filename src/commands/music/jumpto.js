
const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    
    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
    const queue = client.distube.getQueue(message);
    if(!queue){
        return;
    }
    if(queue){

        if(!args[0] || isNaN(args[0])){

            message.reply('Mention song number from queue to jump on');

        }else if(args[0]){
 
            const num = parseInt(args[0]) - 1;
            await client.distube.jump(message, Number(num)).catch(error => {

                const embed9 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`Getting some issues try again `)
        
        
                    .setFooter(`Report Manish<3 if you get this error`, client.user.displayAvatarURL())
                    .setTimestamp();
                message.channel.send({ embeds: [embed9] });
                return;
            });
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