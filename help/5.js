module.exports ={
    name: '5',
    Description: 'Gives Competitions Info !',
    execute(message,args,Discord,msg){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#06FC9F ')
       .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/c6bc3800d00c07ccd4dbf015bf3e743c.png?size=256')
       .setThumbnail('https://i.imgur.com/5xYEw1U.gif')
       .setTitle('Competetions On the Server')
       .addFields(
        
           {name: "🤯 Predictions " , value: ` Predict For Upcoming Matches of football and earn rewards \n and go up on the leaderboard and earn \n amazing roles !`},
           {name: "🧐 Guess The Player " , value: ` Guess the player in the video and Earn **Server points** .\n Gain access to earn Server shop Badges for your \nrank card by these Server points. `},
           {name: "😳 Goal of The month" , value: ` Runs every month Submit your best Goal of the Month here \nand get a boost of 20k Server score on the \nleaderboard by winning it`},
           {name: "😲 Score Predictions" , value: ` Predict Ongoing Irl Football Matches and Earn Rewards`}
           

           
           )
           .setImage('https://i.imgur.com/5xYEw1U.gif');
           
           msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
           msg.edit(newEmbed);
        } 
        
        
}