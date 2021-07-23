module.exports ={
    name: 'search',
    Description: 'this is a  Ping command!',
    execute(client,message,args, Discord){
     
    
          message.channel.send(`https://www.pesmaster.com/pes-2021/?q=${args[0]}`)
    }  
}