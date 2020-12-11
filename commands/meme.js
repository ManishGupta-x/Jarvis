const randomPuppy = require('random-puppy');



module.exports ={
    name: 'meme',
    Description: 'this is a  meme command!',
    async execute(message,args, Discord){
     
        const subReddits = ["IndianDankMemes", "dankmeme","IndianMeyMeys", "DankFootballMemes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed = new Discord.MessageEmbed()
        .setColor('#f7331a')
        .setImage(img)
        .setURL(`http://reddit.com/${random}`)
    
        message.channel.send(embed);


    }  
}