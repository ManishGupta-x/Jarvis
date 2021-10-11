const { ButtonInteraction } = require("discord.js");
const fs = require("fs");
const mongoose = require('mongoose');
const config =  require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
var x = 0;



const Data = require('../../models/data');
const usedCommand = new Set();
module.exports = {
    name: 'friendly',
    Description: 'this is a  Friendly  command!',
    async execute(message, args, Discord, client) {

        if (usedCommand.has(message.author.id)) {

            message.channel.send('https://tenor.com/view/slow-down-a-little-bit-anthony-mennella-culter35-slow-down-dont-rush-gif-17969625')
            message.reply('The command has a Cooldown of 30 mins')
        }
        else {
            const channel = '650289693543628812';
            const hand = '🤝';
            const idkonami = '👨‍💻';
            let member = message.member
            let membertarget = message.guild.members.cache.get(member.id);
            const newEmbed = new Discord.MessageEmbed()

                .setAuthor('Freak Gamer')
                .setColor('00ff74')
                .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/791728647005536296/1601319291_559_Soccer-Icons-Messi-and-Ronaldo-Make-History-in-the-25th.png')
                .setTitle(`Someone is Challenging `)
                .setDescription(`\n <@${membertarget.id}> is Challenging For friendly ! React Below on 🤝 to Accept his Challenge! Get <@${membertarget.id}> Id by reacting to 👨‍💻`)
                .setFooter(' Type p!fping If you dont want pings! ')
                const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('Accept')
                        .setLabel('🏃‍♂️ Accept Chal;enge')
                        .setStyle('DANGER'),
    
                    new MessageButton()
                        .setCustomId('id')
                        .setLabel('👨‍💻 Get Challenger Id')
                        .setStyle('SUCCESS'),
                  
                   
                );

            if (message.channel.id == channel) {

                        
                  
                const filter = (interaction) => interaction.isButton() && interaction.user.id != message.author.id && interaction.customId === 'Accept'  || interaction.customId === 'id' ;
                const collector = message.channel.createMessageComponentCollector({ filter, time: 9000000 });
                

                collector.on('collect', async collected => {
 

                    if (collected.customId === 'Accept'){
                    
                    const  user = interaction.user.id;
                    await collected.channel.send({ contents: `${user.id}`})
                    }
                    else if(collected.customId == 'id'){

                        
                    }

                })
               
            }
            else {

                message.reply('You are in the wrong Channel bruh')
            }
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 1800000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
        }
    }
}






// if (reaction.emoji.name === hand) {

// }else if (reaction.emoji.name === idkonami){

// }