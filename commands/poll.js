const {MessageEmbed} = require('discord.js')
module.exports ={
    name: 'poll',
    Description: 'this is a  Poll command!',
    execute(message,args, Discord){
     const channel = message.mentions.channels.first()|| message.guild.channels.cache.get(args[0])
     if(!channel){


        return message.channel.send('You did not mention / give the id of the channel you wanted to create the poll in!')
     }
     
           let question =  message.content.slice(bot.prefix.lenth+5+channel.id.length+3)
           if(!question){

               return message.channel.send('You didnt specified a question for the poll')
           }
            const Embed = new MessageEmbed()
            .setTitle(" New Poll")
            .setDescription(question)
            .setFooter(`${message.author.username} Created this Poll`) 
            let msg = awaitbot.channels.cache.get(channel.id).send(Embed)
            await msg.react('🅰️') 
            await msg.react('🅱️')

     }  


    }  
