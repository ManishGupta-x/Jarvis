module.exports ={
    name: 'freakcup',
    Description: 'Gives Freak Cup Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#FC4206')
       .setTitle('Freak Cup')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .setThumbnail('https://i.imgur.com/Et0YjaM.gif')
       .setDescription(' Freak Cup Description')
       .addFields(
        
           {name: "Rule 1" , value: ' Every match is 1 legged with 6 mins + ET AND PEN Till **SEMIFINALS**'},
           {name: "Rule 2" , value: ' In case you forget to set ET AND PEN **EXIT THE GAME IMMEDIATELY** ELSE YOU have to play the whole Match again '},  
           {name: "Rule 3" , value: ' If you Lose You are Gone'},
           {name: "Rule 4" , value:'. In case You Find opponent is not responding within the deadline pls post your message ss in #👁│proves . You will get a 3-0 will in case you were right . '},
           {name: "Squad Requirements " , value : `1. Upto 6 legends and IMs allowed \n 2. All type of Player Cards are alllowed \n 3. MBAPPE , RONALDO,MESSI,NEYMAR are Banned \n 4. NO TEAM STRENGTH LIMIT and NO FEATURED PLAYERS LIMITS U can use any type of players `}

           
           )
           .setImage('https://i.imgur.com/HEBDUlg.gif');
           
           message.channel.send({embeds : [newEmbed]});
           return;
        } 
        
        
}

