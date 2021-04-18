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
        
        {name: "Type !freakgamer " , value: 'Get whole server info'},
        {name: "Read #announcemtns" , value: 'To see Current Season Tourneys Schedule'},
        
        
        
        )
          
           
           
           message.channel.send(newEmbed);
           message.delete({ timeout: 2000 })
       }
    }