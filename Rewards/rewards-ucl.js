module.exports ={
    name: 'rewards-ucl',
    Description: 'Gives info of rewards for Ucl !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#4A68EE')
       .setTitle('Rewards for UCL')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n Winner : 15000 **Server score**'+
           '\n Runner Up: 10000 **Server score**'+
           '\n Semifinalists: 5000 **Server Score**'+
           '\n Quaterfinalist: 3000 **Server Score**'+
           '\n\n  ** The Winner and Runner Up and Semifinalists get access to Freak cup **' }  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/770908796951330816/the_16_contenders_heading_for_monday_s_draw201.png');
           
           
           message.channel.send(newEmbed);

       }
    }