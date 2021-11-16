
  const got = require('got');

  const Discord = require("discord.js")
  
  module.exports.run = async (client, message, args,Discord) => {
    
      var subReddits = ["boobies", "porn", "boobs", "HotMenSmoking", "boobs"]
      var rd = subReddits[Math.floor(Math.random() * subReddits.length)];
      
      const embed = new Discord.MessageEmbed()
      got(`https://www.reddit.com/r/${rd}/random/.json`).then(response => {
          let content = JSON.parse(response.body);
          let permalink = content[0].data.children[0].data.permalink;
          let picUrl = `https://reddit.com${permalink}`;
          let picImage = content[0].data.children[0].data.url;
          let picTitle = content[0].data.children[0].data.title;
          let picUpvotes = content[0].data.children[0].data.ups;
          let picDownvotes = content[0].data.children[0].data.downs;
          let picNumComments = content[0].data.children[0].data.num_comments;
          embed.setTitle(`${picTitle}`)
          embed.setURL(`${picUrl}`)
          embed.setImage(picImage)
          embed.setColor('RANDOM')
          embed.setFooter(`👍 ${picUpvotes} 👎 ${picDownvotes} 💬 ${picNumComments}`)
          message.channel.send({embeds :[embed]});
      
  
  } )
  }
  
  module.exports.config = {
      name: "porn",
      aliases: [],
      Description: 'Command',
  }
  