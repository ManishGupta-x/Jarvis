const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
var x =0;



const Data = require('../id/data.js');
const usedCommand = new Set();
module.exports ={
    name: 'friendly',
    Description: 'this is a  Friendly  command!',
    async  execute(message,args, Discord,client){
 
        if (usedCommand.has(message.author.id )) {
            
            message.channel.send('https://tenor.com/view/slow-down-a-little-bit-anthony-mennella-culter35-slow-down-dont-rush-gif-17969625')
            message.reply('The command has a Cooldown of 30 mins') 
        }
        else{
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
       .setDescription(`\n <@${membertarget.id}> is Challenging For friendly ! React Below on 🤝 to Accept his Challenge! Get <@${membertarget.id}> Id by reacting to 👨‍💻` )
       .setFooter(' Type p!fping If you dont want pings! ')
        
       if(message.channel.id == channel)
       {
       
         message.channel.send('@here') 

        let msg = await message.channel.send(newEmbed)
        
        
        await msg.react('🤝')
        await msg.react('👨‍💻')
        
        

       
        
        client.on('messageReactionAdd', async (reaction, user) => {
            
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if(x<4){
                if (reaction.emoji.name === hand) {
                    await reaction.message.guild.members.cache.get(user.id);
                    if(user.id == membertarget.id)
                    {
                        let msg = await message.reply('Challenging Yourself?  -_-')
                         await msg.delete({timeout: 4000});
                    }
                    else{
                    message.reply(`<@${user.id}> Accepeted Your Challenge`);
                      x=x+1;
                    return;
                }
            }else if (reaction.emoji.name === idkonami){
                await reaction.message.guild.members.cache.get(user.id);
                Data.findOne({
                    userID : membertarget.id
                }, (err, data) => { 
                    if (err) console.log(err);
                    if (!data) { message.reply(` No Id in record for <@${membertarget.id}>`)}else{
                return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.Konami}`);}
            })
            }
        }     

                } else {
                return;
                                }
                            
 
        });
    }
    else 
    {
        
        message.reply('You are in the wrong Channle bruh')
    }
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 1800000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
    }  
}