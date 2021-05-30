
const { MessageEmbed } = require("discord.js");

module.exports ={
    name: 'music',
    Description: 'Gives Commands Info !',
    execute(client,message,args,Discord){
     
       const newEmbed1 = new Discord.MessageEmbed()
       .setColor('#FF0074')
       .setTitle('Command Menu Music')
       .setAuthor('The Jarvis v2.0.0', 'https://cdn.discordapp.com/attachments/730714810614022228/848623748050976858/dj-console-mixing-music-with-hands-with-blurred-people-dancing-night-club-party_137321-140.png')
       .setThumbnail('https://cdn.discordapp.com/attachments/610950416498425886/848609773754515516/wp4815475.png')
       .setTimestamp()
       .addFields( 
            
            {name : "🎧 p!play [song name] " , value : ` • Plays the song mentioned`},
            {name : "🎧 p!queue" , value : ` • Gives Current queue`},
            {name : "🎧 p!skip" , value : ` • Skips Current song to next one`},
            {name : "🎧 p![filter name]" , value : ` • Write the filter name after p! , Eg: p!3d , p!nightcore`},
            {name : "🎧 Filters Available " , value : ` • Bassboost , 3d , Echo , Nightcore, Vaporwave `},
            {name : "🎧 p!stop  " , value : ` • Stops the music and leaves the channel`}
             
             
          
        
        
           )
           .setFooter(client.user.username , client.user.displayAvatarURL() )
          .setImage('https://cdn.discordapp.com/attachments/610950416498425886/848609872521461800/thumb-1920-554935.png');
         
           message.channel.send(newEmbed1)      
          
               


        } 
        
        
}
