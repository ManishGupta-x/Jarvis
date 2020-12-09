module.exports ={
    name: '2',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Command Menu')
       .setDescription('Tourneys Rewards INFO')
       .addFields( 
            
            {name : "1. p!rewards-freakcup " , value : `Gives Reward Info For Freak cup`},
            {name : "2. p!rewards-ucl" , value : `Gives Reward Info For UEFA Champions League`},

            {name : "3. p!rewards-laliga" , value : `Gives Reward Info For laliga `},
            {name : "4. p!rewards-premleague " , value : `Gives Reward Info For Premier League `},
            {name : "5. p!rewards-divisions " , value : `Gives Reward Info For Divisions rewards `},
            {name : "6. p!rewards-mainko" , value : `Gives Reward Info  For Main squad KO`}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433051182170142/pes2021thumb-1594909443576.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}