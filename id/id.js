

const fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });




const Data = require('../id/data.js');


module.exports = {
    name: 'id',
    Description: 'this is a  Ping command!',
    async execute(client, message, args, Discord){


        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.cache.get(mention);
            }
        }

        if (!args[0]) {

            user = message.author;
        }
        else if(args[0]){
            user = getUserFromMention(args[0]);
        
            
        }
        if (!args[0]){
        Data.findOne({
            userID : user.id 
        }, (err, data) => {
            if (err) console.log(err);
            if (!data) { message.reply(' No Id in record type p!setid')}else{
                
       return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.Konami}`);}
    })}else if(args[0]){
        Data.findOne({
            userID : user.id
        }, (err, data) => {
            if (err) console.log(err);
            if (!data) { message.reply(' No Id in record type p!setid')}else{
                
       return message.channel.send(`${client.users.cache.get(user.id).username}'s Id ${data.Konami}`);}
    })}
    
}
}  
