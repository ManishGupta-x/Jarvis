module.exports ={
    name: 'deadline',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('All Tourneys Deadlines')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription('Deadline Commands')
       .addFields( 
            
            {name : "1. p!deadline-freakcup" , value : `To Be Decided `},
            {name : "2. p!deadline-laliga" , value : `19th May ,2021 (Day 1-3)`},

            {name : "3. p!deadline-mainko" , value : `To Be Decided`},
            {name : "4. p!deadline-premleague" , value : `21st May, 2021 (Day 5-8)`},
            {name : "5. p!deadline-ucl" , value : `To Be Decided`},
            {name : "6. p!deadline-worldcup" , value : `To Be Decided`},
            {name : "7. p!deadline-bbtourney" , value : `To Be Decided`}
             
          
        
        
           )
           .setFooter(`Type p!help for other commands`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/839845943499292692/wp6964108.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}