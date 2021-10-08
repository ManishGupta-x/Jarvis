const Discord = require("discord.js")
const disTube = require('distube');
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
            .setDescription(`Mention task You wanna do `)


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
        message.channel.send({ content: `Yours task \`${task}\` has been Added!` })
        message.channel.send({content : list.map( (task,id,list) => ` **${id + 1}**  ${list.task}`.join('\n') )})
       
    } else if (!data) {
        let newData = new list({

            UserID: message.author.id,
            list: [{

                User: message.author.id,
                Task: task,
            },],
        });
        newData.save();

        message.channel.send({ content: `Yours task has been Added!` })
    }














}

module.exports.config = {
    name: "todo",
    Description: 'Command',
}