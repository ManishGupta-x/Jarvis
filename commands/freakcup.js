module.exports ={
    name: 'freakcup',
    Description: 'Gives Freak Cup Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#FC4206')
       .setTitle('Freak Cup')
       .setDescription(' Freak Cup Description')
       .addFields(
        
           {name: "Rule 1" , value: ' Every match is 1 legged with 6 mins + ET AND PEN Till **SEMIFINALS**'},
           {name: "Rule 2" , value: ' In case you forget to set ET AND PEN **EXIT THE GAME IMMEDIATELY** ELSE YOU have to play the whole Match again '},  
           {name: "Rule 3" , value: ' If you Lose You are Gone'},
           {name: "Rule 4" , value:'. In case You Find opponent is not responding within the deadline pls post your message ss in #👁│proves . You will get a 3-0 will in case you were right . '},
           {name: "Squad Requirements " , value : `1. Upto 6 legends and IMs allowed \n 2. All type of Player Cards are alllowed \n 3. MBAPPE , RONALDO,MESSI,NEYMAR are Banned \n 4. NO TEAM STRENGTH LIMIT and NO FEATURED PLAYERS LIMITS U can use any type of players `}

           
           )
           .setImage('https://cdn.discordapp.com/attachments/767787771816443966/776755041872642048/FIF_world_cup_trophy_on_grassjpg.jpg');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}

