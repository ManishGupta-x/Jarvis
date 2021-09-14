module.exports ={
    name: 'search',
    Description: 'this is a  Ping command!',
    execute(client,message,args, Discord){
     
          if(!args[0]) {
              message.reply("Please mention Player name");
          }   else{
          message.channel.send({content :`https://www.pesmaster.com/pes-2021/?q=${args[0]}`})}
    }  
}