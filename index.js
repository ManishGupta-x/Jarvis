const Discord = require('discord.js');

const ClientManager = require(`./src/ClientManager`);
const client = new ClientManager({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS']
});
const fetch = require("node-fetch").default;
const config = require('./settings.json')



client.setup();