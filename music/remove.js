const disTube = require('distube');

module.exports = {
    name: 'remove',
    Description: 'this is a music command!',
    async execute(client, message, args, Discord) {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);
        if (!args[0] || args[0] == 1) {
             if(!args[0])
{            message.reply("Mention song number to remove Eg: p!remove 4")}
            else { message.reply("Song is currently playing can't be removed") }
            return;
        }
        if (!queue) {
            message.reply('No Song in Queue !')
        } else if (queue.songs.length < args[0]) {
            message.reply('The queue doesnt have that song ! -_-')

        } else if (queue) {

            var valuedelete = args[0] - 1;
            var songtodelete = queue.songs[valuedelete];
            delete queue.songs[songtodelete];


            const embed9 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`Removed Song Number : ${args[0]} `)


            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        message.channel.send({ embeds: [embed9] });
        };

    }
}