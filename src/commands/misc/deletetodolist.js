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
             message.reply('Are you sure u want to delete your todo list? yes/no')
        const filter = m => m.author.id == message.author.id;
        const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
        const response = collected.first().content;
        if(response == 'yes' || response == 'Yes' || response == 'YES' ){
            list.findOneAndDelete({
                UserID: message.author.id
    
            }, (err, res) => {
                if(err) console.log(err)
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setThumbnail('https://media.discordapp.net/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
                .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                .setDescription(`Data Deleted succesfully!`)
                
                
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp();
                message.channel.send({ embeds: [embed] });
              })

        }else if( response == 'no' || response == 'No' || response == 'NO' ){
                
            message.reply('Data recovered 😒!')
        }else {

            message.reply('Invalid Reply -_-')
        }

       
   }
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
    name: "deletetodolist",
    Description: 'Command',
}