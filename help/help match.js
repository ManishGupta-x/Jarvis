module.exports ={
    name: 'help match',
    Description: 'this is  a help command',
    execute(message,args, Discord){
     
       message.channel.send('Format :  p!match @user1 v @user2');


    }  
}