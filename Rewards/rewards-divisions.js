module.exports ={
    name: 'rewards-divisions',
    Description: 'Gives info of rewards for divisions!',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#F33A3A')
       .setTitle('Rewards for Divisions ')
       .setAuthor('Freak Gamer')
       .addFields(
        
        {name: "Rewards" , value: '\n #1 10000 **Server score**'+
        '\n #2 7000 **Server score**'+
        '\n #3 5000 **Server Score**'+
        '\n Rest all Players Will get 1000 Server Score'+
        '\n\n  ** Top 3 Players Qualify for Freak CUP ** \n for more info type p!divisions' 
    
    }  
        
        
        )
       .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784407231369838632/FIF_world_cup_trophy_on_grassjpg.jpg');
           
           
           message.channel.send(newEmbed);

       }
    }