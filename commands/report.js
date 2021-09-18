module.exports ={
    name: 'report',
    Description: 'this is a report command!',
    execute(client,message,args, Discord){
        channelID = '876076486463987752';
           let issue = args.join(" ");
       client.channels.cache.get(`${channelID}`).send(`Guild Id : ${message.guild.id} Requesting for restart and getting issue : ${issue}`)
           message.channel.send({content :`Request sent successfully!`})
        
     


    }  
}