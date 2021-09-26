const disTube = require('distube');
module.exports ={
    name: 'queue',
    Description: 'this is a music command!',
    async execute(client,message,args, Discord){
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);
        if(!queue){
          message.reply('No queue Available');
    }else if(queue)
        {         
            
            const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Repeat queue" : "Repeat song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;
            
            
            
            
            const embed9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`**Current Queue**\n${queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n\n${status(queue)}`)


            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed9] });
            
            
            message.channel.send({content : 'Current queue:\n' + queue.songs.map((song, id) =>
                `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).slice(0, 15).join("\n")});
            message.channel.send(`Total Queue Time : \`${queue.formattedDuration}\``)
        }

        }
        
      
} 