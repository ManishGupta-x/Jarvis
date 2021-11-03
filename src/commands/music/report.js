
const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    channelID = '876076486463987752';
    let issue = args.join(" ");
    if(!issue){

        message.reply('Your report has been filed , the developer will look into asap')
    }
client.channels.cache.get(`${channelID}`).send(`Guild Id : ${message.guild.id} Requesting for restart and getting issue : ${issue}`)
    message.channel.send({content :`Request sent successfully!`})
}

module.exports.config = {
    name: "report",
    aliases: [],
    Description: 'Command',
}