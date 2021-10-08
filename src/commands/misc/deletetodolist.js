const Discord = require("discord.js")
const mongoose = require("mongoose");
const config = require('../../../settings.json');
const data = require("../../models/data");
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args, Discord) => {
    let data = await list.findOne({

        UserID: message.author.id
    });

    if(data){
             message.reply('Are you sure u awnt to delete your todo list? yes/no')
        const filter = m => m.author.id == message.author.id;
        const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
        const response = collected.first().content;
        if(response == 'yes' || response == 'Yes' || response == 'YES' ){


        }else if( response == 'no' || response == 'No' || response == 'NO' ){
                
            message.reply('Data recovered 😒!')
        }else {

            message.reply('Invalid Reply -_-')
        }

        list.findOneAndDelete({
            UserID: message.author.id

        }, (err, res) => {
            if(err) console.log(err)
          message.channel.send({content : 'Data Deleted Successfully! '})
          })
   }
    if(!data){

        message.reply('Sorry you dont have any task to do 😥')
    }
}

module.exports.config = {
    name: "deletetodolist",
    Description: 'Command',
}