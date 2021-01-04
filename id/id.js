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
            message.reply('You dont Have any id Set')
        } 

        Data.findOne({
           userID :message.author.id

        }, (err, data) => {
            if (err) console.log(err);
            if(args[0]){ 
            if (!data) {
                const newData = new Data({
                    name: message.author.username,
                    userID: message.author.id,
                    Konami : args[0],
                })
                newData.save().catch(err => console.log(err));
                return message.reply('Your Id  has been set ')

             } 
        }else{
            return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.Konami}`);
        }
        }
        )

    }
}





