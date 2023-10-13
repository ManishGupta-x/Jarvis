
const got = require('got');
//const puppeteer = require('puppeteer');
const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
  
  //   var subReddits = ["memes", "dankmemes", "IndianDankMemes", "dankindianmemes", "saimansays","fingmemes", "suicidebywords"]
  //   var rd = subReddits[Math.floor(Math.random() * subReddits.length)];
    
  // try {
     
  
  //   got(`https://www.reddit.com/r/${rd}/random/.json`).then(response => {
  //     console.log(response.body);
  //     let content = JSON.parse(response.body);
  //     if (!content[0].data) {
  //       return message.channel.send({ content: `Something went wrong.\n${content}` })
  //     }
  //     console.log(content[0].data.children);
  //     let memeImage = content[0].data.children[0].data.url;
  //     if (memeImage.includes("v.redd.it")) {
       
  //      // const puppeteer = require('puppeteer');
  //       async function scrap(url) {
  //         const browser = await puppeteer.launch();
  //         const page = await browser.newPage();
  //         await page.goto(url);
  //        const [el] = await page.$x('//*[@id="t3_16gr144-aspect-ratio"]/shreddit-async-loader/media-telemetry-observer/shreddit-player');
  //       const src = await el.getProperty('packeged-media-json');
  //         console.log(src);  
  //       }
          
  //     }
  //      message.channel.send({ content: memeImage });
  
  //   })
  // } catch (err) {
  //   console.log(err)
  //   message.channel.send({ content: `Something went wrong.\n${err}` })
  // }
  
  
}

module.exports.config = {
    name: "meme",
    aliases: [],
    Description: 'Command',
}
