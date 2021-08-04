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
         
            {name : "1. p!laliga " , value : `Info For laliga`},
            {name : "2. p!premleague " , value : `Info For EPL`},
            {name : "3. p!bundesliga" , value : ` Info For Bundesliga`},
            {name : "4. p!serieA" , value : ` Info For serie A `},
            {name : "5. p!battleroyal " , value : `Info For Battle Royal `},
            {name : "6. p!ucl" , value : `Info For ucl`},
            {name : "7. p!worldcup" , value : `Info For worldcup`}
             
          
        
        
           )
           .setFooter(`Type p!help to get back to Main menu`)
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784432968852439100/apps.png');
         
           
          
        } 
        
        
}

