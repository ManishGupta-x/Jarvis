module.exports ={
    name: 'rewards-battleroyal',
    Description: 'Gives info of rewards for battle royal!',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#F5F900')
       .setTitle('Rewards for Battle royal')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n #1 30000 **Server score**'+
           '\n #2 20000 **Server score**'+
           '\n #3 10000 **Server Score**'+
           '\n Rest all Players Will get 3000 Server Score'+
           '\n\n  ** Top Players(can differ 1-3 ,1-4,1-5) From The League Will Qualify For Freak Cup**' }  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/839845555797491732/pes21_10.png');
           
           
           message.channel.send({embeds : [newEmbed]});

       }
    }