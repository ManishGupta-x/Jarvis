const Discord = require('discord.js');

const client = new Discord.Client();
const { MessageEmbed } = require('discord.js')

const prefix = 'p!';
const fs = require('fs');
const { disconnect } = require('process');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {

    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.deadline = new Discord.Collection();
const deadlineFiles = fs.readdirSync('./deadline/').filter(file => file.endsWith('.js'));
for (const file of deadlineFiles) {

    const command = require(`./deadline/${file}`);
    client.deadline.set(command.name, command);
}
client.Rewards = new Discord.Collection();
const RewardsFiles = fs.readdirSync('./Rewards/').filter(file => file.endsWith('.js'));
for (const file of RewardsFiles) {

    const command = require(`./Rewards/${file}`);
    client.Rewards.set(command.name, command);
}


client.once('ready', () => {
    console.log('Nightmare is online!');
    client.user.setActivity('PES 2021', { type: 'PLAYING' }).catch(console.error);

});
module.exports.timedcheck = undefined;
module.exports.val = 0;


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    switch (command) {

        case 'ping': client.commands.get('ping').execute(message, args);
            break;
        case 'youtube': client.commands.get('youtube').execute(message, args);
            break;
        case 'official': client.commands.get('official').execute(message, args);
            break;
        case 'twitter': client.commands.get('twitter').execute(message, args);
            break;
        case 'freakcup': client.commands.get('freakcup').execute(message, args);
            break;
        case 'div1': client.commands.get('div1').execute(message, args);
            break;
        case 'div2': client.commands.get('div2').execute(message, args);
            break;
        case 'clear': client.commands.get('clear').execute(message, args);
            break;
        case 'divisions': client.commands.get('divisions').execute(message, args);
            break;
        case 'deadline-mainko': client.deadline.get('deadline-mainko').execute(message, args, Discord);
            break;
        case 'deadline-freakcup': client.deadline.get('deadline-freakcup').execute(message, args, Discord);
            break;
        case 'deadline-ucl': client.deadline.get('deadline-ucl').execute(message, args, Discord);
            break;
        case 'deadline-laliga': client.deadline.get('deadline-laliga').execute(message, args, Discord);
            break;
        case 'deadline-premleague': client.deadline.get('deadline-premleague').execute(message, args, Discord);
            break;
        case 'main-squadko': client.commands.get('main-squadko').execute(message, args, Discord);
            break;
        case 'rewards-freakcup': client.Rewards.get('rewards-freakcup').execute(message, args, Discord);
            break;
        case 'rewards-ucl': client.Rewards.get('rewards-ucl').execute(message, args, Discord);
            break;
        case 'rewards-laliga': client.Rewards.get('rewards-laliga').execute(message, args, Discord);
            break;
        case 'rewards-premleague': client.Rewards.get('rewards-premleague').execute(message, args, Discord);
            break;
        case 'rewards-mainko': client.Rewards.get('rewards-mainko').execute(message, args, Discord);
            break;
        case 'kick': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
            return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

            client.commands.get('kick').execute(message, args, Discord);
            break;

        case 'gn': client.commands.get('gn').execute(message, args, Discord);
            break;
        case 'mute': client.commands.get('mute').execute(message, args, Discord);
            break;
        case 'unmute': client.commands.get('unmute').execute(message, args, Discord);
            break;
        case 'gn': client.commands.get('gn').execute(message, args, Discord);
            break;

        case 'poll': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
            return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 })).catch(console.error);
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

            if (!channel) {


                return message.channel.send('You did not mention / give the id of the channel you wanted to create the poll in!')
            }

            let question = message.content.slice(prefix.length + 5 + channel.id.length + 3)
            if (!question) {

                return message.channel.send('You didnt specified a question for the poll')
            }
            const Embed = new MessageEmbed()
                .setColor('#00f1ff')
                .setTitle("Who will win 🤔")
                .setDescription(question)
                .setFooter(`Mark The correct Option Below 🤩`)
            let msg = await client.channels.cache.get(channel.id).send(Embed)
            await msg.react('1️⃣')
            await msg.react('2️⃣')
            await msg.react('🤝')
            message.delete({ timeout: 2000 })
            break;

        case 'bday': client.commands.get('bday').execute(message, args, Discord);
            break;
    }

}




);


client.login(process.env.token);