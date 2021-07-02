module.exports ={
    name: 'rewards-premleague',
    Description: 'Gives info of rewards for premier league !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#9454F7')
       .setTitle('Rewards for Premier League ')
       .setThumbanail('https://i.imgur.com/NIAjQ1T.com')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n #1 50000 **Server score**'+
           '\n #2 30000 **Server score**'+
           '\n #3 15000 **Server Score**'+
           '\n Rest all Players Will get 5000 Server Score'+
           '\n\n  ** Top Players(can differ 1-3 ,1-4,1-5) From The League Will Qualify For Freak Cup**' }  
           
           
           )
           .setImage('https://i.imgur.com/29rBiEu.gif');
           
           
           message.channel.send(newEmbed);

       }
    }