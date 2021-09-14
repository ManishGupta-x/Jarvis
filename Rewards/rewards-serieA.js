module.exports ={
    name: 'rewards-seriea',
    Description: 'Gives info of rewards for laliga !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#F5F900')
       .setTitle('Rewards for Serie A')
       .setThumbnail('https://i.imgur.com/IOc6tij.gif')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n #1 30000 **Server score**'+
           '\n #2 20000 **Server score**'+
           '\n #3 10000 **Server Score**'+
           '\n Rest all Players Will get 3000 Server Score'+
           '\n\n  ** Top Players(can differ 1-3 ,1-4,1-5) From The League Will Qualify For Freak Cup**' }  
           
           
           )
           .setImage('https://i.imgur.com/xcGZtTw.gif');
           
           
           message.channel.send({embeds :newEmbed});

       }
    }