module.exports ={
    name: 'premleague',
    Description: 'Gives premleague  Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#9400ff')
       .setTitle('Premier League')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .addFields(
        
           {name: "Rule 1" , value: ' All Premier League Players in the whole Squad ( +LEGENDS and IMs) i.e 18 players in the WHOLE SQUAD including SUBS ( You can use White Balls but you can\'t sub them!'},
           {name: "Rule 2" , value: ' NO legends Allowed Other than Premier League  '},
           {name: "Rule 3" , value: ' If You will break the squad requirements the opponent will get the win !! And that will be final , So save your\'s in squads ! '},
           {name: "Rule 4" , value: ' Its a  One Legged Tourney !'}

           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/787548932082630656/skysports-premier-league-restart_5015502.png');
           
           
           message.channel.send(newEmbed);

       }
    }