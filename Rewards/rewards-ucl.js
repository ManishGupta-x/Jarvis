module.exports ={
    name: 'rewards-ucl',
    Description: 'Gives info of rewards for Ucl !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#4A68EE')
       .setTitle('Rewards for UCL')
       .setThumbnail('https://i.imgur.com/oGPVyrT.gif')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n Winner : 15000 **Server score**'+
           '\n Runner Up: 10000 **Server score**'+
           '\n Semifinalists: 5000 **Server Score**'+
           '\n Quaterfinalist: 3000 **Server Score**'+
           '\n\n  ** The Winner and Runner Up and Semifinalists get access to Freak cup **' }  
           
           
           )
           .setImage('https://i.imgur.com/c41Il5b.gif');
           
           
           message.channel.send(newEmbed);

       }
    }