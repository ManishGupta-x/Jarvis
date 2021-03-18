module.exports ={
    name: 'rules',
    Description: 'Gives RUles !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('Gameplay Rules on the Server ')
       .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/796271494674120704/12_rules_of_simply_investing-1760w-1100h.png')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .addFields(
        
           {name: "Rule 1" , value: ' Long balls from own half and Backpassing are banned in the Tourneys , If Your Opponent Performs these Long balls and you concede a GOAL , You will Report recorded proof in #proves channel and THE FINAL DECISION WILL BE TAKEN BY THE STAFF MEMBERS And THAT SHOULD BE Respected . ONLY IF YOU Concede Goal by that , you can do Long ball but remember you must not score with that'},
           {name: "Rule 2" , value: ' If you find Your Opponent lagging , Quit in first 30 mins else quitting afterwards will straight lead to the score at that time or full time score'}
           
           
           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/814461811692535899/law-12---fouls-and-misconduct---800x450.png');
           
           
           message.channel.send(newEmbed);

       }
    }