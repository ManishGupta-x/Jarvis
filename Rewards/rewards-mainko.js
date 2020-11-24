module.exports ={
    name: 'rewards-mainko',
    Description: 'Gives info of rewards for Main Squad Ko !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#54EDF7')
       .setTitle('Rewards for Main Squad KO ')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n Winner : 15000 **Server score**'+
           '\n Runner Up 10000 **Server score**'+
           '\n Semifinalists 5000 **Server Score**'+
           '\n Quaterfinalist 3000 **Server Score**'+
           '\n\n  ** The Winner and Runner Up get access to Freak cup **' }  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/778985497627197500/20200901ad3119d01bddf7ef9_th_1024x0.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }