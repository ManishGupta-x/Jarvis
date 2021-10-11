const Discord = require("discord.js")
const mongoose = require("mongoose");
const config = require('../../../settings.json');
const data = require("../../models/data");
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args, Discord) => {
    let data = await list.findOne({

        UserID: message.author.id
    });

    if(data){
    if (args[0] == 'remove' || args[0] == 'Remove') {

        if (isNaN(args[1]) || data.list.length < args[1]) {
            message.reply(" Invalid task Number 🙄")
        } else {
      
            const num = args[1] - 1;
            data.list.splice(num,1);
            
            data.save();
            const embed9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Removed Task Number : ${args[1]} `)
    
    
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed9] });

        }


    }}
    if(!data){

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
    name: "task",
    Description: 'Command',
}