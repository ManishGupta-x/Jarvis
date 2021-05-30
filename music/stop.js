module.exports ={
    name: 'stop',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
     
        client.distube.stop(message);
        message.channel.send("Stopped the music!");


    }  
}