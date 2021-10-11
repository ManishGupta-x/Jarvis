const fs = require("fs");
const mongoose = require('mongoose');
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const Discord = require('discord.js');

const Data = require('../../models/data.js');

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
    aliases: [],
    Description: 'Command',
}