const fs = require("fs");
const mongoose =require('mongoose');
 mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true , useUnifiedTopology: true});


 const Data = require('../id/data.js');


 module.exports ={
    name: 'id',
    Description: 'this is a  Ping command!',
    execute(client,message,args, Discord){
     
       if(!args[0]){

          user = message.author;

       }else { user = message.mentions.users.first() || client.users.cache.get(args[0])   ;
        }

        Data.findOne({

           
        }, (err,data) => {
            if(err) console.log(err);
            if(!data){
                const newdata = new Data({
                    name: client.users.cache.get(user.id).username,
                    userID : user.id,
                    id : "no id"
                })
              newdata.save().catch(err => console.log(err));
              return message.channel.send(`NO Id Yet For ${client.users.cache.get(user.id).username} `);
            } else {
                return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.id}`);
            }
        }
        )
     
    }  
}