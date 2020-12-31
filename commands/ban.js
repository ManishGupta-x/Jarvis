module.exports ={
    name: 'ban',
    Description: 'this is a  Ping command!',
    execute(message,args, Discord){
        module.exports ={
            name: 'ban',
            Description: 'this is a kick command!',
            execute(message,args, Discord){
             
                const user = message.mentions.users.first();
                
                
                if (user) {
        
                    const member = message.guild.member(user);
                    if (member) {
                        member.ban('banned').then(() => {
                            message.reply(`Sucessfully kicked ${user.tag} `);
                        }).catch(err => {
                            message.reply('I can\'t kick that member bruh');
                            console.log(err);
        
        
                        });
                    } else {
                        message.reply("That user isn\'t in this guild")
                    }
                } else {
        
                    message.reply("You need to specify a Person!")
                }
        
        
            }  
        }
    
}}