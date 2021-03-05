// module.exports ={
//     name: 'info',
//     Description: 'this is a  Ping command!',
//     execute(client,message,args, Discord){
     
//         let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;



//         if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
//         if (member.presence.status === 'online') member.presence.status = 'Online';
//         if (member.presence.status === 'idle') member.presence.status = 'Idle';
//         if (member.presence.status === 'offline') member.presence.status = 'offline';

//         let x = Date.now() - member.createdAt;
//         let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
//         const joined = Math.floor(y / 86400000);

//         const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
//         let status = member.presence.status;

//         const userEmbed = new Discord.MessageEmbed()
//             .setAuthor(member.user.tag, member.user.displayAvatarURL())
//             .setTimestamp()
//             .setColor('#f7331a')
//             .setImage(member.user.displayAvatarURL())
//             .addField("Member ID", member.id)

//             .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
//             .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
//             .addField("Status", status)
//             .addField('Roles', `<@&${member._roles.join('> <@&')}>`)

//         message.channel.send(userEmbed);


//     }  
// }