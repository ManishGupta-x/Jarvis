module.exports ={
    name: 'main-squadko',
    Description: 'Gives Main Squad KO Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#00fffa')
       .setTitle('Main Squad KO')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .addFields(
        
           {name: "Rule 1" , value: ' You can use any team ,even your main team.*'},
           {name: "Rule 2" , value: ' You have to Turn on Extra time and penalties for every match and time : 6 mins default'},
           {name: "Rule 3" , value: ' In case you forget to set ET AND PEN **EXIT THE GAME IMMEDIATELY** ELSE YOU have to play the whole Match again '}  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/778985497627197500/20200901ad3119d01bddf7ef9_th_1024x0.jpg');
           
           
           message.channel.send({embeds : newEmbed});

       }
    }