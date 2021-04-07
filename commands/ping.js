module.exports ={
     name: 'ping',
     Description: 'this is a  Ping command!',
     execute(message,args, Discord){
      
      message.channel.send({embed: { 
         color: 16777215, description:'Test', 
         image:  {
             url: "https://i.imgur.com/ONngPJY.gifv"
         }
     }});


     }  
}