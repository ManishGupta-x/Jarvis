module.exports ={
    name: 'serieA',
    Description: 'Gives serie  Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#9400ff')
       .setTitle('SERIE A')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .addFields(
        
           {name: "Rule 1" , value: '9 players From the League Must be on ground for the whole 90 mins '},
           {name: "Rule 2" , value: 'You can Sub players such that 9 players always remain on ground'},
           {name: "Rule 3" , value: 'If You will break the squad requirements the opponent will get the win !! And that will be final , So save your\'s in squads ! '},
           {name: "Rule 4" , value: ' Its a 2 Legged Tourney !'}

           
           
           )
           .setImage('https://i.imgur.com/xcGZtTw.gif');
           
           
           message.channel.send(newEmbed);

       }
    }