const { MessageReaction } = require("discord.js");

module.exports ={
    name: 'poll',
    Description: 'Poll Command!',
    execute(message,args, Discord){
     
      if(!args[1]){
      
         message.channel.send('What are you expecting in poll ? such a dumb');
         return;
       }
       
       let msgArgs = args.slice(1).join(" ");
        message.channel.send(msgArgs).then(MessageReaction => {
        MessageReaction.react("🅰️");
        MessageReaction.react("🅱️");
        MessageReaction.react("🤝");
       })
       
       
       
       
    }  
}