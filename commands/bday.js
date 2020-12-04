const Discord = require("discord.js");
const source = require('../index');
module.exports ={
    name: 'bday',
    Description: 'this is a bday command!',
    execute(message,args, Discord){

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


        const Embed = new Discord.MessageEmbed()
        .setColor('#00f1ff')
        .setTitle("Happy Birthday Tousif ( The Freak Gamer) 🎉")
        .setDescription('You \'re older today than yesterday but younger than tomorrow, Happy birthday Freak Gamer Bro ! ')
        .setImage('https://cdn.discordapp.com/attachments/742958516322566244/784328077873250334/PicsArt_12-04-01.29.34.jpg')
        .setFooter(`May God Bless You Bro! 😇`)

        if (!source.timedCheck){
          source.timedCheck = setInterval(() =>{
            /* Function for set interval */
            
            message.channel.send(Embed);
            source.val++;



            valcheck();
          }, 1000);
          message.reply('command started!');
          message.delete({timeout: 2000});
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
  if (source.val === 1){
    clearInterval(source.timedCheck);
    source.timedCheck = undefined;
    return message.channel.send(`Enjoy Your Day Bro!!`);
  }
};
}
}
 
