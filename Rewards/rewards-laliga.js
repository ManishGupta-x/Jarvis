module.exports ={
    name: 'rewards-laliga',
    Description: 'Gives info of rewards for laliga !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#F5F900')
       .setTitle('Rewards for La Liga ')
       .setThumbnail('https://i.imgur.com/yBNrda7.gif')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n #1 50000 **Server score**'+
           '\n #2 30000 **Server score**'+
           '\n #3 15000 **Server Score**'+
           '\n Rest all Players Will get 5000 Server Score'+
           '\n\n  ** Top Players(can differ 1-3 ,1-4,1-5) From The League Will Qualify For Freak Cup**' }  
           
           
           )
           .setImage('https://i.imgur.com/xeZ36Cm.gif');
           
           
           message.channel.send(newEmbed);

       }
    }