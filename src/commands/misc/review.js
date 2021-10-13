
const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    channelID = '876076486463987752';

    if(!args[0]){
        message.reply('Specify Your review pls \`p!review [type your review]\`')
    }    let issue = args.join(" ");
client.channels.cache.get(`${channelID}`).send(`${(message.author.id).username}'s Review : ${issue}'`)
    message.channel.send({content :`Review sent successfully!`})
}

module.exports.config = {
    name: "review",
    aliases: [],
    Description: 'Command',
}