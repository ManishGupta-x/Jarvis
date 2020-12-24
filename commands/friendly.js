const usedCommand = new Set();

module.exports ={
    name: 'friendly',
    Description: 'this is a  Friendly  command!',
    async  execute(message,args, Discord){
     
        
        if(usedCommand.has(message.author.id)){
            message.reply('https://tenor.com/view/slow-down-a-little-bit-anthony-mennella-culter35-slow-down-dont-rush-gif-17969625')
        } else {
            let member = message.mentions.members.first();
            let msg = await message.channel.send(`@here <@${member.user.id}> is Challenging For friendly ! React Below to Accept his Challenge!`)
            await msg.react('🤝')
            await msg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == '🤝'), { max: 1, time: 1800000 })
            .then(async collected => {
                if (collected.first().emoji.name == '🤝') { return `<@${member.user.id}> <@${user.id}> Accepted Your Challenge !` }
                else return message.channel.send(`Try after Sometime bruh <@${member.user.id}> ,No one accepted :(`);





            }).catch(async () => { return message.channel.send("error") });
            
            usedCommand.add(message.author.id);
            setTimeout(() => {
                usedCommand.delete(message.author.id);
            }, 1800000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
        }
        


    }  
}