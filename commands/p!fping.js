module.exports ={
    name: 'fping',
    Description: 'this is a role command!',
    execute(message,args, Discord){
        
       let member = message.member;
       let memberTarget = message.guild.members.cache.get(member.id);
       let Role = message.guild.roles.cache.find(role => role.name === '..'); 
       if(message.member.roles.cache.has('791919963316682752')){
        memberTarget.roles.remove(Role.id);
          }
       else{

        memberTarget.roles.add(Role.id);
        message.reply('You Joined Friendlies Channel  :)!')
    }
        }
    }