const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args, Discord) => {

    const messagetobesent = args.join(" ");

    client.users.fetch('1077185440437784576', false).then((user) => {
        console.log(user.send.toString());
        user.send(messagetobesent);
       
    });

}

module.exports.config = {
    name: "dm",
    aliases: [],
    Description: 'Command',
}