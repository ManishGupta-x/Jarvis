const fs = require("fs");
const mongoose =require('mongoose');
 mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true , useUnifiedTopology: true});


 const Data = require('../id/data.js');


 module.exports ={
    name: 'setid',
    Description: 'this is a  setid  command!',
    execute(client,message,args, Discord){
        user = message.author;
         
     
       if(!args[0]){

          
          return message.channel.send("Pls enter your id after p!setid");

       }
       else {
        konamiid= args[0];
       
       }
        Data.findOne({

           
        }, (err,data) => {
            if(err) console.log(err);
            if(!data){
                const newdata = new Data({
                    name: client.users.cache.get(user.id).username,
                    userID : user.id,
                    id : konamiid
                })
              newdata.save().catch(err => console.log(err));
              message.channel.send(`Your Id Has been set to ${konamiid} `);
              
            } else{
                data.save().catch(err => console.log(err));
                message.channel.send('type p!id to get your id')
            }
        }
        )
     
    }  
}