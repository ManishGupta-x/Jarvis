module.exports ={
    name: '5',
    Description: 'Gives Competitions Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#06FC9F ')
       .setAuthor('Freak Gamer')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg')
       .setTitle('Competetions On the Server')
       .addFields(
        
           {name: "🤯 Predictions " , value: ` Predict For Upcoming Matches of football and earn rewards \n and go up on the leaderboard and earn \n amazing roles !`},
           {name: "🧐 Guess The Player " , value: ` Guess the player in the video and Earn **Server points** .\n Gain access to earn Server shop Badges for your \nrank card by these Server points. `},
           {name: "😳 Goal of The month" , value: ` Runs every month Submit your best Goal of the Month here \nand get a boost of 20k Server score on the \nleaderboard by winning it`},
           {name: "😲 Score Predictions" , value: ` Predict Ongoing Irl Football Matches and Earn Rewards`}
           

           
           )
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433282804219924/img_agarcial_20180830-140538_imagenes_lv_terceros_pro_evolution_soccer_2019_20180830095902-kkRC-U451.png');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}