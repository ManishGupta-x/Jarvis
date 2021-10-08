const Discord = require("discord.js")

const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args, Discord) => {


    let data = await list.findOne({

        UserID: message.author.id
    });

    if (data) {


        const embed1 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`\n **__Task No__**       **__Task__**        **__Status__** \n\n`+ data.list.map((Task, id, list) => ` **${id + 1}**.    \`${list[id].Task}\` \t  \`${list[id].status}\``).join('\n'))


            .setFooter(`Type p!todo [task] to add task`, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed1] });




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
    name: "mytasks",
    Description: 'Command',
}