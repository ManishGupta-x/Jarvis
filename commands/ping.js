module.exports ={
     name: 'ping',
     Description: 'this is a  Ping command!',
     execute(client,message,args, Discord){
      
        message.channel.send('pong!');


     }  
}