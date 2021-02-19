module.exports ={
    name: 'sg',
    Description: 'Gives sg Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('Soccer Guru')
       .setAuthor('Freak Gamer')
       .setDescription(`
       General commands for the bot-

       1) type "+claim" every 1 hour to get a random player for free.

       2) type "+vote" every 12 hrs to vote for bot and get credits (used to buy players of your choice) and random players. It is advised to develop a voting streal to get more credits and players.
      
       3) type "+11" to see ur starting 11.
      
       4) type "+club" to see all the players u own.
      
       5)Type "+buy (player name) " to buy a player of u have enough credits.
       
       6)type "+daily" every 24 hrs to get some credits. It is recommended to maintain a streak in this too
       STAY PATIENT, and u will get op players  soon`)
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/812288002943877130/Best-Soccer-Live-Streaming-Services-and-Websites.png');
           
           
           message.channel.send(newEmbed);

       }
    }







































