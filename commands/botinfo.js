module.exports ={
    name: 'botinfo',
    Description: 'Gives Bot Info !',
    execute(message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#ff3600')
       .setTitle('My INFO')
       .setAuthor('Freak Gamer')
       .setDescription(`Hi bruh ! My Name is Efootball Pes, pleased to meet You :)) \n\n The Botfather is Manish#3540 (Nightmare On server Freak Gamer! \n\n To get started with me you can type ``p!help`` `)
           .setImage('https://cdn.discordapp.com/attachments/730714810614022228/792290989058293790/skysports-lionel-messi-neymar_4470326.png');
           
           
           message.channel.send(newEmbed);

       }
    }