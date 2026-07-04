module.exports.run = async (client, message, args) => {
	const voiceChannel = message.member.voice.channel;
	if (!voiceChannel) {
		return message.channel.send({ content: "Join a voice channel first." });
	}

	const permissions = voiceChannel.permissionsFor(client.user);
	if (!permissions || !permissions.has("MANAGE_CHANNELS")) {
		return message.channel.send({ content: "I need Manage Channels permission to change this voice channel region." });
	}

	const region = args[0] && args[0].toLowerCase() !== "auto" ? args[0] : null;
	await voiceChannel.setRTCRegion(region, `Requested by ${message.author.tag}`);

	message.channel.send({ content: `Voice region set to ${region || "auto"}. Try play again.` });
};

module.exports.config = {
	name: "setregion",
	aliases: ["vregion"],
	Description: "Set the current voice channel RTC region",
};
