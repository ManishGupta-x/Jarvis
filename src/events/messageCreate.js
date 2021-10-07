const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const prefix = 'p!';

module.exports = async (client,message) => {

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

	if (message.author.bot || message.channel.type === 'dm' ) return;
if(message.author.id != '550267183503114250' && message.content.startsWith(prefix) ){
	message.channel.send('Bot Under Maintenance currently Possible Resolving time 5-6 hrs . Sorry For Inconvieniece Caused')
  return;
}


    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
	const commandfile = client.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));;
	if (commandfile) {
		commandfile.run(client, message, args,Discord);
	}


    

}