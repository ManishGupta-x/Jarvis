module.exports ={
    name: '3',
    Description: 'Gives Commands Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#6beea8')
       .setTitle('Commands Menu')
       .setDescription('Rules and  Info Commands')
       .addFields( 
            
            {name : "1. p!freakcup " , value : `Gives Info for RULES of Freak Cup `},
            {name : "2. p!divisions" , value : `Gives  Divisions Info or RUles`},

            {name : "3. p!main-squadko" , value : `Gives Rules for Main Squad KO  `},
            {name : "4. p!div1 " , value : `Gives Link of division 1 `},
            {name : "5. p!div2" , value : `Gives link of division 2 `}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784432968852439100/apps.png');
         
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
