
const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
  message.reply('Computing...').then((resultMessage) => {
    const ping = resultMessage.createdTimestamp - message.createdTimestamp

    resultMessage.edit(`Pong! : Latency: \`${ping} ms\`, API Latency: \`${client.ws.ping} ms\``)
  })
}

module.exports.config = {
    name: "ping",
    aliases: [],
    Description: 'This is a Ping command',
}
