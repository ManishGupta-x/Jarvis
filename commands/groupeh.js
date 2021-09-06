module.exports = {
    name: 'groupeh',
    Description: 'this is a link command!',
    async execute(client, message, args, Discord, msg) {


        const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('FG Tourney  Group Links')
            .setThumbnail('https://cdn.discordapp.com/attachments/737883256128798800/853284175775924294/Snapshot_1.png')
            .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.png?size=256')
            .addFields(

                {
                    name: "1. Group E Link ", value: 'Table and Matchday Link for Group E'
                },
                { name: "2. Group F Link", value: 'Table and Matchday Link for Group F' },
                { name: "3. Group G Link", value: 'Table and Matchday Link for Group G' },
                { name: "4. Group H Link", value: 'Table and Matchday Link for Group H' },

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
                if (collected.first().emoji.name == '1️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277153960257/#structure') }
                else if (collected.first().emoji.name == '2️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277153960299/#structure') }
                else if (collected.first().emoji.name == '3️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277153960341/#structure') }
                else if (collected.first().emoji.name == '4️⃣') { return message.channel.send('https://play.toornament.com/en_GB/tournaments/4956543308535955456/stages/4956579276281544704/groups/4956579277153960383/#structure') }


                else return message.channel.send('Time Up');





            }).catch(async () => { return message.channel.send("error") });
    }

}
