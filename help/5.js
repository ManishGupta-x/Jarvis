module.exports ={
    name: '5',
    Description: 'Gives Competitions Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#06FC9F ')
       .setAuthor('Freak Gamer')
       .setTitle('Competetions On the Server')
       .addFields(
        
           {name: "🤯 Predictions " , value: ` Predict For Upcoming Matches of football and earn rewards \n and go up on the leaderboard and earn \n amazing roles !`},
           {name: "🧐 Guess The Player " , value: ` Guess the player in the video and Earn **Server points** .\n Gain access to earn Server shop Badges for your \nrank card by these Server points. `},
           {name: "😳 Goal of The month" , value: ` Runs every month Submit your best Goal of the Month here \nand get a boost of 20k Server score on the \nleaderboard by winning it`},
           {name: "😲 Score Predictions" , value: ` Predict Ongoing Irl Football Matches and Earn Rewards`}
           

           
           )
           .setImage('https://media.discordapp.net/attachments/730714810614022228/769431011657383976/gamescom-2019-konami-reveals-efootball-pes-2020-mobile-game-details.jpg?width=887&height=499');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}