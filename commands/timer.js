const Discord = require("discord.js");
const source = require('../index');
module.exports ={
    name: 'timer',
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
        .setTitle("Happy New year Guys 🎉")
        .setDescription(`I hope that 2021 multiplies your joys and divides your sorrows. Happy New Year 2021!`)
        .setImage('https://cdn.discordapp.com/attachments/610950416498425886/794201520928981012/merry-christmas-happy-new-year-luxury-sports-greeting-card-soccer-football-ball-as-black-background-.png')
        .setFooter(`May God Bless You Bro! 😇`)

        if (!source.timedCheck){
          source.timedCheck = setInterval(() =>{
            /* Function for set interval */
            
            message.channel.send(Embed);
            source.val++;



            valcheck();
          }, 16200000 );
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
    return message.channel.send(`Fcuk 2020 :)!`);
  }
};
}
}
 
