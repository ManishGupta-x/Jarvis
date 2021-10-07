const Discord = require("discord.js");
const fetch = require("node-fetch").default;

module.exports ={
    name: 'bootup',
    Description: 'this is a bootup command!',
    execute(message,args, Discord){

  if (!args[0]) return message.reply(`Specify to activate or deactivate Jarvis`);
  if (args[1]) return message.reply(`Can't activate Check command again [Too many Arguments!]`);
  switch (args[0]) 
  {
    
    case "jarvis":
      { 

       break;
      }
    
  }
 
}
}
 
