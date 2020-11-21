const Discord = require('discord.js');

const client = new Discord.Client();

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


client.once('ready', () => {
    console.log('Nightmare is online!');
    client.user.setActivity('PES 2021', { type: 'PLAYING' }).catch(console.error);

});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch (args[0]) {


        case 'ping':

            client.commands.get('ping').execute(message, args, Discord);
            break;

        case 'youtube':

            client.commands.get('youtube').execute(message, args, Discord);
            break;

        case 'official':

            client.commands.get('official').execute(message, args, Discord);
            break;

        case 'twitter':

            client.commands.get('twitter').execute(message, args, Discord);
            break;

        case 'freakcup':

            client.commands.get('freakcup').execute(message, args, Discord);
            break;

        case 'div':

            client.commands.get('div').execute(message, args, Discord);
            break;

        case 'clear':

            client.commands.get('clear').execute(message, args, Discord);
            break;

        case 'division':

            client.commands.get('divisons').execute(message, args, Discord);
            break;

        case 'deadline-mainko':

            client.deadline.get('deadline-mainko').execute(message, args, Discord);
            break;

        case 'main-squadko':

            client.commands.get('main-squadko').execute(message, args, Discord);
            break;

        case 'deadline-freakcup':

            client.deadline.get('deadline-freakcup').execute(message, args, Discord);
            break;

        case 'deadline-ucl':

            client.deadline.get('deadline-ucl').execute(message, args, Discord);
            break;

        case 'deadline-laliga':

            client.deadline.get('deadline-laliga').execute(message, args, Discord);
            break;

        case 'deadline-premleague':

            client.deadline.get('deadline-premleague').execute(message, args, Discord);
            break;

        case 'kick':
           
            const user = message.mentions.users.first();

            if (user) {

                const member = message.guild.member(user);
                if (member) {
                    member.kick('You where Kicked from freak gamer').then(() => {
                        message.reply(`Sucessfully kicked ${user.tag} https://tenor.com/view/kids-bye-kick-gif-13210062`);
                    }).catch(err => {
                        message.reply(' I was unable to kick thhe Member');
                        console.log(err);


                    });
                } else {
                    message.reply("That user isn\'t in this guild")
                }
            } else {

                message.reply("You need to specify a Person!")
            }
            break;



    }







});

client.login(process.env.token);