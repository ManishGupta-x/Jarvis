module.exports.run = async (client, message) => {
	const regions = await client.fetchVoiceRegions();
	const currentRegion = message.member.voice.channel && message.member.voice.channel.rtcRegion;
	const list = regions
		.filter((region) => !region.deprecated)
		.map((region) => `${region.id} - ${region.name}${region.optimal ? " (optimal)" : ""}`)
		.join("\n");

	message.channel.send({
		content: `Current voice region: ${currentRegion || "auto"}\n\nAvailable regions:\n\`\`\`\n${list.slice(0, 1800)}\n\`\`\``,
	});
};

module.exports.config = {
	name: "voiceregions",
	aliases: ["vregions", "regions"],
	Description: "List available Discord voice regions",
};
