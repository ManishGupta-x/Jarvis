module.exports ={
     name: 'ping',
     Description: 'this is a  Ping command!',
     execute(client,message,args, Discord){
      
      message.reply('Computing...').then((resultMessage) => {
         const ping = resultMessage.createdTimestamp - message.createdTimestamp
   
         resultMessage.edit(`Latency: \`${ping} ms\`, API Latency: \`${client.ws.ping} ms\``)
       })


     }  
}