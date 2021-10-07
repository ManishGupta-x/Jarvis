const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    
    message.channel.send({content :'https://www.konami.com/wepes/mobile/en/'});

}

module.exports.config = {
    name: "official",
    Description: 'Command',
}