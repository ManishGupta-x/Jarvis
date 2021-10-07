

const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
const Discord = require('discord.js');



const Data = require('./src/commands/id/data.js');

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    const user = message.mentions.users.first() || message.author
    if(args[0]){ console.log(message.mentions.users.first())}
     Data.findOne({
         userID : user.id 
     }, (err, data) => {
         if (err) console.log(err);
         if (!data) { message.reply(' No Id in record type p!setid')}else{
             
    return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.Konami}`);}
 })
}

module.exports.config = {
    name: "id",
    Description: 'Command',
}
