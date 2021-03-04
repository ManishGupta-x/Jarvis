module.exports ={
    name: 'divisions',
    Description: 'Gives Divisons Info !',
    execute(client,message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#06FC9F ')
       .setAuthor('Freak Gamer')
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
           .setImage('https://media.discordapp.net/attachments/730714810614022228/769431011657383976/gamescom-2019-konami-reveals-efootball-pes-2020-mobile-game-details.jpg?width=887&height=499');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}

