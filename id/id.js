const fs = require("fs");
const mongoose =require('mongoose');
 mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true , useUnifiedTopology: true});


 const data = require('../id/data.js');


 module.exports ={
    name: 'id',
    Description: 'this is a  Ping command!',
    execute(client,message,args, Discord){
     
       if(!args[0]){

          let member = message.author;

       }else { member = message.mentions.users.first() || client.users.cache.get(args[0])   ;
        }

        data.findone({

           
        }, (err,data) => {
            if(err) console.log(err);
            if(!data){
                const newdata = new data({
                    name: client.users.cache.get(member.id).username,
                    userID : user.id,
                    id : "no id"
                })
              newdata.save().catch(err => console.log(err));
              return message.channel.send(`${client.users.get(member.id).username} NO Id Yet`);
            } else {
                return message.channel.send(`${client.users.get(member.id).username}'s Id ${data.id}`);
            }
        }
        )
     
    }  
}