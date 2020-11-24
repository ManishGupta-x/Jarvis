module.exports ={
    name: 'rewards-laliga',
    Description: 'Gives info of rewards for laliga !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#F5F900')
       .setTitle('Rewards for La Liga ')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n #1 15000 **Server score**'+
           '\n #2 10000 **Server score**'+
           '\n #3 7000 **Server Score**'+
           '\n Rest all Players Will get 2000 Server Score'+
           '\n\n  ** Top Players(can differ 1-3 ,1-4,1-5) From The League Will Qualify For Freak Cup**' }  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/769813155815358474/skysports-real-madrid-barcelona_5146542.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }