module.exports ={
    name: '3',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/c6bc3800d00c07ccd4dbf015bf3e743c.png?size=256')
       .setTitle('Commands Menu')
       .setThumbnail('https://i.imgur.com/IOc6tij.gif')
       .setDescription('Rules and  Info Commands')
       .addFields( 
         
            {name : "1. p!premleague " , value : `Gives Info for RULES For Premier League`},
            {name : "2. p!laliga " , value : `Gives Info for RULES For La Liga`},
            {name : "3. p!seriea " , value : `Gives Info for RULES of serie A `},
            {name : "4. p!bundesliga" , value : `Gives Info for Bundesliga `},
            

            {name : "5. p!main-squadko" , value : `Gives Rules for Main Squad KO  `},
            
            {name : "6. p!worldcup " , value : `Gives Info for RULES of world Cup `},
            
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://i.imgur.com/IWQEA5P.gif');
         
           
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          msg.edit(newEmbed);
        } 
        
        
}

