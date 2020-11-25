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


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {

        client.commands.get('ping').execute(message, args);

    } else if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args, Discord);

    } else if (command === 'official') {

        client.commands.get('official').execute(message, args, Discord);
    } else if (command === 'twitter') {

        client.commands.get('twitter').execute(message, args, Discord);

    } else if (command === 'freakcup') {
        client.commands.get('freakcup').execute(message, args, Discord);
    } else if (command === 'div1') {
        client.commands.get('div1').execute(message, args, Discord);
    } else if (command === 'div2') {
        client.commands.get('div2').execute(message, args, Discord);
    }else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command === 'divisions') {
        client.commands.get('divisions').execute(message, args, Discord);
    } else if (command === 'deadline-mainko') {
        client.deadline.get('deadline-mainko').execute(message, args, Discord);
    } else if (command === 'main-squadko') {
        client.commands.get('main-squadko').execute(message, args, Discord);
    } else if (command === 'deadline-freakcup') {
        client.deadline.get('deadline-freakcup').execute(message, args, Discord);
    } else if (command === 'deadline-ucl') {
        client.deadline.get('deadline-ucl').execute(message, args, Discord);
    } else if (command === 'deadline-laliga') {
        client.deadline.get('deadline-laliga').execute(message, args, Discord);
    } else if (command === 'deadline-premleague') {
        client.deadline.get('deadline-premleague').execute(message, args, Discord);
    }
    
    else if (command === 'rewards-freakcup') {
        client.Rewards.get('rewards-freakcup').execute(message, args, Discord);
    } else if (command === 'rewards-ucl') {
        client.Rewards.get('rewards-ucl').execute(message, args, Discord);
    } else if (command === 'rewards-laliga') {
        client.Rewards.get('rewards-laliga').execute(message, args, Discord);
    } else if (command === 'rewards-premleague') {
        client.Rewards.get('rewards-premleague').execute(message, args, Discord);
    }else if (command === 'rewards-mainko') {
        client.Rewards.get('rewards-mainko').execute(message, args, Discord);
    }
    else if (command === 'kick') {

       

        const user = message.mentions.users.first();

        if(!message.member.roles.cache.has(r => r.name === "Bot Manager") || !message.member.roles.cache.has(r => r.name === "🎖️│Freaky Staff") )
        return message.channel.send('YOU DONT HAVE PERMISSION TO THAT ').then(message => message.delete({timeout: 4000}));
        
        if (user) {

            const member = message.guild.member(user);
            if (member) {
                member.kick('You where Kicked from freak gamer').then(() => {
                    message.reply(`Sucessfully kicked ${user.tag} \nhttps://tenor.com/view/kids-bye-kick-gif-13210062`);
                }).catch(err => {
                    message.reply(' I was unable to kick the Member');
                    console.log(err);


                });
            } else {
                message.reply("That user isn\'t in this guild")
            }
        } else {

            message.reply("You need to specify a Person!")
        }
    }   else if (command === 'gn') {
            client.commands.get('gn').execute(message, args, Discord);

    
   }
    
});


client.login(process.env.token);