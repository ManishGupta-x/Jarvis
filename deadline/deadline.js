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
            
            {name : "1. p!deadline-freakcup" , value : `21th Jan, 2021 (R16)`},
            {name : "2. p!deadline-laliga" , value : `18th January ,2021 (Last Updated)`},

            {name : "3. p!deadline-mainko" , value : `16th Jan 2021 (R16) `},
            {name : "4. p!deadline-premleague" , value : `18th January ,2021 (Last Updated)`},
            {name : "5. p!deadline-ucl" , value : `25th January 2021 (Quater Finals) `}
             
          
        
        
           )
           .setFooter(`Type p!help for other commands`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433206236545054/pes-2018-19929-1.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}