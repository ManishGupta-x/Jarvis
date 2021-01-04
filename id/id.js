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
                message.channel.send("You Have no ID set Yet You want to set? (Yes/no)")
                var msg;
                let msg1= message.channel.cache.get(msg);
                
                if(msg1 == yes || msg1 == Yes || msg1 == YES ){
                    message.channel.send('Type your id Plss');

                    let msg2= message.channel.cache.get(msg);
                    const newdata = new Data({
                        name: client.users.cache.get(user.id).username,
                        userID : user.id,
                        ID : msg2
                    })
                    newdata.save().catch(err => console.log(err));
                   data.save().catch(err => console.log(err));
                   message.reply(' Id Updated ')

                }else {
                    message.send(' Id update Cancelled')
                }              
                
              
            
            } else {
                return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.ID}`);
            }
        }
        )
     
    }  
}