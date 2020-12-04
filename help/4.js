module.exports ={
    name: '4',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Commands Menu')
       .setDescription('Deadline Commands')
       .addFields( 
            
            {name : "1. p!deadline-freakcup" , value : `Gives Last Updated Deadline For Freak Cup`},
            {name : "2. p!deadline-laliga" , value : `Gives Last Updated Deadline For La liga`},

            {name : "3. p!deadline-mainko" , value : `Gives Last Updated Deadline For Main Squad KO `},
            {name : "4. p!deadline-premleague" , value : `Gives Last Updated Deadline For Premier League `},
            {name : "5. p!deadline-ucl" , value : `Gives Last Updated Deadline For UCL `}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433206236545054/pes-2018-19929-1.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}