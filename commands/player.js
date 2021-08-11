const puppeteer = require('puppeteer');
module.exports ={
    name: 'player',
    Description: 'this is a player command!',
    execute(message,args, Discord){
     
         async function scrapeProduct(url){
              const broswer = await puppeteer.launch()
              const page = await broswer.newPage();
              await page.goto(url)

              const[el] = await page.$x('//*[@id="table_0"]/tbody/tr[3]/td[1]/img');
              const src = await el.getProperty('src');
              const srctxt = await src.jsonValue();

              message.channel.send({srctxt});

         }
    }  
}