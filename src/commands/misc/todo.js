const Discord = require("discord.js")
const disTube = require('distube');
const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args, Discord) => {


    let task = args.slice(0).join(" ");
    if (!task) {

        message.reply('Please Mention the Tasks You wanna Do!')
        return;
    }
        let data = await list.findOne({

            UserID: message.author.id
        });


        if (data) {
            data.list.unshift({
                User: message.author.id,
                Task: task,
            });
            data.save();

            message.channel.send({content :`Yours task \`${task}\` has been Added!`})
        } else if (!data) {
            let newData = new list({

                UserID: message.author.id,
                list: [{

                    User: message.author.id,
                    Task: task,
                },],
            });
            newData.save();

            message.channel.send({content :`Yours task has been Added!`})
        }













    
}

module.exports.config = {
    name: "todo",
    Description: 'Command',
}