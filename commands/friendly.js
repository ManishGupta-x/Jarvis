

module.exports ={
    name: 'friendly',
    Description: 'this is a  Friendly  command!',
    async  execute(message,args, Discord,client){
        const channel = '650289693543628812';
        const hand = '🤝';
        let member = message.member
        let membertarget = message.guild.members.cache.get(member.id);
        const newEmbed = new Discord.MessageEmbed()
       .setColor('00ff74')
       .setTitle(`${membertarget} is Challenging For friendly ! React Below to Accept his Challenge!`)
       .setDescription('\n Type  `join-role @..  If you dont want to play friendlies or Hide channel')
        
        
        message.channel.send('@here') 
        let msg = await message.channel.send(newEmbed)
        
        
        await msg.react('🤝')


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === hand) {
                    await reaction.message.guild.members.cache.get(user.id);
                    message.reply(`<@${user.id}> Accepeted Your Challenge`);
                }
                } else {
                return;
            }
 
        });
    }  
}