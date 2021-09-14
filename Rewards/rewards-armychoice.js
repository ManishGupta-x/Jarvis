module.exports ={
    name: 'rewards-armychoice',
    Description: 'Gives info of rewards for Gk Tourney Ko !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#54EDF7')
       .setTitle('Rewards For Army\'s Choice Tourneys ')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rewards" , value: '\n Winner : 10000 **Server score**'+
           '\n Runner Up: 7000 **Server score**'+
           '\n Semifinalists: 3000 **Server Score**'+
           '\n Quaterfinalist: 1000 **Server Score**' }  
           
           
           )
           .setImage('https://media.discordapp.net/attachments/610950416498425886/791945574924025856/20171214-The18-Image-Kahn.png?width=750&height=498');
           
           
           message.channel.send({embeds :newEmbed});

       }
    }