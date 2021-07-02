module.exports ={
    name: '2',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Command Menu')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .setThumbnail('https://i.imgur.com/IOc6tij.gif')
       .setDescription('Tourneys Rewards INFO')
       .addFields( 
            
            {name : "1. p!rewards-freakcup " , value : `Gives Reward Info For Freak cup`},
            {name : "2. p!rewards-ucl" , value : `Gives Reward Info For UEFA Champions League`},
            
            {name : "3. p!rewards-laliga" , value : `Gives Reward Info For laliga `},
            {name : "4. p!rewards-premleague " , value : `Gives Reward Info For Premier League `},
            {name : "5. p!rewards-divisions " , value : `Gives Reward Info For Divisions rewards `},
            {name : "6. p!rewards-mainko" , value : `Gives Reward Info  For Main squad KO`},
            {name : "7. p!rewards-armychoice" , value : `Gives Reward Info For op Tourney `}
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://i.imgur.com/qOFNRzr.gif');
         
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
           
          msg.edit(newEmbed);
        } 
        
        
}