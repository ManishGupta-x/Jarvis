module.exports ={
    name: 'rewards-premleague',
    Description: 'Gives info of rewards for premier league !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#9454F7')
       .setTitle('Rewards for Premier League ')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n #1 15000 **Server score**'+
           '\n #2 10000 **Server score**'+
           '\n #3 7000 **Server Score**'+
           '\n Rest all Players Will get 2000 Server Score'+
           '\n\n  ** Top Players(can differ 1-3 ,1-4,1-5) From The League Will Qualify For Freak Cup**' }  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/780778572171313233/full_38890.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }