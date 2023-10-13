const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {

    if(message.author.id == "550267183503114250"){
        if(!args[0]) return message.channel.send({content :'pls provide channel id'});
        const channelid = args[0];
        const channel = client.channels.cache.get(channelid);
        if (!channel) return message.channel.send({ content: 'pls provide valid channel id' });
        if (!args[1]) return message.channel.send({ content: 'pls provide message' });
        const msg = args.slice(1).join(" ");
        channel.send({ content: msg });
            message.delete();
        }
}

module.exports.config = {
    name: "say",
    aliases: ["s"],
    Description: 'Command',
}