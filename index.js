const Discord = require('discord.js');

const ClientManager = require(`./src/ClientManager`);
const client = new ClientManager({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS']
});
const fetch = require("node-fetch").default;
const config = require('./settings.json')
var cron = require('node-cron');
let shell = require("shelljs");
var x=1;
while(x--){
cron.schedule('* * * January,September Wednesday ', () => {
  const ch = "730714810614022228";
  const embed = new Discord.MessageEmbed()
  .setColor('#0080be')
  .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/930326133885505566/romatic-birthday-wish-love.jpg')
  .setAuthor({name: 'K3U', iconURL: 'https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png'})
  .setDescription(`
  A Birthday wish for my lover On your very special day 😘 ,
  It’s my hope that everything, Good comes your way 🥰. 
  
  To my one true love on your special day ❤️ ,
  I am lovingly sending all my Kisses Your Way ! 😘😘 
  
  💝💝 Happy Birthday! 💝💝 `)
  .setImage('https://imgur.com/gkox8FM.gif')
  
  .setFooter({ text: "Happy Birthday Janeman 🥰❤️", iconURL: 'https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png' })
  .setTimestamp();
  
    client.channels.cache.get(ch).send({ embeds: [embed] });
  
  
  
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
  });
}

client.setup();