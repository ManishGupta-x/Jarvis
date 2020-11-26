module.exports ={
    name: 'poll',
    Description: 'this is a poll command!',
    execute(message,args, Discord){
        if(!args[1]){
      
            message.channel.send('What are you expecting in poll ?');
            break;
          }
           
          let msgArgs = args.slice(1).join(" ");
            message.channel.send(msgArgs).then(MessageReaction => {
            MessageReaction.react("🅰️");
            MessageReaction.react("🅱️");
            MessageReaction.react("🤝");
           
           });
      


    }  
}










