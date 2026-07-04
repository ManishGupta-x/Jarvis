const {
	getVoiceConnection,
	joinVoiceChannel,
	entersState,
	VoiceConnectionStatus,
} = require("@discordjs/voice");

function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function destroyStaleConnection(message) {
	const existingConnection = getVoiceConnection(message.guild.id, message.client.user.id);
	const existingQueue = message.client.distube.getQueue(message);

	if (
		existingConnection &&
		existingConnection.state.status !== VoiceConnectionStatus.Destroyed &&
		!existingQueue
	) {
		existingConnection.destroy();
		message.client.distube.voices.leave(message.guild.id);
	}
}

async function ensureVoiceReady(client, message, voiceChannel) {
	const joinOptions = {
		channelId: voiceChannel.id,
		guildId: voiceChannel.guild.id,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		group: client.user.id,
		selfDeaf: false,
		debug: true,
	};

	for (let attempt = 1; attempt <= 2; attempt++) {
		const connection = joinVoiceChannel(joinOptions);

		connection
			.on("stateChange", (oldState, newState) => {
				console.log(`[Voice preflight] ${message.guild.id}: ${oldState.status} -> ${newState.status}`);
				if (newState.networking && !newState.networking.closeDebugAttached) {
					newState.networking.closeDebugAttached = true;
					newState.networking.on("close", (code) => {
						console.warn(`[Voice preflight close] ${message.guild.id}: websocket closed with code ${code}`);
					});
				}
				if (newState.closeCode) {
					console.warn(`[Voice preflight close] ${message.guild.id}: connection close code ${newState.closeCode}`);
				}
			})
			.on("debug", (debugMessage) => {
				console.log(`[Voice preflight debug] ${message.guild.id}: ${debugMessage}`);
			})
			.on("error", (error) => {
				console.warn(`[Voice preflight error] ${message.guild.id}:`, error);
			});

		try {
			await entersState(connection, VoiceConnectionStatus.Ready, 30000);
			return connection;
		} catch (error) {
			if (connection.state.status !== VoiceConnectionStatus.Destroyed) {
				connection.destroy();
			}
			client.distube.voices.leave(message.guild.id);

			if (attempt === 2) {
				throw error;
			}

			await message.channel.send({
				content: "Voice handshake timed out. Retrying once with a fresh connection...",
			});
			await wait(1500);
		}
	}
}

async function distubePlay(client, message, voiceChannel, song, options) {
	return client.distube.play(voiceChannel, song, {
		member: message.member,
		textChannel: message.channel,
		message,
		...options,
	});
}

module.exports = async function playMusic(client, message, song, options = {}) {
	const voiceChannel = message.member && message.member.voice && message.member.voice.channel;

	if (!voiceChannel) {
		return message.channel.send({ content: "You must be in a voice channel to use this command." });
	}

	const permissions = voiceChannel.permissionsFor(client.user);
	if (!permissions || !permissions.has("CONNECT") || !permissions.has("SPEAK")) {
		return message.channel.send({
			content: "I need Connect and Speak permissions in your voice channel.",
		});
	}

	try {
		destroyStaleConnection(message);
		await ensureVoiceReady(client, message, voiceChannel);
		return await distubePlay(client, message, voiceChannel, song, options);
	} catch (error) {
		client.distube.voices.leave(message.guild.id);
		throw error;
	}
};
