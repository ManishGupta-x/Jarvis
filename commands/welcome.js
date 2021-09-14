module.exports ={
    name: 'welcome',
    Description: 'Give id info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('WELCOME TO FREAK GAMER')
       .setDescription('Have a Pleasant Stay in the Server')
       .setAuthor('Freak Gamer')
       .addFields(
        
        
        {name: "Enjoy Your stay " , value: 'Have fun'},
        
        
        
        )
          
           
           
        message.channel.send({embeds : [newEmbed]});
           message.delete({ timeout: 2000 })
       }
    }