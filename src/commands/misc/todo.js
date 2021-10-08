const Discord = require("discord.js")

const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args, Discord) => {


    let task = args.slice(0).join(" ");
    if (!task) {

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Mention task You wanna do 🤔 Eg: p!todo [Task] `)


            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed] });
        return;
    }
    let data = await list.findOne({

        UserID: message.author.id
    });


    if (data) {
        data.list.unshift({
            User: message.author.id,
            Task: task,
        });
        data.save();

        const embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription(`Your Task \`${task}\` has been added to list 😉`)
        
        
        .setFooter(`Type p!mytasks to view your todo list`, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send({ embeds: [embed1] });
            

              
    } else if (!data) {
        let newData = new list({

            UserID: message.author.id,
            list: [{            
                Task: task,
            },],
        });
        newData.save();

        const embed2 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
.setDescription(`Congrats you Saved your First task todo 😇`)


.setFooter(client.user.username, client.user.displayAvatarURL())
.setTimestamp();
message.channel.send({ embeds: [embed2] });

    }




}

module.exports.config = {
    name: "todo",
    Description: 'Command',
}