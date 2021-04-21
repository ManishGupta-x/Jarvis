const Discord = require("discord.js");
const source = require('../index');

module.exports ={
    name: 'bootup',
    Description: 'this is a bootup command!',
    execute(message,args, Discord){

  if (!args[0]) return message.reply(`Specify to activate or deactivate Jarvis`);
  if (args[1]) return message.reply(`Can't activate Check command again [Too many Arguments!]`);
  switch (args[0]) 
  {
    default: 
    {
      message.reply('invalid argument specified.')
      break;
    }
    case "activate":
      {   
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
        .then(response => response.json())
        .then(data => {
            message.channel.send(data.response);
        })
        .catch(() => {
            message.channel.send("Hmmmmmmmmmm")
        })

       
      }
    case "deactivate":
      {
       
        message.reply(`deactivated Jarvis `);
        
         
        break;
      }
  }
 
}
}
 
