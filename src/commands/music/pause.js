
const disTube = require('distube');

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);

          
        if(queue) {

            if(queue.paused){

                message.reply("Player already paused resume it with resume command");
                return;
            }
            client.distube.pause(message)
            const embed = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882269936716763136/thumb-pause-neon-icon-4k-purple-background-neon-symbols-pause.png')
            .setAuthor(
				"Jarvis",
				"https://cdn.discordapp.com/avatars/778267007439077396/b3f9ab1c6342de220b333fcbdff93ec5.png?size=256"
			)
            .setDescription(`Paused the player! `)
          
            
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
            message.channel.send({embeds: [embed]});
            
        } else if (!queue) {
            return
        };
}

module.exports.config = {
    name: "pause",
    aliases: [],
    Description: 'Command',
}