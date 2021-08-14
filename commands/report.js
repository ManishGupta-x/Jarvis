module.exports ={
    name: 'report',
    Description: 'this is a report command!',
    execute(client,message,args, Discord){
       
        const channel = `876076486463987752`;
        channel.send(`Guild Id : ${message.guild.id} Requesting for restart`)


    }  
}