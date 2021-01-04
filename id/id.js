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


                message.channel.send('You want to set your id? (yes/no)').then(() => {
                    message.channel.awaitMessages(filter ,{ max: 1, time: 30000, errors: ['time'] })
                        .then(collected => {

                            if ('yes' == collected.first().content || 'Yes' == collected.first().content) {
                                message.channel.send('type your id pls').then(() =>  {
                                    message.channel.awaitMessages(filter ,{ max: 1, time: 30000, errors: ['time'] })
                                    .then( collected => {

                                            konamiid = collected.first().content;
                                        })
                                   
                                                const newdata = new Data({
                                                    name: message.author.username,
                                                    userID: message.author.id,
                                                    ID: konamiid,
                                                })
                                                newdata.save().catch(err => console.log(err));
                                                message.channel.send(`${data.ID} `);
                                                data.ID = konamiid;
                                                message.channel.send(`Confirm Your Id as  ${konamiid} (yes/no) `).then(()=>{
                                                    message.channel.awaitMessages(filter ,{ max: 1, time: 30000, errors: ['time'] })
                                                    .then(collected => {
                                                        if ('yes' == collected.first().content || 'Yes' == collected.first().content){
                                                            data.save().catch(err => console.log(err));
                                                            message.reply('Your Id Has been set !');
                                                      
                                                        }else { 
                                                            message.channel.send('updation cancelled type p!id again to start');
                                                        }

                                                    })
                                                 
                                            

                                                })
                                               


                                })
                            } else { message.reply('Cancelled'); }
                        })


                }).catch(collected => {
                    message.channel.send('Command closed');
                });



            } else {
                return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.ID}`);
            }
        }
        )

    }
}





