const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});
module.exports ={
    name: 'ban',
    Description: 'this is a  Ping command!',
    execute(message,args, Discord){
    if(message.author.bot || message.channel.type === "dm") return;


    //args system that is very required!!!!
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

 

    {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`${toBan} has been banned from the server!\nReason: ${reason}`)
    }

  
    
}}