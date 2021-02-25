module.exports ={
    name: 'bbtourney',
    Description: 'Gives bb tourney Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('Base BB Tourney ')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setDescription(' RULES')
       .addFields(
        
           {name: "Rule 1" , value: 'Only Base Black Balls  are allowed ! '},
           {name: "Rule 2" , value: 'FORMATION NEEDED : 4 3 3 '},  
           {name: "Rule 3" , value: 'KO Tourney '},
           {name: "Rule 4" , value: ' NO legends Are allowed  '},
           {name: "Rule 5" , value:`No direct long balls from own half and back passing
           If your opponent performs a long ball and you concede a goal , you can report recorded proof in #proves channel. Only for directly conceded goals` },
           

           
           )
           .setImage('https://cdn.discordapp.com/attachments/767787771816443966/776755041872642048/FIF_world_cup_trophy_on_grassjpg.jpg');
           
           
           message.channel.send(newEmbed);
           return;
        } 
    }