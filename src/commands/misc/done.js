const Discord = require("discord.js")

const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
const list = require('../../models/todolist');
module.exports.run = async (client, message, args,Discord) => {
    
if(!args[0] || isNaN(args[0])){

    message.reply('Mention the Task Number you have done Eg : p!done 1');
    return;
}

    let data = await list.findOne({

        UserID: message.author.id
    });

    if (data) {
        let taskno = args[0] ; 
        let state = '❌';
        let state1 = '✔️';
list[taskno].updateOne({

    status : state,
    
},{
     status : state1,
   
})
        
        
     
       
    }else if (!data) {
      


    }


}

module.exports.config = {
    name: "done",
    Description: 'Command',
}