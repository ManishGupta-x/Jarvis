module.exports ={
    name: 'addid',
    Description: 'this is a id command!',
    execute(message,args, Discord){
     
     const sql = require("sqlite");
     sql.open("./id.sqlite");
     var args1 = message.content.split(" ").join(" "); 
     if(!args1){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Error')
        .setDescription('Pls enter Id after command')
        return message.channel.send(newEmbed);


     }
     sql.get(` SELECT * FROM id  WHERE  userId= "${message.author.id}`).then(row => {
       if(!row){

        sql.run("INSERT INTO id (userId,ID) VALUES (?,?)" , [message.author.id, args1]);

       }else{

        sql.run(`UPDATE id SET ID = "${args1}" WHERE userId =  $[message.author.id]`);

       }

     }     
        ).catch(() => {console.error;
        sql.run("CREATE TABLE IF NOT EXISTS id (userId INTEGER NOT NULL , ID INTEGER NOT NULL").then(() => {

          sql.run("INSERT INTO id (userId,ID) VALUES (?,?)", [message.author.id,args1]);
        }) ;
        }
        
        );
       message.reply("Your ID Has been set Successfully")

    }  
}