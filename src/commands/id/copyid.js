const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
const Discord = require('discord.js');

const Data = require('./src/commands/id/data.js');

module.exports.run = async (client, message, args, Discord) => {
    if (!args[0]) {

        user = message.author;
    }
    else {
        user = message.mentions.users.first() || client.members.cache.get(args[0])
    }
    Data.findOne({
        userID: user.id
    }, (err, data) => {
        if (err) console.log(err);
        if (!data) { message.reply(' No Id in record type p!setid') } else {
            return message.channel.send(`${data.Konami}`);
        }
    })
}

module.exports.config = {
    name: "copyid",
    Description: 'Command',
}