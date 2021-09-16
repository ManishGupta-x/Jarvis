const disTube = require('distube');
const { MessageActionRow, MessageButton } = require('discord.js');



module.exports ={
    name: 'np',
    Description: 'this is a music command!',
    async execute(client,message,args, Discord){
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        var wallpapers = ["https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png"
        , "https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
        "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png","https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png","https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png"]
        var mu = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        let queue = await client.distube.getQueue(message);
        const song = queue.songs[0];
        const upcomingsong = queue.songs[1];
        
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('skip')
                    .setLabel('Skip')
                    .setStyle('DANGER'),

                new MessageButton()
                    .setCustomId('BassBoost')
                    .setLabel('Bassboost')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('Nightcore')
                    .setLabel('Nightcore')
                    .setStyle('SUCCESS'),
            );
       
            
            const embed = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail(`${mu}`)
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setTitle(`Now Playing`)
            .setDescription(`${song.name} | Requested by: ${song.user}\` || ${song.formattedDuration}\` `)
            .addField("Upcoming Song :", `${upcomingsong.name} | Requested by: ${upcomingsong.user}\` || ${upcomingsong.formattedDuration}\`}`)
            message.channel.send({embeds: [embed] ,components : [row]});
            

            
    

        const filter = (interaction) => interaction.isButton() && interaction.customId === 'skip' || interaction.customId === 'BassBoost' || interaction.customId === 'Nightcore' ;

        const collector = message.channel.createMessageComponentCollector({ filter, time: 300000 });
        collector.on('collect', async collected => {


     
            

                if (collected.customId === 'skip') {
                    await collected.channel.send({ content: "Skipped"})
                  
                    await client.music.get('skip').execute(client, message, args, Discord);
                } else if (collected.customId === 'BassBoost') {
                    await collected.channel.send({ content: "BassBoost Activated !" })
                    
                    await client.music.get('bassboost').execute(client, message, args, Discord);


                } else if (collected.customId === 'Nightcore') {
                    await collected.channel.send({ content: "Nightcore Activated !" })
                    await client.music.get('nightcore').execute(client, message, args, Discord);


                }
                collected.deferUpdate()
            
        })
          
    }  
} 