

const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });




const Data = require('../id/data.js');


module.exports = {
    name: 'id',
    Description: 'this is a  Ping command!',
    async execute(client, message, args, Discord){

        if (!args[0]) {

            user = message.author;
        }
        else if(args[0]){
            let user = message.mentions.members.first() || client.members.cache.get(args[0])
            await message.channel.send(`${client.users.cache.get(user).id}`)
        }
        Data.findOne({
            userID : user.id 
        }, (err, data) => {
            if (err) console.log(err);
            if (!data) { message.reply(' No Id in record type p!setid')}else{
                
       return message.channel.send(`${client.users.cache.get(user).id}'s Id ${data.Konami}`);}
    })
}
}
