module.exports ={
    name: 'laliga',
    Description: 'Gives La liga Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#ff3600')
       .setTitle('La Liga')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rule 1" , value: ' Only  10 La liga  players allowed In the whole Squad ( +LEGENDS and IMs) i.e 10 players in the WHOLE SQUAD including SUBS'},
           {name: "Rule 2" , value: ' NO legends Allowed Other than La liga  '},
           {name: "Rule 3" , value: ' If You will break the squad requirements the opponent will get the win !! And that will be final , So save your\' in squads ! '},
           {name: "Rule 4" , value: ' Its a  One Legged Tourney !'}

           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/769813155815358474/skysports-real-madrid-barcelona_5146542.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }