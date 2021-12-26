const Discord = require("discord.js");
const ClientManager = require(`../ClientManager`);
const client = new ClientManager({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_PRESENCES', 'GUILD_VOICE_STATES', 'GUILD_MESSAGE_REACTIONS']
});
module.exports = (error) => {
	

	client.channels.cache.get(errChannel).send({ content: error });

   /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
	
    require("../utils/loadCommands")(client);

};
