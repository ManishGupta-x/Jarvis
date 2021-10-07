const Discord = require('discord.js');


const mongoose = require('mongoose');

const ClientManager = require(`./src/ClientManager`);
const client = new ClientManager({ partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS'] });
const fetch = require("node-fetch").default;

mongoose.connect('mongodb+srv://Manish:m7827851250@pesmobile.zolll.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })


client.setup();