const Discord = require("discord.js")

const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args, Discord) => {

    let data = await list.findOne({

        UserID: message.author.id
    });


    let state1 = '❌';
    var x=0;
    if (!args[0] && data) {

    //     message.reply("Are you sure u want to undone all yours tasks !");
    //     const filter = m => m.author.id == message.author.id;
    //     const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    //     const response = collected.first().content;
    //     if(response=='yes'|| response=='YES'|| response == 'Yes'){


    //         for(x=0;x<data.list.length ;x++){

    //             let savetask = data.list[x].Task;

    //             data.list.splice(x, 1);
    //             data.list.unshift({
    //             User: message.author.id,
    //             Task: savetask,
    //             status: state1
    //     });
    //     data.save();
    //         }
    //         data.save();
    //         const embed1 = new Discord.MessageEmbed()
    //         .setColor('RANDOM')
    //         .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
    //         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
    //         .setDescription(`The Tasks Has Been Marked UnDone ! `)


    //         .setFooter(client.user.username, client.user.displayAvatarURL())
    //         .setTimestamp();
    //     message.channel.send({ embeds: [embed1] });
    //     }else{

    //            message.reply("Cancelled the operation 😥");
    //            return;
    //     }
    message.reply("mention task number")
     }

    
    if (data) {

        
        const num = args[0] - 1;
        let savetask = data.list[num].Task;

        data.list.splice(num, 1);
        data.list.unshift({
            User: message.author.id,
            Task: savetask,
            status: state1
        });
        data.save();

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`The Task Has Been Marked Done ! `)


            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed] });

    } else if (!data) {

        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Bruh You dont have a Task to do 😥`)


            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed2] });

    }


}

module.exports.config = {
    name: "undone",
    aliases: [],
    Description: 'Command',
}