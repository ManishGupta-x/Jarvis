module.exports = {
    name: 'groupad',
    Description: 'this is a link command!',
    async execute(client, message, args, Discord, msg) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('FG Tourney  Group Links')
            .setThumbnail('https://cdn.discordapp.com/attachments/737883256128798800/853284175775924294/Snapshot_1.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.png?size=256')
            .addFields(

                {
                    name: "1. Group A Link ", value: 'Table and Matchday Link for Group A'
                },
                { name: "2. Group B Link", value: 'Table and Matchday Link for Group B' },
                { name: "3. Group C Link", value: 'Table and Matchday Link for Group C' },
                { name: "4. Group D Link", value: 'Table and Matchday Link for Group D' },

            )
            .setFooter("Gives 1 link at a time")
        msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
        let msg1 = await msg.edit(newEmbed)
        await msg1.react('1️⃣')
        await msg1.react('2️⃣')
        await msg1.react('3️⃣')
        await msg1.react('4️⃣')

        await msg1.awaitReactions((reaction, user) => user.id == user.id && user.id !== "778267007439077396" && (reaction.emoji.name == '1️⃣' ||

            reaction.emoji.name == '2️⃣' || reaction.emoji.name == '3️⃣' || reaction.emoji.name == '4️⃣'), { max: 1, time: 40000 })
            .then(async collected => {
                if (collected.first().emoji.name == '1️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277086851161/#structure') }
                else if (collected.first().emoji.name == '2️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277120405651/#structure') }
                else if (collected.first().emoji.name == '3️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277120405709/#structure') }
                else if (collected.first().emoji.name == '4️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277120405767/#structure') }


                else return message.channel.send('Time Up');





            }).catch(async () => { return message.channel.send("error") });
    }

}
