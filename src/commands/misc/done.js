const Discord = require("discord.js")

const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args,Discord) => {
    
if(!args[0] || isNaN(args[0])){

    message.reply('Mention the Task Number you have done Eg : p!done 1');
    return;
}

    let data = await list.findOne({

        UserID: message.author.id
    });

    if (data) {
             
        let state1 = '✔️';
        const num = args[0] - 1;
        let savetask = data.list[num].Task;
        
        data.list.splice(num,1);
        data.list.unshift({
            User: message.author.id,
            Task: savetask,
            status : state1 
        });
        data.save();

        const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/895927613292421140/6-things-to-do-list.png')
.setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
.setDescription(`The Task Has Been Marked Done ! ✔️`)


.setFooter(client.user.username, client.user.displayAvatarURL())
.setTimestamp();
message.channel.send({ embeds: [embed] });
       
    }else if (!data) {
      
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
    name: "done",
    Description: 'Command',
}