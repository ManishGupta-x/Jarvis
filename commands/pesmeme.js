const got = require('got');
const meme = require('./meme');
const subReddits = ["pesmobile"]
const rd = subReddits[Math.floor(Math.random() * subReddits.length)];


module.exports ={
    name: 'pesmeme',
    Description: 'this is a  meme command!',
    async execute(message,args, Discord){
     
        const embed = new Discord.MessageEmbed()
        got(`https://www.reddit.com/r/${rd}/random/.json`).then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink.flair(meme);
            let flair = content[0].data.children[0].data.flair;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            if (flair == 'meme'){
                message.channel.send(embed);
            }
            else{
                message.channel.send('No meme Found');

            }
            
        

    } )
    }
}
