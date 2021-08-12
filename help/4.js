module.exports ={
    name: '4',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Commands Menu')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/c6bc3800d00c07ccd4dbf015bf3e743c.png?size=256')
       .setThumbnail('https://i.imgur.com/IOc6tij.gif')
       .setDescription('Deadline Commands')
       .addFields( 
            
            {name : "1. p!deadline-freakcup" , value : `Gives Last Updated Deadline For Freak Cup`},
            {name : "2. p!deadline-worldcup" , value : `Gives Last Updated Deadline For world Cup`},
            {name : "3. p!deadline-laliga" , value : `Gives Last Updated Deadline For La liga`},

            {name : "4. p!deadline-bundesliga" , value : `Gives Last Updated Deadline For bundesliga `},
            {name : "5. p!deadline-premleague" , value : `Gives Last Updated Deadline For Premier League `},
            {name : "6. p!deadline-ucl" , value : `Gives Last Updated Deadline For UCL `}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://i.imgur.com/Z8guJTV.gif');
         
           
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          msg.edit(newEmbed);
        } 
        
        
}