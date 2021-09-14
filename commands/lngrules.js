module.exports ={
    name: 'lngrules',
    Description: 'Gives RUles !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('Language Rules on the Server ')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .addFields(
        
           {name: "Rule 1" , value: ' if you are having General talks you can Have that in  any language You feel Like with your friends!'},
           {name: "Rule 2" , value: ' If you are asking queries or Talking about PES You need to talk in respective Channel Only or you will be 1st verbally warned and then a punishment will be filed! '},
           {name: "Rule 3" , value: ' 3 Warns = 2 Days  Mute! and after that a Kick and then a ban !  '}  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/796271494674120704/12_rules_of_simply_investing-1760w-1100h.png');
           
           
           message.channel.send({embeds : newEmbed});

       }
    }