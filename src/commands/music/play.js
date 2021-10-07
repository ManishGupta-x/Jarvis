
const disTube = require('distube');
module.exports ={
    name: 'play',
    Description: 'this is a play  command!',
   async  execute(client,message,args, Discord){
        if(!args[0]){
          
            message.channel.send({content :'Please Mention song!'})
           return;

        }
        let textchannel = message.channel;
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
        const music = args.join(" ");

        client.distube.playVoiceChannel(voiceChannel, music,{textChannel : textchannel}).then( async() => {

            client.on('interactionCreate', async interaction => {



                if (interaction.isButton()) {
        
                    if (interaction.customId === 'skip') {
                        await interaction.deferReply({ content: "Skipped", ephemeral: true })
                        await client.music.get('skip').execute(client, message, args, Discord);
        
                    } else if (interaction.customId === 'BassBoost') {
                        await interaction.deferReply({ content: "BassBoost Activated !", ephemeral: true })
                        await client.music.get('bassboost').execute(client, message, args, Discord);
        
        
                    } else if (interaction.customId === 'Nightcore') {
                        await interaction.deferReply({ content: "Nightcore Activated !", ephemeral: true })
                        await client.music.get('nightcore').execute(client, message, args, Discord);
        
        
                    }
                }
            })






        }) 
       
        

    }  
}
