module.exports ={
    name: 'help',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Help Module')
       .setDescription('Server\'s Info And Commands')
       .addFields( 
            
            {name : "1. General Commands " , value : `Gives Info for General commands like ping 
            , twitter , official...etc`},
            {name : "2. Rewards" , value : `Gives Info for Rewards Commands`},

            {name : "3. Tourneys Info" , value : `Gives Info for Tourney commands like `},
            {name : "4. Deadline Commands " , value : `Gives Info for Deadline Commands`},
            {name : "5. Server Competitions" , value : `Gives Info For Our Server Competetions`}
             
          .setFooter(`Type prefix (p!) and the number from above menu Eg: p!2 `)
          .setimage('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
        
        
           )
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
