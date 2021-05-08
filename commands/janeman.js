module.exports ={
    name: 'janeman',
    Description: 'this is a role command!',
    execute(message,args, Discord){
     
        const channel = client.channels.cache.find(channel => channel.id === '745878533246681170')
        if (!args[0]) {

           return message.channel.send('You didnt specified a sentence')
       }
   
        
           
       
           
            channel.send(args[0]);
           message.delete({ timeout: 2000 })


    }  
}