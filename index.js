const Discord = require('discord.js');
const moment = require('moment');

const mongoose = require('mongoose');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })




const { MessageEmbed } = require('discord.js')
new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES'] } });

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

client.help = new Discord.Collection();
const helpFiles = fs.readdirSync('./help/').filter(file => file.endsWith('.js'));
for (const file of helpFiles) {

    const command = require(`./help/${file}`);
    client.help.set(command.name, command);
}

client.id = new Discord.Collection();
const idFiles = fs.readdirSync('./id/').filter(file => file.endsWith('.js'));
for (const file of idFiles) {

    const command = require(`./id/${file}`);
    client.id.set(command.name, command);
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

        case 'ping': client.commands.get('ping').execute(message, args, Discord);
            break;
         case 'snipe': client.commands.get('snipe').execute(client,message, args, Discord);
            break;
        case 'setid': client.id.get('setid').execute(client, message, args, Discord);
            break;
        case 'copyid': client.id.get('copyid').execute(client, message, args, Discord);
            break;





        case 'id': client.id.get('id').execute(client, message, args, Discord);
            break;

        case 'friendly':

            if (message.member.roles.cache.has('754994039035789393') || message.member.roles.cache.has('754996150880305213') || message.member.roles.cache.has('754993523501170698') || message.member.roles.cache.has('758211941473714177'))
                client.commands.get('friendly').execute(message, args, Discord, client);
            else client.commands.get('friendly1').execute(message, args, Discord, client);



            break;
        case 'meme': client.commands.get('meme').execute(message, args, Discord);
            break;
        case 'lngrules': client.commands.get('lngrules').execute(message, args, Discord);
            break;
        case 'fping': client.commands.get('fping').execute(message, args, Discord);
            break;
        case 'botinfo': client.commands.get('botinfo').execute(message, args, Discord);
            break;

        case 'youtube': client.commands.get('youtube').execute(message, args, Discord);
            break;
        case 'stumbleguys': client.commands.get('stumbleguys').execute(message, args, Discord);
            break;
        case 'official': client.commands.get('official').execute(message, args, Discord);
            break;
        case 'twitter': client.commands.get('twitter').execute(message, args, Discord);
            break;
        case 'freakcup': client.commands.get('freakcup').execute(message, args, Discord);
            break;
        case 'freakcup-qualifications': client.commands.get('freakcup-qualifications').execute(message, args, Discord);
            break;
        case 'laliga': client.commands.get('laliga').execute(message, args, Discord);
            break;
        case 'premleague': client.commands.get('premleague').execute(message, args, Discord);
            break;
        case 'div1': client.commands.get('div1').execute(message, args, Discord);
            break;
        case 'div2': client.commands.get('div2').execute(message, args, Discord);
            break;
        case 'div3': client.commands.get('div3').execute(message, args, Discord);
            break;
        case 'ucl': client.commands.get('ucl').execute(message, args, Discord);
            break;
        case 'clear': client.commands.get('clear').execute(message, args, Discord);
            break;
        case 'divisions': client.commands.get('divisions').execute(message, args, Discord);
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

        case 'rewards-armychoice': client.Rewards.get('rewards-armychoice').execute(message, args, Discord);
            break;
        case 'rewards-ucl': client.Rewards.get('rewards-ucl').execute(message, args, Discord);
            break;
        case 'rewards-freakcup': client.Rewards.get('rewards-freakcup').execute(message, args, Discord);
            break;
        case 'rewards-laliga': client.Rewards.get('rewards-laliga').execute(message, args, Discord);
            break;
        case 'rewards-premleague': client.Rewards.get('rewards-premleague').execute(message, args, Discord);
            break;
        case 'rewards-divisions': client.Rewards.get('rewards-divisions').execute(message, args, Discord);
            break;
        case 'rewards-mainko': client.Rewards.get('rewards-mainko').execute(message, args, Discord);
            break;
        case 'ban': client.commands.get('ban').execute(message, args, prefix, Discord);
            break;
        case 'kick': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
            return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

            client.commands.get('kick').execute(message, args, Discord);
            break;

        case 'gn': client.commands.get('gn').execute(message, args, Discord);
            break;
        case 'mute': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
            return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

            client.commands.get('mute').execute(message, args, Discord);
            break;
        case 'unmute': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
            return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

            client.commands.get('unmute').execute(message, args, Discord);
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

        case 'timer': client.commands.get('timer').execute(message, args, Discord);
            break;
        case 'roleinfo': client.help.get('6').execute(message, args, Discord);
            break;
        case 'help': {

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#6beea8')
                .setTitle('Help Module')
                .setDescription('Server\'s Info And Commands')
                .addFields(

                    {
                        name: "1. General Commands ", value: `Gives Info for General commands like ping 
                 , twitter , friendly,Other Websites...etc`},
                    { name: "2. Rewards", value: `Gives Info for Rewards Commands` },

                    { name: "3. Tourneys Info And Rules", value: `Gives Info and rules for Tourneys ` },
                    { name: "4. Deadline Commands ", value: `Gives Info for Deadline Commands` },
                    { name: "5. Server Competitions", value: `Gives Info For Our Server Competetions` },
                    { name: "6. Server Roles", value: `Gives Info for For diffrents roles on the server :)` }





                )
                .setFooter(`You can only React for one at a time`)
                .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg');


            let msg = await message.channel.send(newEmbed)
            await msg.react('1️⃣')
            await msg.react('2️⃣')
            await msg.react('3️⃣')
            await msg.react('4️⃣')
            await msg.react('5️⃣')
            await msg.react('6️⃣')
            await msg.awaitReactions((reaction, user) => user.id == user.id && user.id !== "778267007439077396" && (reaction.emoji.name == '1️⃣' ||

                reaction.emoji.name == '2️⃣' || reaction.emoji.name == '3️⃣' || reaction.emoji.name == '4️⃣' || reaction.emoji.name == '5️⃣' || reaction.emoji.name == '6️⃣'), { max: 1, time: 40000 })
                .then(async collected => {
                    if (collected.first().emoji.name == '1️⃣') { return client.help.get('1').execute(message, args, Discord) }
                    else if (collected.first().emoji.name == '2️⃣') { return client.help.get('2').execute(message, args, Discord) }
                    else if (collected.first().emoji.name == '3️⃣') { return client.help.get('3').execute(message, args, Discord) }
                    else if (collected.first().emoji.name == '4️⃣') { return client.help.get('4').execute(message, args, Discord) }
                    else if (collected.first().emoji.name == '5️⃣') { return client.help.get('5').execute(message, args, Discord) }
                    else if (collected.first().emoji.name == '6️⃣') { return client.help.get('6').execute(message, args, Discord) }
                    else return message.channel.send('Time Up');





                }).catch(async () => { return message.channel.send("error") });

        }


            break;
        case 'match':

            var player1 = Math.floor(Math.random() * 4);
            var player2 = Math.floor(Math.random() * 4);

            let question1 = message.content.slice(prefix.length + 6)
            if (!question1) {

                return message.channel.send('You didnt specified a match to generate')
            }
            const Embed1 = new Discord.MessageEmbed()
                .setColor('#00f1ff')
                .setTitle("Results ")
                .setDescription(question1 + "\n" + player1 + '-' + player2)

            message.channel.send(Embed1);

            message.delete({ timeout: 2000 })
            break;

        case 'info':

            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.member;



            if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
            if (member.presence.status === 'online') member.presence.status = 'Online';
            if (member.presence.status === 'idle') member.presence.status = 'Idle';
            if (member.presence.status === 'offline') member.presence.status = 'offline';

            let x = Date.now() - member.createdAt;
            let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
            const joined = Math.floor(y / 86400000);

            const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
            let status = member.presence.status;

            const userEmbed = new Discord.MessageEmbed()
                .setAuthor(member.user.tag, member.user.displayAvatarURL())
                .setTimestamp()
                .setColor('#f7331a')
                .setImage(member.user.displayAvatarURL())
                .addField("Member ID", member.id)

                .addField("Account Created On:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
                .addField('Joined the server At', `${joineddate} \n> ${joined} day(S) Ago`)
                .addField("Status", status)
                .addField('Roles', `<@&${member._roles.join('> <@&')}>`)

            message.channel.send(userEmbed);
            break;


    }

}




);



client.login(process.env.token); 