module.exports ={
    name: 'report',
    Description: 'this is a report command!',
    execute(client,message,args, Discord){
        var server = client.guilds.get(message.guild.id).id;
        const channel = `876076486463987752`;
        channel.send(`Guild Id : ${server} Requesting for restart`)


    }  
}