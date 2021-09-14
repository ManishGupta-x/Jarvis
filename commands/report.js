module.exports ={
    name: 'report',
    Description: 'this is a report command!',
    execute(client,message,args, Discord){
        channelID = '876076486463987752';
           
       client.channels.cache.get(`${channelID}`).send(`Guild Id : ${message.guild.id} Requesting for restart`)
           message.channel.send({content :`Request sent successfully!`})
        
     


    }  
}