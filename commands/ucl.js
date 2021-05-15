module.exports ={
    name: 'ucl',
    Description: 'Gives ucl Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('BLUE')
       .setTitle('UEFA Champions League')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription(' RULES')
       .addFields(
        
           {name: "Rule 1" , value: '  11 Players Of the __SAME CLUB__ Must be On the ground for 90 mins. [ Not the 11 same players ,you can sub a club player with a club player and non-club with a club or non-club one]'},
           {name: "Rule 2" , value: '  Legends and IM\'s Who played for __That CLUB __ are only ALLOWED**[ NO other legends are allowed]'},  
           {name: "Rule 3" , value: '  4 Slots for 1 club'},
           {name: "Rule 4" , value: ' Group Stage: Players Have to play only __2 Legs__ With Every Player'},
           {name: "Rule 5 " , value : ` After Group Stage  : 2 Legs  Till Semis and FINAL Will be **1 Legged**  `}

           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/790479010051391538/uefa-champions-league-ball.png');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
