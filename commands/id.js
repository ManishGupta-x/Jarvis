module.exports ={
    name: 'id',
    Description: 'this is a  id command!',
    execute(message,args, Discord){
     
      const sql = require("sqlite");
      sql.open("./id.sqlite");
      sql.get(`SELECT * FROM id WHERE userId = "${message.author.id}"`).then(row => {


        message.channel.send("row.ID");
      });


    }  
}