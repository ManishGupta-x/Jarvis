const Discord = require('discord.js');
const moment = require('moment');
const prefix = 'p!';
const mongoose = require('mongoose');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fetch = require("node-fetch").default;
const DisTube = require('distube');
client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true, youtubeCookie: '' });
client.disbut = require('discord-buttons')(client);



const emitter = require('events')
emitter.setMaxListeners(999)

client.distube
    .on("playSong", async (message, queue, song) => {

        var wallpapers = ["https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png"
            , "https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
            "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png", "https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png"]
        var mu = Math.floor(Math.random() * wallpapers.length);

        const playsong = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail(`${wallpapers[mu]}`)
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setTitle(`Now Playing`)
            .setDescription(`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\` `)

            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();
        let btn3 = new client.disbut.MessageButton()
            .setStyle('blurple')
            .setLabel('Nightcore')
            .setID('Nightcore')
            .setDisabled();
        let btn2 = new client.disbut.MessageButton()
            .setStyle('green')
            .setLabel('Bassboost')
            .setID('BB')
            .setDisabled();
        let btn = new client.disbut.MessageButton()
            .setStyle('red')
            .setLabel('Skip')
            .setID('Skip')
            .setDisabled();
        let msg = await message.channel.send({
            buttons: [
                btn, btn2, btn3
            ], embed: playsong
        })



    })
    .on("addSong", (message, queue, song) => {

        const addsong = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail(`${song.thumbnail}`)
            .setTitle(`Added to Queue`)
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\``)

            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(addsong)
    })
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
//  .on("searchResult", (message, result) => {
//      let i = 0;
//      message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
//  })
//  .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
//  .on("error", (message, e) => {
//        console.error(e)
//       message.channel.send("An error encountered: " + e);
//   })

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

client.leagues = new Discord.Collection();
const leaguesFiles = fs.readdirSync('./leagues/').filter(file => file.endsWith('.js'));
for (const file of leaguesFiles) {

    const command = require(`./leagues/${file}`);
    client.leagues.set(command.name, command);
}
client.music = new Discord.Collection();
const musicFiles = fs.readdirSync('./music/').filter(file => file.endsWith('.js'));
for (const file of musicFiles) {

    const command = require(`./music/${file}`);
    client.music.set(command.name, command);
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
    console.log('Jarvis is online!');
    client.user.setActivity('Boss 😎', { type: 'LISTENING' }).catch(console.error);

});
module.exports.timedcheck = undefined;
module.exports.val = 0;
j = 0;
var d = 0;

