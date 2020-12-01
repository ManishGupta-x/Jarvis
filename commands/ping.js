module.exports ={
     name: 'ping',
     Description: 'this is a  Ping command!',
     execute(message,args, Discord){
      
        message.channel.send('*ping');


     }  
}