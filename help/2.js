module.exports ={
    name: '2',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Command Menu')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/c6bc3800d00c07ccd4dbf015bf3e743c.png?size=256')
       .setThumbnail('https://i.imgur.com/IOc6tij.gif')
       .setDescription('Tourneys Rewards INFO')
       .addFields( 
            
            {name : "1. p!rewards-serieA " , value : `Gives Reward Info For Serie A`},
            {name : "2. p!rewards-ucl" , value : `Gives Reward Info For UEFA Champions League`},
            
            {name : "3. p!rewards-laliga" , value : `Gives Reward Info For laliga `},
            {name : "4. p!rewards-premleague " , value : `Gives Reward Info For Premier League `},
            {name : "5. p!rewards-Battleroyal " , value : `Gives Reward Info For Battle Royal rewards `},
            {name : "6. p!rewards-mainko" , value : `Gives Reward Info  For Main squad KO`},
            {name : "7. p!rewards-Bundesliga" , value : `Gives Reward Info For Bundesliga `}
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://i.imgur.com/qOFNRzr.gif');
         
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
           
          msg.edit(newEmbed);
        } 
        
        
}