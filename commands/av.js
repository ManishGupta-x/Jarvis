
module.exports ={
    name: 'av',
    Description: 'this is a av command!',
    execute(client,message,args, Discord){
     
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;
        const userEmbed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setColor('RANDOM')
        .setImage(member.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(userEmbed);
        

    }  
}