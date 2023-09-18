const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    

    const channelid = "635852673064632335";
    const channel = client.channels.cache.get(channelid);
    channel.send("hello anshit ");
}

module.exports.config = {
    name: "say",
    aliases: ["s"],
    Description: 'Command',
}