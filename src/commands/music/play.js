const Discord = require("discord.js")
const disTube = require('distube');
module.exports.run = async (client, message, args,Discord) => {
    if (!args[0]) {
        message.channel.send({ content: 'Please Mention song!' })
        return;

    }
    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
    const music = args.join(" ");

    client.distube.play(message, music);
    // .catch(error => {

    //     const embed9 = new Discord.MessageEmbed()
    //         .setColor('RANDOM')
    //         .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
    //         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
    //         .setDescription(`Getting some issues try again `)


    //         .setFooter(`Report Manish<3 if you get this error`, client.user.displayAvatarURL())
    //         .setTimestamp();
    //     message.channel.send({ embeds: [embed9] });
    // });

}

module.exports.config = {
    name: "play",
    aliases: ["p"],
    Description: 'Command',
}