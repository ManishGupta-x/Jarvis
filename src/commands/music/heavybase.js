const disTube = require('distube');

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
      
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await client.distube.getQueue(message);
    if(queue) { let filter = client.distube.setFilter(message,'heavybass');
    const embed = new Discord.MessageEmbed()
    .setColor('#1BE124')
    .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888052510416330762/wp7806858.png')
    .setAuthor('Jarvis' , 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
    .setDescription("Filter : " +  (filter.join("+ ")  || "Off"))
     .setImage('https://cdn.discordapp.com/attachments/730714810614022228/888052384306184212/wp7806840.png')
    
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp();
    message.channel.send({embeds: [embed]});

}else {
    message.reply('No Song playing')
}


}

module.exports.config = {
    name: "heavybass",
    aliases: ['hb'],
    Description: 'Command',
}