client.on('message', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    /* client.on('clickButton', async (button) => {
 
         process.on('error', async () => {
             if (button.id === 'Skip') {
                 await button.defer();
                 button.channel.send('Skipped')
                 client.music.get('skip').execute(client, message, args, Discord);
 
             } else if (button.id === 'BB') {
                 await button.defer();
                 client.music.get('bassboost').execute(client, message, args, Discord);
 
             } else if (button.id === 'Nightcore') {
                 await button.defer();
 
                 client.music.get('nightcore').execute(client, message, args, Discord);
 
             };
             return;
         })
     });*/





    if (message.author.bot) return;
    if (j === 1 && !message.content.startsWith(prefix) && message.channel.id === channelID) {
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
            .then(response => response.json())
            .then(data => {
                message.channel.send(data.response);
            })
            .catch(() => {
                message.channel.send("Hmmmmmmmmmm")
            })
    }


    if (message.mentions.members.first()) {
        if (message.mentions.members.first().id == '550267183503114250' || message.mentions.members.first().id == '852779571816562729') {
            if (d == 1 && message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') {
                message.reply("Your Love is studying at the moment janeman! He will come back soon 🥰 Till then Continue you studies janeman 😠")
            }
            else if (d == 1) {
                message.reply("Boss is studying at the moment he will be back soon! Be patient 👍 ")
            }
        }
    } else {

        if (message.content.startsWith(prefix)) {

            switch (command) {

                case 'ping':
                    client.commands.get('ping').execute(client, message, args, Discord);
                    break;
                case 'report':

                    client.commands.get('report').execute(client, message, args, Discord);
                    break;
                case 'mysquad':

                    client.commands.get('mysquad').execute(client, message, args, Discord);
                    break;
                case 'search':
                    client.commands.get('search').execute(client, message, args, Discord);
                    break;
                case 'fix':
                    client.music.get('fix').execute(client, message, args, Discord);
                    break;
                case 'play':
                    if (!args[0]) {
                        message.channel.send('Please Mention song!')
                        return;

                    }
                    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
                    const music = args.join(" ");

                    client.distube.play(message, music).catch(() => {

                        const embed4 = new Discord.MessageEmbed()
                            .setColor('#F0074F')
                            .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
                            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                            .setTitle(`Issue`)
                            .setDescription(`Try Again pls getting some Issues <3 || [Bot may need a restart type p!report] `)
                        message.channel.send(embed4);
                    })
                    break;
                case 'loop':
                    client.music.get('loop').execute(client, message, args, Discord);
                    break;
                case 'np':
                    client.music.get('np').execute(client, message, args, Discord);
                    break;
                case 'bassboost':
                    client.music.get('bassboost').execute(client, message, args, Discord);
                    break;
                case 'stop':
                    client.music.get('stop').execute(client, message, args, Discord);
                    break;
                case 'pause':
                    client.music.get('pause').execute(client, message, args, Discord);
                    break;
                case 'resume':
                    client.music.get('resume').execute(client, message, args, Discord);
                    break;
                case 'skip':
                    client.music.get('skip').execute(client, message, args, Discord);
                    break;
                case 'queue':
                    client.music.get('queue').execute(client, message, args, Discord);
                    break;
                case '3d':
                    client.music.get('3d').execute(client, message, args, Discord);
                    break;
                case 'echo':
                    client.music.get('echo').execute(client, message, args, Discord);
                    break;
                case 'music':
                    client.music.get('music').execute(client, message, args, Discord);
                    break;
                case 'vaporwave':
                    client.music.get('vaporwave').execute(client, message, args, Discord);
                    break;
                case 'nightcore':
                    client.music.get('nightcore').execute(client, message, args, Discord);
                    break;

                case 'av': client.commands.get('av').execute(client, message, args, Discord);
                    break;

                case 'fg_table': if (message.guild.id == '554275795280068619') {
                    const newEmbed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('FG Tourney Group Links')
                        .setThumbnail('https://cdn.discordapp.com/attachments/737883256128798800/853284175775924294/Snapshot_1.png')
                        .setAuthor('Jarvis', client.user.displayAvatarURL())
                        .addFields(

                            {
                                name: "1.Group Links For Groups 1 to 4 ", value: 'Table and Matchday Links for Group A, B, C, D'
                            },
                            { name: "2. Group Links For Groups 5 to 8", value: 'Table and Matchday Link for Group E, F, G, H' },



                        )
                        .setFooter("You have 45 secs to react!")
                    let msg = await message.channel.send(newEmbed)
                    await msg.react('1️⃣')
                    await msg.react('2️⃣')


                    await msg.awaitReactions((reaction, user) => user.id == user.id && user.id !== "778267007439077396" && (reaction.emoji.name == '1️⃣' ||

                        reaction.emoji.name == '2️⃣'), { max: 1, time: 45000 })
                        .then(async collected => {
                            if (collected.first().emoji.name == '1️⃣') { return client.commands.get('groupad').execute(client, message, args, Discord, msg); }
                            else if (collected.first().emoji.name == '2️⃣') { return client.commands.get('groupeh').execute(client, message, args, Discord, msg); }



                            else return message.channel.send('Time Up');





                        }).catch(async () => { return message.channel.send("error") });
                }
                    break;



                case 'bird': fetch(`https://api.monkedev.com/attachments/bird`)
                    .then(url => url.json())
                    .then(data => {
                        message.channel.send(data.url);
                    })

                    break;
                case 'monkey': fetch(`https://api.monkedev.com/attachments/monkey`)
                    .then(url => url.json())
                    .then(data => {
                        message.channel.send(data.url);
                    })

                    break;
                case 'bootup-jarvis': j = 1; message.channel.send('https://tenor.com/view/iron-man-sped-up-jarvis-gif-19148596');
                    message.reply(" Booted Up Succesfully! ")
                    channelID = message.channel.id;
                    break;
                case 'shutdown-jarvis': if (j === 0) {
                    message.channel.send("Jarvis is Already off")
                }
                else { j = 0; }
                    message.channel.send('https://tenor.com/view/turn-off-shut-off-switch-off-kill-the-lights-lights-off-gif-12198682');
                    message.reply("Nicely done! 🥳' ")
                    break;




                case 'welcome': if (message.guild.id == '554275795280068619') { client.commands.get('welcome').execute(message, args, Discord); }

                    break;

                case 'helpid': if (message.guild.id == '554275795280068619') client.commands.get('helpid').execute(message, args, Discord);
                    break;
                case 'nta': client.commands.get('nta').execute(message, args, Discord);

                    break;
                case 'remind': client.commands.get('remind').execute(client, message, args, Discord);

                    break;


                case 'helpremind':

                    const help = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('Jarvis', client.user.displayAvatarURL())
                        .setTitle('Remind Command')
                        .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/846735263345803284/636610343961500870-GettyImages-508896288.png')
                        .addFields(

                            {
                                name: "1. Syntax", value: 'p!remind [time] [task]'
                            },
                            { name: "2. How to write time ", value: 'Mention Time in either seconds or minutees or hours' },
                            { name: "3.Examples ", value: ` p!remind 10s Test \n p!remind 1m PLay \n p!remind 1h Class` },

                        )
                        .setFooter(client.user.username, client.user.displayAvatarURL())
                        .setTimestamp();
                    message.channel.send(help);

                    break;
                case 'rules': if (message.guild.id == '554275795280068619') { client.commands.get('rules').execute(message, args, Discord); }

                    break;

                case 'sg': if (message.guild.id == '554275795280068619') { client.commands.get('sg').execute(message, args, Discord); }

                    break;


                case 'setid': client.id.get('setid').execute(client, message, args, Discord);
                    break;
                case 'copyid': client.id.get('copyid').execute(client, message, args, Discord);
                    break;





                case 'id': client.id.get('id').execute(client, message, args, Discord);
                    break;

                case 'friendly': message.channel.send("Lawda ka friendly hai")

                    // if (message.member.roles.cache.has('754994039035789393') || message.member.roles.cache.has('754996150880305213') || message.member.roles.cache.has('599566802682511360') || message.member.roles.cache.has('754993523501170698') || message.member.roles.cache.has('758211941473714177'))
                    //     client.commands.get('friendly').execute(message, args, Discord, client);
                    // else client.commands.get('friendly1').execute(message, args, Discord, client);



                    break;
                case 'meme': client.commands.get('meme').execute(message, args, Discord);
                    break;
                case 'pes': message.reply('under maintenance')// client.commands.get('pes').execute(message, args, Discord);
                    break;
                case 'help-match': client.help.get('help-match').execute(message, args, Discord);
                    break;

                case 'lngrules': if (message.guild.id == '554275795280068619') { client.commands.get('lngrules').execute(message, args, Discord); }

                    break;
                case 'fping': if (message.guild.id == '554275795280068619') { client.commands.get('fping').execute(message, args, Discord); }

                    break;
                case 'botinfo': client.commands.get('botinfo').execute(message, args, Discord);
                    break;

                case 'youtube': if (message.guild.id == '554275795280068619') { client.commands.get('youtube').execute(message, args, Discord); }

                    break;
                case 'stumbleguys': if (message.guild.id == '554275795280068619') { client.commands.get('stumbleguys').execute(message, args, Discord); }

                    break;
                case 'official': client.commands.get('official').execute(message, args, Discord);
                    break;
                case 'twitter': client.commands.get('twitter').execute(message, args, Discord);
                    break;

                case 'ban': if (message.guild.id == '554275795280068619') client.commands.get('ban').execute(message, args, prefix, Discord);
                    break;

                case 'kick': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
                    return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

                    client.commands.get('kick').execute(message, args, Discord);
                    break;

                case 'gn': client.commands.get('gn').execute(message, args, Discord);
                    break;
                case 'mute': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('764536962156593162') && !message.member.roles.cache.has('610377914109788180'))
                    return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

                    client.commands.get('mute').execute(message, args, Discord);
                    break;
                case 'unmute': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
                    return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

                    client.commands.get('unmute').execute(message, args, Discord);
                    break;
                case 'gn': client.commands.get('gn').execute(message, args, Discord);
                    break;
                case 'htmlcodes': message.channel.send('https://htmlcolorcodes.com/')
                    break;
                case 'janeman':
                    client.commands.get('janeman').execute(client, message, args, Discord);


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
                        .setFooter(client.user.username, client.user.displayAvatarURL())
                    message.channel.send(userEmbed);
                    break;


            }

        } else {
            switch (message.content) {

                case 'hey jarvis': if (message.author.id == '550267183503114250' || message.guild.id == '730714810064306188') { message.channel.send("Yes Boss 🙃") }
                else message.channel.send('Hn bol bsdk 😒')
                    break;
                case 'jarvis': if (message.author.id == '550267183503114250' || message.guild.id == '730714810064306188') { message.channel.send("Yes Boss 🙃") }
                else message.channel.send('Hn bol bsdk 😒')
                    break;
                case "adnan short story": message.channel.send("https://cdn.discordapp.com/attachments/794240262972243979/860556430490468362/VID_20210701_195116_318.mp4")
                    break;
                case "jarvis expose cvm": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
                    break;
                case "jarvis expose shivam": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
                    break;
                case "study mode on": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {
                    message.reply("Activated Boss!!")
                    d = 1;
                }
                    break;
                case "study mode off": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {
                    message.reply("Deactivated Boss!!")
                    d = 0;
                } break;
            }
        }
    }

}


);



client.login(process.env.token);