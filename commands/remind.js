const ms = require('ms') 

module.exports ={
    name: 'remind',
    Description: 'Reminder Command',
    execute(client,message,args, Discord){
     
      let reminder = args.slice(1).join(' ');
      let time = args[0];

      const noDurationEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('ERROR')
      .setDescription('Please mention Duration Of The Reminder after p!remind')
      .setFooter(client.user.username , client.user.displayAvatarURL() )
      .setTimestamp();

      if(!time) return message.channel.send(noDurationEmbed);

      const noReminderEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('ERROR')
      .setDescription('PLease state the task syntax : p!remind 10s Task')
      .setFooter(client.user.username , client.user.displayAvatarURL() )
      .setTimestamp();

      if(!reminder) return message.channel.send(noReminderEmbed);

      const ReminderEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('Reminder set!', message.author.displayAvatarURL())
      
      .setDescription(`Succesfully set ${message.author.tag}'s reminder !`)
      .addField(`Remind In`, `${time}`)
      .addField(`Reminder`, `${reminder}`)
      .setFooter(client.user.username , client.user.displayAvatarURL() )
      .setTimestamp();

      message.channel.send(ReminderEmbed);

      setTimeout(async function () {
          message.channel.send(`<@${message.author.id}> Reminder!`);

      const ReminderAlertEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('Reminder here !', message.author.displayAvatarURL())
      .addField(`Reminder`, `${reminder}`)
      .setFooter(client.user.username , client.user.displayAvatarURL() )
      .setTimestamp();

      message.channel.send(ReminderAlertEmbed);

      }, ms(time));

    }  
}