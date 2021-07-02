const { MessageEmbed } = require("discord.js");

module.exports ={
    name: '1',
    Description: 'Gives Commands Info !',
   async execute(message,args,Discord,msg){
     
       const newEmbed1 = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Help Module')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/c6bc3800d00c07ccd4dbf015bf3e743c.png?size=256')
       .setThumbnail('https://i.imgur.com/KmTA1Mn.gif')
       .setDescription('Server\'s Info And Commands')
       .addFields( 
            
            {name : "1. p!twitter " , value : `Gives twitter link for Efootball PES`},
            {name : "2. p!youtube" , value : `Gives Youtube Link of Freakgamer`},
            {name : "3. p!friendly" , value : `Try it in #friendly Channel , You can challenge for friendly to online players `},
            {name : "4. p!official" , value : `Gives Official Website Of efootball pes `},
            {name : "5. p!clear " , value : `**Moderator Command: Clears Messages! `},
            {name : "6. p!match  " , value : `To generate Results a Random Match `},
            {name : "7. p!info  " , value : `Gives User Info `},
            {name : "7. p!botinfo  " , value : `Gives BOT Info `},
            {name : "8. p!remind" , value : `Syntax : p!remind [time] [task]`}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://i.imgur.com/SwA0525.gif');
         
           
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          
          msg.edit(newEmbed1);




          

         


        } 
        
        
}
