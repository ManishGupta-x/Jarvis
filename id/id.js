const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
const filter = response => {
	return (message => message.toLowerCase() === response.content.toLowerCase());
};



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
            if (!data) {
               
                const newdata = new Data({
                    name: message.author.username,
                    userID: message.author.id,
                    Konami: 0,
                })
                newdata.save().catch(err => console.log(err));
                message.reply('Type your id to set it!').then(()=>{
                    message.channel.awaitMessages(filter ,{ max: 1, time: 30000, errors: ['time'] })
                    .then(collected=>{

                            data.Konami = collected.first().content;
                            data.save().catch(err => console.log(err));
                            message.reply("Your id has been Set!");

                    }                
                    )
                   
                })


             } else {
                return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.Konami}`);
            }
        }
        )

    }
}





