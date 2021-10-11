const {
    Client,
    Collection,
} = require('discord.js');
const EventHandler = require("./utils/loadEvents");
const Discord = require('discord.js')

module.exports = class ClientManager extends Client {
    constructor(options) {
        super(options);
        this.commands = new Collection();
        this.snipes = new Collection();
        this.aliases = new Collection();
         
    }

    setup() {
        const { DisTube } = require('distube');
const { SpotifyPlugin } = require("@distube/spotify");
this.distube = new DisTube(this, {
    emitNewSongOnly: true, plugins: [new SpotifyPlugin({
        parallel: true,
        emitEventsAfterFetching: false,



    })], customFilters: { "8d": "apulsator=hz=0.08" }, leaveOnFinish: false, emptyCooldown: 15, leaveOnEmpty: true, leaveOnStop: false, youtubeCookie: 'VISITOR_INFO1_LIVE=VizaEEKSaKU; CONSENT=YES+IN.en-GB+202003; HSID=AkXW3VgkDmwLdXppv; SSID=ABztr9AiYhzU3cims; APISID=ISlgWkeBCPS4FVpU/AvUkKq2Y5as3oxS5w; SAPISID=T679YjYmlQBtggOQ/ARd21Lsm08R60aQxc; __Secure-1PAPISID=T679YjYmlQBtggOQ/ARd21Lsm08R60aQxc; __Secure-3PAPISID=T679YjYmlQBtggOQ/ARd21Lsm08R60aQxc; PREF=f6=40000000&volume=100&tz=Asia.Calcutta&al=en&f5=30000; SID=BgjH_Kc2ABFMQu5bLy2syWFiJtPl2bOqI4gLDwmVnCXLmjzm-75v8zEUbkM-Fo42HHtsAw.; __Secure-1PSID=BgjH_Kc2ABFMQu5bLy2syWFiJtPl2bOqI4gLDwmVnCXLmjzmSwyewdsV5rUu2dwol9JkHQ.; __Secure-3PSID=BgjH_Kc2ABFMQu5bLy2syWFiJtPl2bOqI4gLDwmVnCXLmjzm5Yk-KzCTNlH-9DSJJAMa2g.; LOGIN_INFO=AFmmF2swRQIhAOAj5hxBaepKf2QWAhyxRsQ5qVM6AsWFNCuhOrLqYbwdAiAgEelIbJr9T2CTnJ_r_A1CpNZOhD5lH083xqIr83DoOQ:QUQ3MjNmdzl3dnFBalF2d1F6N3gxQ1F0cG9CV2hSMXZaTkpRU1NWN0RialZqVXNDcnlkUlNYODJLbFFuNnVnOXVaS2xVaWpCc2JpUXFJbE1EVGpzRlJhZzhqMmR0UXFZRnJzR1dzUW5jdG14UE82MjdzVlJzMGt6UF9mcVlpYnEzQklEbjFTQnFwa3VjOGRzS2FaNjdLWWhtMGpUYmtJSXFB; YSC=__AMedv__lI; SIDCC=AJi4QfH4YiFJJLPF53VeLb73e5CmQ1rF-8jYPZBKsDwUPGX-QBv06-a44iNU2Zvf-SXwz8O_7Jco; __Secure-3PSIDCC=AJi4QfGxy3tYK9mYe4YxsvsB5__Q5dbyTF5LxF1JEj6Nlomf4xxUeDIkX7FrjZuxelpdByFZ9WyK'
});
        this.events = new EventHandler(this);
        this.events.init();
        this.distube
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
    
                .setFooter(`p!np For More Features`)
                .setTimestamp();
    
    
            queue.textChannel.send({ embeds: [playsong] })
    
    
     }).on("addSong", (queue, song) => {

        const addsong = new Discord.MessageEmbed()
            .setColor('#F0074F')
            .setThumbnail(`${song.thumbnail}`)
            .setTitle(`Added to Queue`)
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
            .setDescription(`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\``)

            .setFooter(`p!music for Command List`)
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
        require('./utils/loadCommands')(this);

        this.login(process.env.token);
    }
};