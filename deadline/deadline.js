module.exports ={
    name: 'deadline',
    Description: 'Gives Commands Info !',
    execute(client,message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('All Tourneys Deadlines')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription('Deadline Commands')
       .addFields( 
            
            {name : "1. p!deadline-freakcup" , value : `31st Jan, 2021 (semis)`},
            {name : "2. p!deadline-laliga" , value : `25th January ,2021 (Last Updated)`},

            {name : "3. p!deadline-mainko" , value : `28th Jan 2021 (semis) `},
            {name : "4. p!deadline-premleague" , value : `25th January ,2021 (Last Updated)`},
            {name : "5. p!deadline-ucl" , value : `2nd February 2021 (semis) `},
            {name : "6. p!deadline-worldcup" , value : `4th March, 2021 (Group Stage) `},
            {name : "7. p!deadline-bbtourney" , value : `Not Updated `}
             
          
        
        
           )
           .setFooter(`Type p!help for other commands`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433206236545054/pes-2018-19929-1.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}