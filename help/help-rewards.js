module.exports ={
    name: 'help-rewards',
    Description: 'Give Rewards info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('REWARDS HELP')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .addFields( 
            
        {name : "1. p!rewards-freakcup " , value : `Gives Reward Info For Freak cup`},
        {name : "2. p!rewards-ucl" , value : `Gives Reward Info For UEFA Champions League`},
        
        {name : "3. p!rewards-laliga" , value : `Gives Reward Info For laliga `},
        {name : "4. p!rewards-premleague " , value : `Gives Reward Info For Premier League `},
        {name : "5. p!rewards-divisions " , value : `Gives Reward Info For Divisions rewards `},
        {name : "6. p!rewards-mainko" , value : `Gives Reward Info  For Main squad KO`},
        {name : "7. p!rewards-armychoice" , value : `Gives Reward Info For op Tourney `}
      
    
    
       )
          
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/822137385428058202/2015-635692640812031290-203.png')
           
           message.channel.send(newEmbed);

       }
    }