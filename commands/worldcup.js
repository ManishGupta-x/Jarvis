module.exports ={
    name: 'worldcup',
    Description: 'Gives world cup Info !',
    execute(client,message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('WORLD CUP')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription(' RULES')
       .addFields(
        
           {name: "Rule 1" , value: '  9 Players Of the SAME NATIONAL TEAM Must be On the ground for 90 mins. [ Doesn\'t have to be the same 9 players , can sub however you want, just keep 9 NT players ALWAYS]'},
           {name: "Rule 2" , value: '  Only Legends and IM\'s who played for that national team are allowed [NO other legends are allowed]'},  
           {name: "Rule 3" , value: '  2 encounters with each opponent in group stage'},
           {name: "Rule 4" , value: ' Seeded quarter finals (Top 2 from each group)'},
           {name: "Rule 5 " , value : ` Knockouts, Final + 3rd Place Game: 1 Legged  `},
           {name: "Rule 6 " , value : ` No direct long balls from own half and backpasasing
           If your opponent performs a long ball and you concede a goal , you can report recorded proof in #proves channel. Only for directly conceded goals  `}

           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/808248403644907580/images_1.jpeg');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
