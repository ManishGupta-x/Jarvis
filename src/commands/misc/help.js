const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu } = require('discord.js')
module.exports.run = async (client, message, args, Discord) => {



    const row = new Discord.MessageActionRow()
        .addComponents(

            new MessageSelectMenu()
                .setCustomId('help')
                .setPlaceholder('Choose Help Module To View')
                .addOptions([
                    {

                        label: 'Music',
                        value: 'View Music Help Menu',
                        emoji: '🎶'
                    },
                    {

                        label: 'Todo',
                        value: 'View Todo Help Menu',
                        emoji: '✍️'

                    }


                ],
                )
        )
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/794240262972243979/897009795146612782/561283.png')
        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')

        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();



    message.channel.send({ embeds: [embed], components: [row] });
    const filter = (interaction) => interaction.isSelectMenu() && interaction.user.id == message.author.id;
    const collector = message.channel.createMessageComponentCollector({ filter, time: 100000, max: 2 });
    collector.on('collect', async collected => {

        if (collected.values[0]) {

            const commandfile = client.commands.get('music')
            await commandfile.run(client, message, args, Discord)
        } else if (collected.values[1]) {

            const commandfile = client.commands.get('helptodo')
            await commandfile.run(client, message, args, Discord)
        }
        collected.deferUpdate()
    })

}

module.exports.config = {
    name: "help",
    aliases: [],
    Description: 'Command',
}