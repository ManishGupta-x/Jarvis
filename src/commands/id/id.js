

const fs = require("fs");
const mongoose = require('mongoose');
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const Discord = require('discord.js');



const Data = require('../../models/data.js');




module.exports.run = async (client, message, args,Discord) => {
    const user = message.mentions.members.first() || message.author
   
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
    aliases: [],
    Description: 'Command',
}
