const ms = require('ms') 

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
  let reminder = args.slice(1).join(' ');
  let time = args[0];

  const noDurationEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('ERROR')
  .setDescription('Please mention Duration Of The Reminder after p!remind')
  .setFooter(client.user.username , client.user.displayAvatarURL() )
  .setTimestamp();

  if(!time) return message.channel.send({embeds :[noDurationEmbed]});

  const noReminderEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('ERROR')
  .setDescription('PLease state the task syntax : p!remind 10s Task')
  .setFooter(client.user.username , client.user.displayAvatarURL() )
  .setTimestamp();

  if(!reminder) return message.channel.send({embeds :[noReminderEmbed]});

  const ReminderEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor('Reminder set!', message.author.displayAvatarURL())
  
  .setDescription(`Succesfully set ${message.author.tag}'s reminder !`)
  .addField(`Remind In`, `${time}`)
  .addField(`Reminder`, `${reminder}`)
  .setFooter(client.user.username , client.user.displayAvatarURL() )
  .setTimestamp();

  message.channel.send({embeds:[ ReminderEmbed]});

  setTimeout(async function () {
      message.channel.send(`<@${message.author.id}> Reminder!`);

  const ReminderAlertEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor('Reminder here !', message.author.displayAvatarURL())
  .addField(`Reminder`, `${reminder}`)
  .setFooter(client.user.username , client.user.displayAvatarURL() )
  .setTimestamp();

  message.channel.send({embeds :[ ReminderAlertEmbed]});

  }, ms(time));
}

module.exports.config = {
    name: "remind",
    Description: 'Command',
}