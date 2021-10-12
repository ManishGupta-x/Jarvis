const { ButtonInteraction } = require("discord.js");
const fs = require("fs");
const mongoose = require('mongoose');
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
var x = 0;



const Data = require('../../models/data');
const usedCommand = new Set();


const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js');
module.exports.run = async (client, message, args, Discord) => {
    if (usedCommand.has(message.author.id)) {

        message.channel.send('https://tenor.com/view/slow-down-a-little-bit-anthony-mennella-culter35-slow-down-dont-rush-gif-17969625')
        message.reply('The command has a Cooldown of 30 mins')
    }
    else {
        const channel = '885897626753593364';

        let member = message.member
        let membertarget = message.guild.members.cache.get(member.id);
        const newEmbed = new Discord.MessageEmbed()

            .setAuthor('Freak Gamer')
            .setColor('00ff74')
            .setThumbnail('https://cdn.discordapp.com/attachments/885897626753593364/897535348777832448/bpbRkXKgJqnyGKDbe8t9z5.png')
            .setTitle(`Someone is Challenging `)
            .setDescription(`\n <@${membertarget.id}> is Challenging For friendly ! React Below on 🤝 to Accept his Challenge! Get <@${membertarget.id}> Id by reacting to 👨‍💻`)
            .setFooter(' Type p!fping If you dont want pings! ')
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('Accept')
                    .setLabel('🏃‍♂️ Accept Challenge')
                    .setStyle('DANGER'),

                new MessageButton()
                    .setCustomId('id')
                    .setLabel('👨‍💻 Get Challenger Id')
                    .setStyle('SUCCESS'),


            );

        if (message.channel.id == channel) {

            message.channel.send({ embeds: [newEmbed], components: [row] })

            const filter = (interaction) => interaction.isButton() && interaction.user.id !== message.author.id && interaction.customId === 'Accept' || interaction.customId === 'id';
            const collector = message.channel.createMessageComponentCollector({ filter, time: 9000000 });

            client.on('interactionCreate', async interaction => {

                collector.on('collect', async collected => {


                    if (collected.customId === 'Accept') {


                        await message.channel.send({ content: `<@${interaction.user.id}> Accepted the challenge <@${message.author.id}>` })
                    }
                    else if (collected.customId === 'id') {


                        Data.findOne({
                            userID: message.author.id
                        }, async (err, data) => {
                            if (err) console.log(err);
                            if (!data) {
                                let msg1 = await message.reply(` No Id in record for <@${message.author.id}>`)

                            } else {
                                let msg2 = await message.channel.send(`${client.users.cache.get(message.author.id).username}'s Id ${data.Konami}`);

                            }

                        });

                    }
                 
                })




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

module.exports.config = {
    name: "friendly",
    aliases: [],
    Description: 'Command',
}








// if (reaction.emoji.name === hand) {

// }else if (reaction.emoji.name === idkonami){

// }