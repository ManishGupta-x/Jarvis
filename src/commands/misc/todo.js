const Discord = require("discord.js")
const disTube = require('distube');
const config = require('../../../settings.json')
mongoose.connect(config.todo, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args, Discord) => {


    let task = args.slice(0).join(" ");
    if (!task) {

        message.reply('Please Mention the Tasks You wanna Do!')

        let data = await list.findOne({

            userID: message.author.id
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

                userID: message.author.id,
                list: [{

                    User: message.author.id,
                    Task: task,
                },],
            });
            newData.save();

            message.channel.send({content :`Yours task has been Added!`})
        }













    }
}

module.exports.config = {
    name: "todo",
    Description: 'Command',
}