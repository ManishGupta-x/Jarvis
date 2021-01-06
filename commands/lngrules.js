module.exports ={
    name: 'lngrules',
    Description: 'Gives RUles !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#00fffa')
       .setTitle('Language Rules on the Server ')
       .setAuthor('Freak Gamer')
       .addFields(
        
           {name: "Rule 1" , value: ' if you are having General talks you can Have that any language You feel Like with your friends!'},
           {name: "Rule 2" , value: ' If you are asking queries or Talking about PES You need to talk in respective Channel Only or you will be 1st verbally warned and then a punishment will be filed! '},
           {name: "Rule 3" , value: ' 3 Warns = 2 Days  Mute! and after that a Kick and the a ban !  '}  
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/796271494674120704/12_rules_of_simply_investing-1760w-1100h.png');
           
           
           message.channel.send(newEmbed);

       }
    }