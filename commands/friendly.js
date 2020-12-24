

module.exports ={
    name: 'friendly',
    Description: 'this is a  Friendly  command!',
    async  execute(message,args, Discord,client){
        const channel = '650289693543628812';
        const hand = '🤝';
        
        let member = message.member
            let membertarget = message.guild.members.cache.get(member.id);
           
        let msg = await message.channel.send(`@here <@${membertarget.id}> is Challenging For friendly ! React Below to Accept his Challenge!`)
        await msg.react('🤝')


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === hand) {
                    await reaction.message.guild.members.cache.get(user.id).message.reply(`<@${user.id} Accepeted Your Challenge`)
                }
                } else {
                return;
            }
 
        });
    }  
}