
const Discord = require("discord.js")
const { OpenAI } = require('openai');
const config = require('../../../settings.json');
const errChannel = "918106499203616788";
module.exports.run = async (client, message, args,Discord) => {
    
    console.log(config.apiKey);
    const openai = new OpenAI({

        apiKey: config.apiKey,
    });

    await message.channel.sendTyping();

    const sendTypingInterval = setInterval(async () => {

        message.channel.sendTyping();
    }, 4000);

    const response = await openai.chat.completions.create({

        model: 'gpt-3.5-turbo',
        messages: [
            {
                //name : 
                role: 'system',
                content : 'mah Boi Chatgpt'
            },
            {
                //name:
                role: 'user',
                content: message.content
            }
        ]
    }).catch(error => {

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Error Boss")

        .setAuthor(
            "Jarvis",
            "https://cdn.discordapp.com/avatars/778267007439077396/b3f9ab1c6342de220b333fcbdff93ec5.png?size=256"
        )
        .setDescription("\n\n**ERROR**\n\n ```" + error  + "```")

        .setFooter(`Anti Crash System`)
        .setTimestamp();
         client.channels.cache.get(errChannel).send({ embeds: [embed] });
         message.channel.send("Sorry ! Gpt cant find answer for that ! error recorded !")
    });

    clearInterval(sendTypingInterval);
    if (!response) {
        
        message.channel.send("Sorry ! Gpt cant find answer for that ! error recorded !")
        return;
    }
    message.reply(response.choices[0].message.content);
}

module.exports.config = {
    name: "gpt",
    aliases: [],
    Description: 'Command',
}