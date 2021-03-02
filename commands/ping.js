module.exports ={
     name: 'ping',
     aliases : ['p'],
     Description: 'this is a  Ping command!',
     execute(message,args, Discord){
      
        message.channel.send('pong!');


     }  
}