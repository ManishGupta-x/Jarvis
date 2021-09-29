const Discord = require('discord.js');
const moment = require('moment');
const prefix = 'p!';
const mongoose = require('mongoose');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS'] });
const fetch = require("node-fetch").default;
const { DisTube } = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
client.distube = new DisTube(client, {
    emitNewSongOnly: true, plugins: [new SpotifyPlugin({
        parallel: true,
        emitEventsAfterFetching: false,



    })], customFilters: { "8d": "apulsator=hz=0.08" }, leaveOnFinish: false, emptyCooldown: 15, leaveOnEmpty: true, leaveOnStop: false, youtubeCookie: 'VISITOR_INFO1_LIVE=VizaEEKSaKU; CONSENT=YES+IN.en-GB+202003; HSID=AkXW3VgkDmwLdXppv; SSID=ABztr9AiYhzU3cims; APISID=ISlgWkeBCPS4FVpU/AvUkKq2Y5as3oxS5w; SAPISID=T679YjYmlQBtggOQ/ARd21Lsm08R60aQxc; __Secure-1PAPISID=T679YjYmlQBtggOQ/ARd21Lsm08R60aQxc; __Secure-3PAPISID=T679YjYmlQBtggOQ/ARd21Lsm08R60aQxc; PREF=f6=40000000&volume=100&tz=Asia.Calcutta&al=en&f5=30000; SID=BgjH_Kc2ABFMQu5bLy2syWFiJtPl2bOqI4gLDwmVnCXLmjzm-75v8zEUbkM-Fo42HHtsAw.; __Secure-1PSID=BgjH_Kc2ABFMQu5bLy2syWFiJtPl2bOqI4gLDwmVnCXLmjzmSwyewdsV5rUu2dwol9JkHQ.; __Secure-3PSID=BgjH_Kc2ABFMQu5bLy2syWFiJtPl2bOqI4gLDwmVnCXLmjzm5Yk-KzCTNlH-9DSJJAMa2g.; LOGIN_INFO=AFmmF2swRQIhAOAj5hxBaepKf2QWAhyxRsQ5qVM6AsWFNCuhOrLqYbwdAiAgEelIbJr9T2CTnJ_r_A1CpNZOhD5lH083xqIr83DoOQ:QUQ3MjNmdzl3dnFBalF2d1F6N3gxQ1F0cG9CV2hSMXZaTkpRU1NWN0RialZqVXNDcnlkUlNYODJLbFFuNnVnOXVaS2xVaWpCc2JpUXFJbE1EVGpzRlJhZzhqMmR0UXFZRnJzR1dzUW5jdG14UE82MjdzVlJzMGt6UF9mcVlpYnEzQklEbjFTQnFwa3VjOGRzS2FaNjdLWWhtMGpUYmtJSXFB; YSC=__AMedv__lI; SIDCC=AJi4QfH4YiFJJLPF53VeLb73e5CmQ1rF-8jYPZBKsDwUPGX-QBv06-a44iNU2Zvf-SXwz8O_7Jco; __Secure-3PSIDCC=AJi4QfGxy3tYK9mYe4YxsvsB5__Q5dbyTF5LxF1JEj6Nlomf4xxUeDIkX7FrjZuxelpdByFZ9WyK'
});

var flag = 0;
const emitter = require('events')
emitter.setMaxListeners(999)

