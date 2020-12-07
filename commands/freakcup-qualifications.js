module.exports ={
    name: 'freakcup-qualifications',
    Description: 'Gives Freak Cup Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#FC4206')
       .setTitle('Qualifications Descriptions')
       .setDescription(`4 Ways To Enter `)
       .addFields(

              
           {name: "1" , value: `__Top 3 Players__ From Both Divisions Will Qualify For the Freak Cup`},
           {name: "2" , value: `__Semifinalists Of UEFA Champions League __ Will Only be Qualified For Freak Cup`},  
           {name: "3" , value: ' Depending On the Common players among the above tourneys Maximum Top players form __La Liga and Premier League__ Will Be selected and will  Qualify For Freak Cup'},
           {name: "4" , value: 'In Total there will be 16 players in the Cup '},
        






       )
       
           .setImage('https://cdn.discordapp.com/attachments/767787771816443966/776755041872642048/FIF_world_cup_trophy_on_grassjpg.jpg');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
