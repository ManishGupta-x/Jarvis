module.exports ={
    name: '3',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .setTitle('Commands Menu')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription('Rules and  Info Commands')
       .addFields( 
            
            {name : "1. p!freakcup " , value : `Gives Info for RULES of Freak Cup `},
            {name : "1. p!freakcup-qualifications" , value : `Gives Info for Qualification Rules for Freak cup `},
            {name : "2. p!divisions" , value : `Gives  Divisions Info or RUles`},

            {name : "3. p!main-squadko" , value : `Gives Rules for Main Squad KO  `},
            {name : "4. p!div1 " , value : `Gives Link of division 1 `},
            {name : "5. p!worldcup " , value : `Gives Info for RULES of world Cup `},
            {name : "6. p!div2" , value : `Gives link of division 2 `}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784432968852439100/apps.png');
         
           
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          msg.edit(newEmbed);
        } 
        
        
}

