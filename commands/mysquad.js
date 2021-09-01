const formation = ["3-4-3", "4-1-2-3", "5-3-2", "4-1-3-2","4-2-2-2", "4-2-1-3","5-2-1-2","4-2-3-1"]
const fr =formation[Math. floor(Math.random() * formation.length)];
const Difficulty = ["1 Cf Must be a goalkeeper", "1 Cb Must be a goalkeeper" , "1 Cb must be Amf Player", "1 Cf must be a Center back","A Gk of rating less than 85", "1 Mid player as goalkeeper"]
const df = Difficulty[Math.floor(Math.random() * Difficulty.length)];
const Ims = ["1","2","3","4"]
const im = Ims[Math.floor(Math.random() *Ims.length)];

module.exports ={
    name: 'mysquad',
    Description: 'this is a role command!',
    async execute(client,message,args, Discord){
         let member =message.author;

        
        let imlegend = random(im); 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://i.imgur.com/IOc6tij.gif')
        .setTitle(`${client.users.cache.get(member.id).username}'s Squad Requirements`)
        .setAuthor('Jarvis','https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription(`
        
        Formantion : ${random(fr)}\n Max Im's In Whole squad  ${imlegend}\n Max Legends in whole squad : ${6-imlegend}\n Max featured in whole squad : ${random(im)} \n Special Difficulty : ${ramdom(df)}\n Remaining players must be Base players !

        
        
        `)

            
            
            message.channel.send(newEmbed);
 



    }  }