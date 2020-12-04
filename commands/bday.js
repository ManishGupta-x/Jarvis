const Discord = require("discord.js");
const source = require('../server');
module.exports.run = async (Client, message, args) => {
  if (!args[0]) return message.reply(`Please specify if you are turning the command on or off!`);
  if (args[1]) return message.reply(`Please specify if you are turning the command on or off! [Too many Arguments!]`);
  switch (args[0]) 
  {
    default: 
    {
      message.reply('invalid argument specified.')
      break;
    }
    case "on":
      {
        if (!source.timedCheck){
          source.timedCheck = setInterval(() =>{
            /* Function for set interval */
            console.log("Interval cycle run for " + (source.val++) + " times!");
            valcheck();
          }, 5000);
          message.reply('command started!');
        } else {
          return message.reply(`command already running!`)
        }
        break;
      }
    case "off":
      {
        if (source.timedCheck){
        message.reply(`has turned off command!`);
        clearInterval(source.timedCheck);
        source.timedCheck = undefined;
        } else {
          return message.reply(`command already offline!`)
        }
        break;
      }
  }
 
let valcheck = () => {
  if (source.val > 5){
    clearInterval(source.timedCheck);
    source.timedCheck = undefined;
    return message.channel.send(`command finished as scheduled!`);
  }
};
};
 
module.exports.help = {
  name: "bday",
  usage: "bday <on/off>",
};