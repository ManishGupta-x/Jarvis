module.exports ={
    name: 'gn',
    Description: 'this is a role command!',
    execute(message,args, Discord){
     
        const msg = bot.snipes.get(message.channel.id)
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author, msg.member.user.displayAvatarURL())
        .setDescription(msg.content)
        .setFooter('Get Sniped lol')
        .setTimestamp();
        message.channel.send(embed);


    }  
}