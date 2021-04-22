const Discord = require('discord.js');
const moment = require('moment');
const prefix = 'p!';
const mongoose = require('mongoose');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fetch = require("node-fetch").default;

mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })




const { MessageEmbed } = require('discord.js')
new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES'] } });


const fs = require('fs');
const { disconnect } = require('process');
client.commands = new Discord.Collection();
client.snipes = new Discord.Collection();
//client.events = new Discord.Collection();

//['command_handler' , 'event_handler'].forEach(handler => {

//   require(`./handlers/${handler}`)(client ,Discord);
//})
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
    console.log(' The Jarvis is online!');
    client.user.setActivity('HBD Boss 🥳', { type: 'PLAYING' }).catch(console.error);

});
module.exports.timedcheck = undefined;
module.exports.val = 0;
var j = 0;

client.on('message', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
     

    if (message.author.bot) return; 
    if (j===1) {
    fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
    .then(response => response.json())
   .then(data => {
   message.channel.send(data.response);
    })
.catch(() => {
message.channel.send("Hmmmmmmmmmm")
})}
  
 

    switch (command) {

        case 'ping':
            client.commands.get('ping').execute(message, args, Discord);
            break;
       case 'bootup-jarvis': j=1; message.channel.send('booted up Succesfully! Ready to Talk')
                             
          break;
        case 'deactivate-Jarvis': j=0; message.channel.send('Deactivated succesfully')
                             
          break;
        

        case 'welcome': if (message.guild.id == '554275795280068619') { client.commands.get('welcome').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;

        case 'helpid': client.commands.get('helpid').execute(message, args, Discord);
            break;
        case 'nta': client.commands.get('nta').execute(message, args, Discord);

            break;
        case 'rules': if (message.guild.id == '554275795280068619') { client.commands.get('rules').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'bbtourney': if (message.guild.id == '554275795280068619') { client.commands.get('bbtourney').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }

            break;

        case 'sg': if (message.guild.id == '554275795280068619') { client.commands.get('sg').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;


        case 'setid': client.id.get('setid').execute(client, message, args, Discord);
            break;
        case 'copyid': client.id.get('copyid').execute(client, message, args, Discord);
            break;





        case 'id': client.id.get('id').execute(client, message, args, Discord);
            break;

        case 'friendly':

            if (message.member.roles.cache.has('754994039035789393') || message.member.roles.cache.has('754996150880305213') || message.member.roles.cache.has('599566802682511360') || message.member.roles.cache.has('754993523501170698') || message.member.roles.cache.has('758211941473714177'))
                client.commands.get('friendly').execute(message, args, Discord, client);
            else client.commands.get('friendly1').execute(message, args, Discord, client);



            break;
        case 'meme': client.commands.get('meme').execute(message, args, Discord);
            break;
        case 'pes': message.reply('under maintenance')// client.commands.get('pes').execute(message, args, Discord);
            break;
        case 'help-match': client.help.get('help-match').execute(message, args, Discord);
            break;

        case 'lngrules': if (message.guild.id == '554275795280068619') { client.commands.get('lngrules').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'fping': if (message.guild.id == '554275795280068619') { client.commands.get('fping').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'botinfo': client.commands.get('botinfo').execute(message, args, Discord);
            break;

        case 'youtube': if (message.guild.id == '554275795280068619') { client.commands.get('youtube').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'stumbleguys': if (message.guild.id == '554275795280068619') { client.commands.get('stumbleguys').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'official': client.commands.get('official').execute(message, args, Discord);
            break;
        case 'twitter': client.commands.get('twitter').execute(message, args, Discord);
            break;
        case 'freakcup': if (message.guild.id == '554275795280068619') { client.commands.get('freakcup').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'freakcup-qualifications': if (message.guild.id == '554275795280068619') { client.commands.get('freakcup-qualifications').execute(message, args, Discord); }
            break;
        case 'laliga': if (message.guild.id == '554275795280068619') { client.commands.get('laliga').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'premleague': if (message.guild.id == '554275795280068619') { client.commands.get('premleague').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'worldcup': if (message.guild.id == '554275795280068619') { client.commands.get('worldcup').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'div1': if (message.guild.id == '554275795280068619') { client.commands.get('div1').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'div2': if (message.guild.id == '554275795280068619') { client.commands.get('div2').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'div3': if (message.guild.id == '554275795280068619') { client.commands.get('div3').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'ucl': if (message.guild.id == '554275795280068619') { client.commands.get('ucl').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'clear': if (message.guild.id == '554275795280068619') { client.commands.get('clear').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'divisions': if (message.guild.id == '554275795280068619') { client.commands.get('divisions').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline-mainko': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline-mainko').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline-freakcup': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline-freakcup').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline-ucl': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline-ucl').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline-worldcup': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline-worldcup').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline-laliga': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline-laliga').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline-premleague': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline-premleague').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'deadline-bbtourney': if (message.guild.id == '554275795280068619') { client.deadline.get('deadline-bbtourney').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'main-squadko': if (message.guild.id == '554275795280068619') { client.commands.get('main-squadko').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;

        case 'help-rewards': if (message.guild.id == '554275795280068619') { client.help.get('help-rewards').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;

        case 'rewards-armychoice': if (message.guild.id == '554275795280068619') { client.Rewards.get('rewards-armychoice').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'rewards-ucl': if (message.guild.id == '554275795280068619') { client.Rewards.get('rewards-ucl').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'rewards-freakcup': if (message.guild.id == '554275795280068619') { client.Rewards.get('rewards-freakcup').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'rewards-laliga': if (message.guild.id == '554275795280068619') { client.Rewards.get('rewards-laliga').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'rewards-premleague': if (message.guild.id == '554275795280068619') { client.Rewards.get('rewards-premleague').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'rewards-divisions': if (message.guild.id == '554275795280068619') { client.Rewards.get('rewards-divisions').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
            break;
        case 'rewards-mainko': if (message.guild.id == '554275795280068619') { client.Rewards.get('rewards-mainko').execute(message, args, Discord); }
        else {
            message.reply('Command restricted to Freak Gamer server')
        }
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
                .setColor('RANDOM')
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
        case 'futhead': {

            const newEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Futhead Links')
                .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
                .addFields(

                    {
                        name: "1. Player List Link ", value: 'Get List of Players which can be filtered'
                    },
                    { name: "2. Compare cards Link", value: 'Compare 2 or 3 Different Cards' },

                )
            let msg = await message.channel.send(newEmbed)
            await msg.react('1️⃣')
            await msg.react('2️⃣')

            await msg.awaitReactions((reaction, user) => user.id == user.id && user.id !== "778267007439077396" && (reaction.emoji.name == '1️⃣' ||

                reaction.emoji.name == '2️⃣'), { max: 1, time: 40000 })
                .then(async collected => {
                    if (collected.first().emoji.name == '1️⃣') { return message.channel.send('https://www.futhead.com/21/players/?bin_platform=ps') }
                    else if (collected.first().emoji.name == '2️⃣') { return message.channel.send('https://www.futhead.com/compare/') }


                    else return message.channel.send('Time Up');





                }).catch(async () => { return message.channel.send("error") });
            break;

        }
        case 'help': if (message.guild.id == '554275795280068619'){

            const newEmbed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Help Module')
                .setAuthor('Freak Gamer', 'https://cdn.discordapp.com/avatars/549989000115519503/e745abd8a0a5b7fd392d51a5a431755e.png?size=256')
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

                reaction.emoji.name == '2️⃣' || reaction.emoji.name == '3️⃣' || reaction.emoji.name == '4️⃣' || reaction.emoji.name == '5️⃣' || reaction.emoji.name == '6️⃣' || reaction.emoji.name == '↩️'), { max: 1, time: 40000 })
                .then(async collected => {
                    if (collected.first().emoji.name == '1️⃣') { return client.help.get('1').execute(message, args, Discord, msg) }
                    else if (collected.first().emoji.name == '2️⃣') { return client.help.get('2').execute(message, args, Discord, msg) }
                    else if (collected.first().emoji.name == '3️⃣') { return client.help.get('3').execute(message, args, Discord, msg) }
                    else if (collected.first().emoji.name == '4️⃣') { return client.help.get('4').execute(message, args, Discord, msg) }
                    else if (collected.first().emoji.name == '5️⃣') { return client.help.get('5').execute(message, args, Discord, msg) }
                    else if (collected.first().emoji.name == '6️⃣') { return client.help.get('6').execute(message, args, Discord, msg) }

                    else return message.channel.send('Time Up');





                }).catch(async () => { return message.channel.send("error") });

        }else {
            message.reply('Customised for Freak game server Only ')
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