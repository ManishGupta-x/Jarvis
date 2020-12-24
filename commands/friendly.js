
const usedCommand = new Set();
module.exports ={
    name: 'friendly',
    Description: 'this is a  Friendly  command!',
    async  execute(message,args, Discord,client){

        if (usedCommand.has(message.author.id)) {
            
            message.channel.send('https://tenor.com/view/slow-down-a-little-bit-anthony-mennella-culter35-slow-down-dont-rush-gif-17969625')
            message.reply('The command has a Cooldown of 30 mins') 
        }
        else{
        const channel = '650289693543628812';
        const hand = '🤝';
        let member = message.member
        let membertarget = message.guild.members.cache.get(member.id);
        const newEmbed = new Discord.MessageEmbed()
       .setColor('00ff74')
       .setTitle(`Someone is Challenging `)
       .setDescription(`\n <@${membertarget.id}> is Challenging For friendly ! React Below to Accept his Challenge!` )
        
        
        message.channel.send('@here') 
        let msg = await message.channel.send(newEmbed)
        
        
        await msg.react('🤝')


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === hand && !membertarget) {
                    await reaction.message.guild.members.cache.get(user.id);
                    message.reply(`<@${user.id}> Accepeted Your Challenge`);
                }
                 else{

                    message.reply('Challenging Yourself ?')
                 }

                } else {
                return;
                                }
 
        });usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
    }  
}