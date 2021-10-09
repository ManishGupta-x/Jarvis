const prefixModel = require("../../models/prefix")
const mongoose = require("mongoose");
const config = require('../../../settings.json')
mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports.run = async (bot, message, args) => {
    const data = await prefixModel.findOne({
        GuildID: message.guild.id
    });
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.reply("You are not allowed to Change prefix you need \`Manage Messages Permission\` !")
        return;
    }
    if (!args[0]) return message.channel.send('You must provide a **new prefix**!');

    if (args[0].length > 5) return message.channel.send('Your new prefix must be under \`5\` characters!')

    if (data) {
        await prefixModel.findOneAndRemove({
            GuildID: message.guild.id
        })
        
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    } else if (!data) {
        message.channel.send(`The new prefix is now **\`${args[0]}\`**`);

        let newData = new prefixModel({
            Prefix: args[0],
            GuildID: message.guild.id
        })
        newData.save();
    }

}

module.exports.config = {
    name: "setprefix",
    Description: 'Command',
}