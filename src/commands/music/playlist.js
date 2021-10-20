const Discord = require("discord.js")
const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const playlist = require('../../models/playlistdata');
const prefixModel = require("../../models/prefix")
const disTube = require('distube');

module.exports.run = async (client, message, args, Discord) => {

    let queue = client.distube.getQueue(message);
    let data = await playlist.findOne({

        UserID: message.author.id
    });
    const data1 = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    if(data1)   const prefixx = data1.prefix;
    if(!data1)  const prefixx = 'p!';
    

    const embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://cdn.discordapp.com/attachments/730714810614022228/900375278734442496/310182.png`)
        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription(`Congrats you added the song to your playlist 😉`)


        .setFooter(`${prefixx}pl  view to view Playlist`, client.user.displayAvatarURL())
        .setTimestamp();

    const embed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://cdn.discordapp.com/attachments/730714810614022228/900375278734442496/310182.png`)
        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription(`Congrats you added your first song to your playlist 😉`)


        .setFooter(`${prefixx}pl view to view Playlist`, client.user.displayAvatarURL())
        .setTimestamp();
 if(!args[0]){
            message.reply('Invalid command ')
}

    switch (args[0]) {

        case 'add': if (queue) {

            message.reply("Do you want to add current song playing? yes/no ");
            const filter1 = m => m.author.id == message.author.id;

            const collected1 = await message.channel.awaitMessages({ filter1, max: 1, time: 60000, errors: ['time'] });
            const response1 = collected1.first().content;
            if (response1 == 'yes' || response1 == 'Yes' || response1 == 'YES') {

                currentsong = queue.songs[0];
                if (data) {
                    data.playlist.unshift({
                        User: message.author.id,
                        song: currentsong.name,
                    });
                    data.save();


                    message.channel.send({ embeds: [embed1] });



                } else if (!data) {
                    let newData = new playlist({

                        UserID: message.author.id,
                        playlist: [{
                            song: currentsong.name,

                        },],

                    });
                    newData.save();
                    message.channel.send({ embeds: [embed2] });


                }


            } else if (response1 == 'no' || response1 == 'No' || response1 == 'NO') {

                message.reply('Ok then, Type the song name you want to add to the playlist or type \`cancel\` to cancel!')
                const filter2 = m => m.author.id == message.author.id;

                const collected2 = await message.channel.awaitMessages({ filter2, max: 1, time: 60000, errors: ['time'] });
                const response2 = collected2.first().content;
                if (response2 == 'cancel' || response2 == 'Cancel' || response2 == 'CANCEL') {

                    message.reply(" Ok -_- !")
                    return;
                }
                if (data) {
                    data.playlist.unshift({
                        User: message.author.id,
                        song: response2,
                    });
                    data.save();

                    message.channel.send({ embeds: [embed1] });


                } else if (!data) {
                    let newData = new playlist({

                        UserID: message.author.id,
                        playlist: [{
                            song: response2,

                        },],

                    });
                    newData.save();

                    message.channel.send({ embeds: [embed2] });

                }

            } else {

                message.reply('Invalid Reply -_-')
            }


        } else if (!queue) {

            message.reply("Mention song name you want to add to your playlist ");

            const filter = m => m.author.id == message.author.id;

            const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
            const response = collected.first().content;
            if (data) {
                data.playlist.unshift({
                    User: message.author.id,
                    song: response,
                });
                data.save();

                message.channel.send({ embeds: [embed1] });


            } else if (!data) {
                let newData = new playlist({

                    UserID: message.author.id,
                    playlist: [{
                        song: response,

                    },],

                });
                newData.save();

                message.channel.send({ embeds: [embed2] });

            }

        }
break;
        case 'remove': if (!args[1]) {


            message.reply(`Pls mention song number from your playlist , to view your playlist type \`${prefixx}pl view\` \n Correct usage : Eg : \`${prefixx}pl remove 2\``)
            return;
        } if (isNaN(args[1]) || data.playlist.length < args[1]) {


            message.reply(" Invalid song Number 🙄")
        } else {

                const num = args[1] - 1;
                data.playlist.splice(num, 1);

                data.save();
                const embed9 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${message.author.displayAvatarURL}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`Removed Song number \`${num}\` from your playlist`)


                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp();
                message.channel.send({ embeds: [embed9] });

            }
            break;
        case 'view' :  if (data) {


            const embed3 = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`__**Here is your Playlist 😉**__`)
                .setThumbnail(`${message.author.displayAvatarURL()}`)
                .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')  
                .setDescription(data.playlist.map((song,id,playlist) => ` **${id + 1}**.   \`${playlist[id].song}\` `).join('\n'))
    
    
                .setFooter(`Add songs ${prefixx}pl add [song]`, client.user.displayAvatarURL())
                .setTimestamp();
            message.channel.send({ embeds: [embed3] });
    
    
    
    
        } else if(!data){

            const embed4 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/900356283146829834/maxresdefault.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Bruh it seems you dont have a Playlist 😥`)


            .setFooter(`Add songs ${prefixx}pl add [song]`, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed4]});
        }
        case 'play' : if(!args[1]){
            
            message.reply(`Please mention song number u want to play from your playlist \n \`Eg: ${prefixx}pl play 2\` `)
        }
        if(isNaN(args[1] || data.playlist.length < args[1])){

                   message.reply('Invalid song number')
    }else if(args[1]){


        if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
         data.playlist.map((song,id,playlist) => {

                const numm = args[1]-1;
                const music = playlist[numm].song;
                client.distube.play(message,music)


         })
    }

}
}
module.exports.config = {
    name: "playlist",
    aliases: ['pl'],
    Description: 'Command',
}