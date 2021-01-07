module.exports ={
    name: 'snipe',
    Description: 'this is a role command!',
    execute(client,message,args, Discord){
     
        const msg = client.snipes.get(message.channel.id)
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author, msg.member.user.displayAvatarURL())
        .setDescription(msg.content)
        .setFooter('Get Sniped lol')
        .setTimestamp();
        message.channel.send(embed);


    }  
}