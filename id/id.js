const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });




const Data = require('../id/data.js');


module.exports = {
    name: 'id',
    Description: 'this is a  Ping command!',
    async execute(client, message, args, Discord) {
        
        
        if (!args[0]) {

            user = message.author;

        } else {
            user = message.mentions.users.first() || client.users.cache.get(args[0]);
        }

        Data.findOne({


        }, (err, data) => {
            if (err) console.log(err);
            if(!args[0]){ 
            if (!data) {
               
                
                return message.reply('you dont have any id set ')

             } else {
                return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.Konami}`);
            }
        }else{
              data.Konami = args[0];
            const newdata = new Data({
                name: message.author.username,
                userID: message.author.id,
                Konami : args[0],
            })
            newdata.save().catch(err => console.log(err));
            data.save().catch(err => console.log(err));
            message.reply('Id Has been Set ')
        }
        }
        )

    }
}





