
const disTube = require('distube');
const { MessageEmbed, Util } = require("discord.js")
const { MessageActionRow, MessageSelectMenu } = require('discord.js')
const Discord = require("discord.js")

let queue =  client.distube.getQueue(message);
if (queue.songs.length == 2) {

    song1 = queue.songs[1];
  
}
else if (queue.songs.length == 3) {
    song1 = queue.songs[1];
    song2 = queue.songs[2];
  
}
else if (queue.songs.length == 4) {
    song1 = queue.songs[1];
    song2 = queue.songs[2];
    song3 = queue.songs[3];
    
} else if (queue.songs.length == 5) {

    song1 = queue.songs[1];
    song2 = queue.songs[2];
    song3 = queue.songs[3];
    song4 = queue.songs[4];
}

//row1
const row1 = new Discord.MessageActionRow()
     .addComponents(

         new MessageSelectMenu()
             .setCustomId('queue1')
             .setPlaceholder('Skip to Next or Previous songs')
             .addOptions([
                 {
                    label: `Previous Song`,
                    value: 'first1',
                    emoji: '🎶',
                    description: `Play the previous song`
                 }
                 ],
             )
     )
     //row2
     const row2 = new Discord.MessageActionRow()
     .addComponents(

         new MessageSelectMenu()
             .setCustomId('queue2')
             .setPlaceholder('Skip to Next or Previous songs')
             .addOptions([
                 {

                    label: `Previous Song`,
                    value: 'first2',
                    emoji: '🎶',
                    description: `Play the previous song`
                 },
                 {
                    label: `${song1.name} - \`${song1.formattedDuration}\``,
                    value: 'second2',
                    emoji: '🎶',
                    description: `Requested By ${song1.user}`

                 }


             ],
             )
     )
     //row3
     const row3 = new Discord.MessageActionRow()
     .addComponents(

         new MessageSelectMenu()
             .setCustomId('queue3')
             .setPlaceholder('Skip to Next or Previous songs')
             .addOptions([
                 {

                    label: `Previous Song`,
                    value: 'first3',
                    emoji: '🎶',
                    description: `Play the previous song`
                 },
                 {
                    label: `${song1.name} - \`${song1.formattedDuration}\``,
                    value: 'second3',
                    emoji: '🎶',
                    description: `Requested By ${song1.user}`

                 },{

                    label: `${song2.name} - \`${song2.formattedDuration}\``,
                    value: 'third3',
                    emoji: '🎶',
                    description: `Requested By ${song2.user}`

               }


             ],
             )
     )
     //row4
     const row4 = new Discord.MessageActionRow()
     .addComponents(

         new MessageSelectMenu()
             .setCustomId('queue4')
             .setPlaceholder('Skip to Next or Previous songs')
             .addOptions([
                 {

                    label: `Previous Song`,
                    value: 'first4',
                    emoji: '🎶',
                    description: `Play the previous song`
                 },
                 {
                    label: `${song1.name} - \`${song1.formattedDuration}\``,
                    value: 'second4',
                    emoji: '🎶',
                    description: `Requested By ${song1.user}`

                 },
                 {

                      label: `${song2.name} - \`${song2.formattedDuration}\``,
                      value: 'third4',
                      emoji: '🎶',
                      description: `Requested By ${song2.user}`

                 },
                 {

                      label: `${song3.name} - \`${song3.formattedDuration}\``,
                      value: 'fourth4',
                      emoji: '🎶',
                      description: `Requested By ${song4.user}`

                 }


             ],
             )
     )
     //row5
     const row5 = new Discord.MessageActionRow()
     .addComponents(

          new MessageSelectMenu()
               .setCustomId('queue5')
               .setPlaceholder('Skip to Next 5 songs ')
               .addOptions([
                    {

                         label: `Previous Song`,
                         value: 'first5',
                         emoji: '🎶',
                         description: `Play the previous song`
                    },
                    {

                         label: `${song1.name} - \`${song1.formattedDuration}\``,
                         value: 'second5',
                         emoji: '🎶',
                         description: `Requested By ${song1.user}`

                    },
                    {
                         label: `${song2.name} - \`${song2.formattedDuration}\``,
                         value: 'third5',
                         emoji: '🎶',
                         description: `Requested By ${song2.user}`

                    },
                    {

                         label: `${song3.name} - \`${song3.formattedDuration}\``,
                         value: 'fourth5',
                         emoji: '🎶',
                         description: `Requested By ${song3.user}`

                    },
                    {

                         label: `${song4.name} - \`${song4.formattedDuration}\``,
                         value: 'fifth5',
                         emoji: '🎶',
                         description: `Requested By ${song4.user}`

                    }


               ],
               )
     )