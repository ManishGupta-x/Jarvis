module.exports ={
     name: 'ping',
     Description: 'this is a  Ping command!',
     execute(message,args, Discord){
      
      message.channel.send({embed: { 
         color: 16777215, description:'Test', 
         image:  {
             url: "https://tenor.com/view/pes2020-pes2020ronaldhino-ronaldhino-legend-pes-pes-pes19-gif-14320689"
         }
     }});


     }  
}