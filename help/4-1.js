module.exports ={
    name: '4-1',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/c6bc3800d00c07ccd4dbf015bf3e743c.png?size=256')
       .setTitle('Commands Menu')
       .setThumbnail('https://i.imgur.com/IOc6tij.gif')
       .setDescription('Rules and  Info Commands')
       .addFields( 
         
            {name : "1. p!pl_table " , value : `Gives Link of premier league table`},
            {name : "2. p!ll_table " , value : `Gives Link of La Liga table`},
            {name : "3. p!ucl_table" , value : `Gives link of UCl Matchdays and Table `},
            {name : "4. p!ucl" , value : `Gives Rules for Ucl  `},
            {name : "5. p!wc_table" , value : `Gives link World Cup`}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://i.imgur.com/Z8guJTV.gif');
         
           
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          msg.edit(newEmbed);
        } 
        
        
}

