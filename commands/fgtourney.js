module.exports ={
    name: 'fgtourney',
    Description: 'Gives fg tourney Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('FG Tourney Important Rules')
       .setThumbnail('https://cdn.discordapp.com/attachments/737883256128798800/853284175775924294/Snapshot_1.png')
       .setDescription(' RULES')
       .addFields(
        
           {name: "Rule 1" , value: 'You must Follow your squad Requirements Carefully if you choosed wrong squad you have to leave the match immediately and start again! '},
           {name: "Rule 2" , value: 'In case of lag you have to leave the match in the first 30 mins ! and try another time to play match  '},  
           {name: "Rule 3" , value: ' If you play in lag and complain after match that will not be entertained the score will be same'},
           {name: "Rule 4" , value: ' In case of disconnection in btw u can start the match again taking the score of first match and continue'},
           {name: "Rule 5 " , value : `I will suggest everyone to type p!rules before match to see gameplay rules !`},
           {name: "Rule 6" , value : `IMPORTANT NOTE: Take ss of the squad of your opponent in the match !`}

           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/868375698706939944/x1080.png');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
