
module.exports ={
    name: 'mysquad',
    Description: 'this is a role command!',
    async execute(client,message,args, Discord){
         let member =message.author;
         var formation = ["3-4-3", "4-1-2-3", "5-3-2", "4-1-3-2","4-2-2-2", "4-2-1-3","5-2-1-2","4-2-3-1"]
         var fr = Math. floor(Math.random() * formation.length);
         var Difficulty = ["1 Cf Must be a goalkeeper(eg: khan at cf)", "1 Cb Must be a goalkeeper(eg :khan at cb)" , "1 Cb must be Amf Player(eg: cruyff at cb)", "1 Cf must be a Center back(eg : vvd at cf)","A Gk of rating less than 85", "1 Mid player as goalkeeper"]
         var df = Math.floor(Math.random() * Difficulty.length);
         var Ims = ["1","2","3","4"]
         var im = Math.floor(Math.random() *Ims.length);
         
        
        let imlegend = Ims[im]; 
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://i.imgur.com/IOc6tij.gif')
        .setTitle(`${client.users.cache.get(member.id).username}'s Squad Requirements`)
        .setAuthor('Jarvis','https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
        .setDescription(`
        
        Formation : ${formation[fr]}\n Max Im's In Whole squad : ${imlegend}\n Max Legends in whole squad : ${6-imlegend}\n Max featured in whole squad : ${Ims[im]} \n Special Difficulty : ${Difficulty[df]}\n Remaining players must be Base players !

        
        
        `)

            
            
            message.channel.send(newEmbed);
            channelID = '882895969887350825';
           
            client.channels.cache.get(`${channelID}`).send(`${client.users.cache.get(member.id).username} used the p!mysquad command `)
              
             
 



    }  }