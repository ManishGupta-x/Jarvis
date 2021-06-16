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
            
            {name : "1. p!deadline-freakcup" , value : `17th June , 2021 (R8) `},
            {name : "2. p!deadline-laliga" , value : `18th June. 2021(Day 13-15)`},

            {name : "3. p!deadline-mainko" , value : `16th June , 2021 (R16)`},
            {name : "4. p!deadline-premleague" , value : `Ended For season 3`},
            {name : "5. p!deadline-ucl" , value : `Finals Remaining`},
            {name : "6. p!deadline-worldcup" , value : `24th June. 2021(Quaterfinals)`},
            
             
          
        
        
           )
           .setFooter(`Type p!help for other commands`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/839845943499292692/wp6964108.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}