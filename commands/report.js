module.exports ={
    name: 'report',
    Description: 'this is a report command!',
    execute(client,message,args, Discord){
       
        
       client.channels.get(`876076486463987752`).send(`Guild Id : ${message.guild.id} Requesting for restart`)


    }  
}