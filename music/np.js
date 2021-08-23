const disTube = require('distube');
module.exports ={
    name: 'np',
    Description: 'this is a music command!',
    async execute(client,message,args, Discord){
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);
        queue.songs.map((song,id) => {
            const embed = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setTitle(`Now Playing`)
            .setDescription(`${song.name}- \`${song.formattedDuration}\``)

             


        }).slice(0, 1).join("\n");

      
          message.channel.send(embed);
    }  
} 