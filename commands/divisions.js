module.exports ={
    name: 'divisions',
    Description: 'Gives Divisons Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#06FC9F ')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
       .setTitle('Divisions')
       .addFields(
        
           {name: "Info: " , value: ` **The Participants are divided in 2 or 3 Divisions !
            
            \n In the Season ending the Last 4 players in @Division 1  will be demoted to @Division 2   
            and Top 4 Players Of  @Division 2 will be Promoted to @Division 1 in the next season... this will be same between div 2 and div 3
            This will go on every Season....
            \n\n :no_entry:  RULES :no_entry:  
            \n\n :fire: __ NO RULES YOU CAN USE ANY SQUAD AT ANY TIME__ :fire: 
            \n\n You have to play all the players of your Division twice (2 LEGS)
            \n\n The Division role will be taggable and you can Tag the role __in the Channel__ '
            to ask if any one free to play** 
            \n\n Eg: @Division 1 Anyone free to play?`},
            {name: " Results" , value : ` **At the Season End the Final table will be released for
             all the Divisions and The top player will be announced as the winner!!** 
            \n\n ** To get the Rewards info Follow p!rewards-divisions** `
           }
           

           
           )
            .setImage('https://cdn.discordapp.com/attachments/610950416498425886/839845555797491732/pes21_10.png');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}