client.distube
    .on("playSong", async (queue, song) => {

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

            .setFooter(`p!np For More Features`, client.user.displayAvatarURL())
            .setTimestamp();




        queue.textChannel.send({ embeds: [playsong] })








    })






    .on("addSong", (queue, song) => {

        const addsong = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail(`${song.thumbnail}`)
            .setTitle(`Added to Queue`)
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\``)

            .setFooter(`p!music for Command List`, client.user.displayAvatarURL())
            .setTimestamp();

        queue.textChannel.send({ embeds: [addsong] });
    })
    .on("searchResult", (message, results) => {
        message.channel.send(`**Choose an option from below**\n${results.map((song, i) => `**${i + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")
            }\n*Enter anything else or wait 60 seconds to cancel*`);
    }).on("searchDone", (message) => message.channel.send(`Search Done!`))
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("searchInvalidAnswer", (message) => message.channel.send(`You answered an invalid `))
    .on("searchNoResult", (message, query) => message.channel.send(`No result found for ${query}!`))
    .on("noRelated", queue => queue.textChannel.send("Can't find related video to play."))



mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })




const { MessageEmbed } = require('discord.js')



const fs = require('fs');
const { disconnect } = require('process');
client.commands = new Discord.Collection();
client.snipes = new Discord.Collection();

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


    let statusarray = [

        `${client.guilds.cache.size} Servers`,
        `${client.channels.cache.size} Channels`,
        `${client.users.cache.size} Users`,
        `p!music for help `

    ]
    setInterval(() => {

        client.user.setActivity(`${statusarray[Math.floor(Math.random() * statusarray.length)]}`, { type: 'WATCHING' })

    }, 10000)

});
module.exports.timedcheck = undefined;
module.exports.val = 0;
j = 0;
var d = 0;
client.on('guildCreate', guild => {
    guild.systemChannel.send(`Hello, I'm Jarvis a Pro Music Bot. Thanks for inviting me, Type \`p!music\` To get started`)
});
client.on('messageCreate', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (message.author.bot) return;
    if (j === 1 && !message.content.startsWith(prefix) && message.channel.id === channelID) {
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
            .then(response => response.json())
            .then(data => {
                message.channel.send({ content: data.response });
            })
            .catch(() => {
                message.channel.send({ content: "Hmmmmmmmmmm" })
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
                    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });

                    var wallpapers = ["https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284561726308372/433536-Klayton-women-science_fiction-planet-Scandroid.png"
                        , "https://cdn.discordapp.com/attachments/730714810614022228/882284789145677854/Drum-Instrument-Neon-HD-Wallpapers-Free-Download.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png",
                        "https://cdn.discordapp.com/attachments/730714810614022228/882284227457073172/thumb2-music-neon-icon-4k-violet-background-neon-symbols-music.png", "https://cdn.discordapp.com/attachments/730714810614022228/882284384202395678/neon-wallpaper-2008181520192-scaled.png", "https://cdn.discordapp.com/attachments/730714810614022228/882283761868357682/edm-house-music-dj-producer-beatmaker-wallpaper-hd-4k-desktop-6-2048x1080.png"]
                    var mu = wallpapers[Math.floor(Math.random() * wallpapers.length)];


                    const searchsong = args.join(" ");
                    if (!searchsong) {
                        message.reply('Pls mention song to search')
                    } if (searchsong) {

                        const result = await client.distube.search(searchsong, { limit: 15 });

                        const embed9 = new Discord.MessageEmbed()
                            .setColor('RANDOM')
                            .setThumbnail(`${mu}`)
                            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                            .setDescription(`**Choose an Option from Below : **\n\n${result.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`)


                            .setFooter(`Enter anything else or wait 60 seconds to cancel`)
                            .setTimestamp();

                        message.channel.send({ embeds: [embed9] });




                        const filter = m => m.author.id == message.author.id;
                        const collected = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
                        const numSong = collected.first().content - 1;
                        if (numSong > 15 || numSong == NaN) {
                            message.reply(`Invalid Song id`)
                            return;
                        } else {
                            await client.distube.play(message, result[numSong]);
                        }
                    }
                    break;

                case 'play':
                    if (!args[0]) {
                        message.channel.send({ content: 'Please Mention song!' })
                        return;

                    }
                    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
                    const music = args.join(" ");

                    client.distube.play(message, music).catch(error => {

                        const embed9 = new Discord.MessageEmbed()
                            .setColor('RANDOM')
                            .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png')
                            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                            .setDescription(`Getting some issues try again `)


                            .setFooter(client.user.username, client.user.displayAvatarURL())
                            .setTimestamp();
                        message.channel.send({ embeds: [embed9] });
                    });



                    break;
                case 'loop':
                    client.music.get('loop').execute(client, message, args, Discord);
                    break;

                case 'disconnect': client.distube.voices.leave(message);
                    message.channel.send({ content: 'Successfully Disconnected' });

                    break;
                case 'dc': client.distube.voices.leave(message);
                    message.channel.send({ content: 'Successfully Disconnected' })


                    break;
                case 'autoplay':
                    client.music.get('autoplay').execute(client, message, args, Discord);
                    break;
                case 'np':
                    client.music.get('np').execute(client, message, args, Discord);
                    break;
                case 'lyrics':
                    client.music.get('lyrics').execute(client, message, args, Discord);
                    break;
                case 'remove':
                    client.music.get('remove').execute(client, message, args, Discord);
                    break;
                case 'seek': if (!args[0]) {

                    message.reply('Provide time to seek in secs')
                }
                    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
                    let queue = await client.distube.getQueue(message);
                    client.distube.seek(message, Number(args[0]));
                    const embed8 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888335393542524948/wp4067216.png')
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`Jumped to : \`${queue.formattedCurrentTime}\``)


                        .setFooter(client.user.username, client.user.displayAvatarURL())
                        .setTimestamp();
                    message.channel.send({ embeds: [embed8] });
                    break;
                case 'vol': if (!args[0]) {

                    message.reply('Pls Specify Volume Level . Eg : p!volume 80')
                } if (args[0] > 100) {

                    message.reply('Max Volume is 100')
                } if (args[0] <= 100) {
                    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
                    client.distube.setVolume(message, Number(args[0]));
                    const embed6 = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888335393542524948/wp4067216.png')
                        .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                        .setDescription(`Volume Set to : ${Number(args[0])}`)


                        .setFooter(client.user.username, client.user.displayAvatarURL())
                        .setTimestamp();
                    message.channel.send({ embeds: [embed6] });

                }
                    break;
                case 'volume':
                    if (!message.member.voice.channel) return message.channel.send({ content: 'You must be in a voice channel to use this command.' });
                    if (!args[0] || args[0] == NaN) {

                        message.reply('Pls Specify Volume Level . Eg : p!volume 80')
                    } if (args[0] > 100) {

                        message.reply('Max Volume is 100')
                    } if (args[0] <= 100) {

                        client.distube.setVolume(message, Number(args[0]));
                        const embed9 = new Discord.MessageEmbed()
                            .setColor('RANDOM')
                            .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888335393542524948/wp4067216.png')
                            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                            .setDescription(`Volume Set to : ${Number(args[0])}`)


                            .setFooter(client.user.username, client.user.displayAvatarURL())
                            .setTimestamp();
                        message.channel.send({ embeds: [embed9] });

                    }



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
                case '8d':
                    client.music.get('8d').execute(client, message, args, Discord);
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
                case 'earwax':
                    client.music.get('earwax').execute(client, message, args, Discord);
                    break;

                case 'av': client.commands.get('av').execute(client, message, args, Discord);
                    break;
                case 'fgtourney': client.commands.get('fgtourney').execute(client, message, args, Discord);
                    break;
                case 'fgtourney-deadline': client.commands.get('fgtourney-deadline').execute(client, message, args, Discord);
                    break;



                case 'bootup-jarvis': j = 1; message.channel.send('https://tenor.com/view/iron-man-sped-up-jarvis-gif-19148596');
                    message.reply(" Booted Up Succesfully! ")
                    channelID = message.channel.id;
                    break;
                case 'shutdown-jarvis': if (j === 0) {
                    message.channel.send({ content: "Jarvis is Already off" })
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
                    message.channel.send({ embeds: [help] });

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


                case 'meme': client.commands.get('meme').execute(message, args, Discord);
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
                case 'htmlcodes': message.channel.send({ content: 'https://htmlcolorcodes.com/' })
                    break;
                case 'janeman':
                    client.commands.get('janeman').execute(client, message, args, Discord);


                    break;


                case 'timer': client.commands.get('timer').execute(message, args, Discord);
                    break;
                case 'roleinfo': client.help.get('6').execute(message, args, Discord);
                    break;

                case 'match':

                    var player1 = Math.floor(Math.random() * 4);
                    var player2 = Math.floor(Math.random() * 4);

                    let question1 = message.content.slice(prefix.length + 6)
                    if (!question1) {

                        return message.channel.send({ content: 'You didnt specified a match to generate' })
                    }
                    const Embed1 = new Discord.MessageEmbed()
                        .setColor('#00f1ff')
                        .setTitle("Results ")
                        .setDescription(question1 + "\n" + player1 + '-' + player2)

                    message.channel.send({ embeds: [Embed1] });

                    message.delete({ timeout: 2000 })
                    break;




            }

        } else {
            switch (message.content) {

                case 'hey jarvis': if (message.author.id == '550267183503114250' || message.guild.id == '730714810064306188') { message.reply("Yes Boss 🙃") }
                else message.channel.send({ content: 'Hn bol bsdk 😒' })
                    break;
                case 'jarvis': if (message.author.id == '550267183503114250' || message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') { message.reply("Yes Boss 🙃") }
                else if (message.author.id == '761159077639356446') {
                    message.channel.send({ content: 'Hn bolo Janeman 🙃' })
                }
                else message.channel.send({ content: 'Hn bol bsdk 😒' })

                    break;
                case "adnan short story": message.channel.send("https://cdn.discordapp.com/attachments/794240262972243979/860556430490468362/VID_20210701_195116_318.mp4")
                    break;
                case "jarvis expose cvm": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
                    break;
                case "jarvis expose shivam": message.channel.send("https://cdn.discordapp.com/attachments/852811127889068033/871411602702860318/IMG_20210801_204737.jpg")
                    break;
                case "-friendly": await message.channel.send({ content: `<@&885896296739790919>` })
                    break;
                case "togglefriendly": let member = message.member;
                    let memberTarget = message.guild.members.cache.get(member.id);
                    let Role = message.guild.roles.cache.find(role => role.name === 'friendly');
                    if (message.member.roles.cache.has('885896296739790919')) {
                        memberTarget.roles.remove(Role.id);
                        message.reply('You will not get pinged for friendlies now  :)!')
                    }
                    else {

                        memberTarget.roles.add(Role.id);
                        message.reply('You Joined Friendlies Channel  :)!')
                    }
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