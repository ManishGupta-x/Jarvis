module.exports ={
    name: 'ban',
    Description: 'this is a ban command!',
    execute(message,args, Discord){

if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send(" You dont have enough permissions.");
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            
            message.channel.send (`${bannedMember} Banned`)
        }
            catch(err) {
            console.log(err);
        }
    }
    }
}}
