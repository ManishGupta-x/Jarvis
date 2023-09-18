const Discord = require('discord.js');

const ClientManager = require(`./src/ClientManager`);
const client = new ClientManager({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS']
});

client.setup();