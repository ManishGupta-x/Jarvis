module.exports ={
    name: 'help-tourneys',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/c6bc3800d00c07ccd4dbf015bf3e743c.png?size=256')
       .setTitle('Commands Menu')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription('Rules and  Info Commands')
       .addFields( 
         
            {name : "1. p! " , value : ``},
            {name : "2. p! " , value : ``},
            {name : "3. p!" , value : ` `},
            {name : "4. p!" , value : `  `},
            {name : "5. p! " , value : ` `},
            {name : "6. p!" , value : ``},
            {name : "7. p!" , value : ``}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784432968852439100/apps.png');
         
           
          msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
          msg.edit(newEmbed);
        } 
        
        
}

