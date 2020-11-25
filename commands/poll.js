const { MessageReaction } = require("discord.js");

module.exports ={
    name: 'poll',
    Description: 'Poll Command!',
    execute(message,args, Discord){
     
      if(!args[0]){
      
         message.channel.send('What are you expecting in poll ?');
         return;
       }
       
       let msgArgs = args.slice(0).join(" ");
        message.channel.send(msgArgs).then(MessageReaction => {
        MessageReaction.react("🅰️");
        MessageReaction.react("🅱️");
        MessageReaction.react("🤝");
       })
       
       
       
       
    }  
}