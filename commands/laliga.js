module.exports ={
    name: 'laliga',
    Description: 'Gives La liga Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#ff3600')
       .setTitle('La Liga')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .addFields(
        
           {name: "Rule 1" , value: `You can use that players who played in Laliga  ( +LEGENDS and IMs)  i.e 18 players in the WHOLE SQUAD including SUBS
          `},
           {name: "Rule 2" , value: ' No legends and Im\'s Allowed Other than La liga  '},
           {name: "Rule 3" , value: ' If You will break the squad requirements the opponent will get the win !! And that will be final , So save your\'s in squads ! '},
           {name: "Rule 4" , value: ' Its a 2 Legged Tourney !'}

           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/769813155815358474/skysports-real-madrid-barcelona_5146542.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }