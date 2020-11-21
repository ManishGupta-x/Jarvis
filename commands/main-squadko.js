module.exports ={
    name: 'main-squadko',
    Description: 'Gives Main Squad KO Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#00fffa')
       .setTitle('Main Squad KO')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rule 1" , value: ' You can use any team ,even your main team.*'},
           {name: "Rule 2" , value: ' You have to Turn on Extra time and penalties for every match'},
           {name: "Rule 3" , value: ' In case you forget to set ET AND PEN **EXIT THE GAME IMMEDIATELY** ELSE YOU have to play the whole Match again '}  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/778985497627197500/20200901ad3119d01bddf7ef9_th_1024x0.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }