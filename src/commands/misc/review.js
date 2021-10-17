
const Discord = require("discord.js")
const prefixModel = require("../../models/prefix")
const mongoose = require("mongoose");
const config = require('../../../settings.json');
const { client } = require("discord.js");
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports.run = async (client, message, args,Discord) => {
    channelID = '876076486463987752';
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    if(!args[0] ){
        if(data){
        message.reply(`Specify Your review pls \`${data.Prefix}review [type your review]\``)
        }
        else {
            message.reply(`Specify Your review pls \`p!review [type your review]\``)
        }
        return;
    }    let issue = args.join(" ");
client.channels.cache.get(`${channelID}`).send(`${client.users.cache.get(message.author.id).username}'s Review : ${issue}'`)
    message.channel.send({content :`Review sent successfully!`})
}

module.exports.config = {
    name: "review",
    aliases: [],
    Description: 'Command',
}