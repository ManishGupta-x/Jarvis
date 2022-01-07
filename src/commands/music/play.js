const Discord = require("discord.js")
const disTube = require('distube');
const errChannel = "918106499203616788";
module.exports.run = async (client, message, args,Discord) => {
    if (!args[0]) {
        message.channel.send({ content: 'Please Mention song!' })
        return;

    }
    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
    const music = args.join(" ");

    client.distube.play(message, music)
    .catch(error => {

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Error Boss")

        .setAuthor(
            "Jarvis",
            "https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp"
        )
        .setDescription("\n\n**ERROR**\n\n ```" + error  + "```")

        .setFooter(`Anti Crash System`, client.user.displayAvatarURL())
        .setTimestamp();
         client.channels.cache.get(errChannel).send({ embeds: [embed] });
    });

}

module.exports.config = {
    name: "play",
    aliases: ["p"],
    Description: 'Command',
}