const {MessageEmbed} = require('dis')
module.exports = {
    name: '6',
    Description: 'Gives Info for roles',
    
    run: async(message, args, Discord) => {
        
          
        const Embed1 = new Discord.MessageEmbed()
            .setColor('#06FC9F ')
            .setAuthor('Freak Gamer')
            .setTitle('Roles On the Server')
            .addFields(


                {
                    name: "Activity Roles", value: ` 
           
            \n 
             __**Leveled roles**__\n\n
  
             <@&781087899961393163>  :- Unlocks perms to send Pics and video (attach file perms)  \n\n
  
  
             <@&754994289280548895> : unlocks Sending embedded links ( Gifs)\n\n 
  
             <@&754994039035789393> : - perms to Change Nickname.  And Custom Role\n\n
  
             <@&754993523501170698><@&754996150880305213>  : - Gets immune to Automod\n\n
  
             <@&737596111463776277>: 
              1. Guaranteed Participation in  Leagues and Also in Freak Cup ( From Season 3)
              2. Will be listed highest in the role list ( below staff ofc)**\n\n
  
              __Also this <@&737596111463776277>  role is one time only 1 person can get it and 
              after one person get it leaderboard will get reset to get the next server legend__ `},

            )
            .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433282804219924/img_agarcial_20180830-140538_imagenes_lv_terceros_pro_evolution_soccer_2019_20180830095902-kkRC-U451.png');
        const Embed2 = new Discord.MessageEmbed()
            .setColor('#06FC9F ')
            .setAuthor('Freak Gamer')
            .setTitle('Roles On the Server')
            .addFields(

                {
                    name: "Tourney Roles", value: `
           
            There is a role for every Tourney winner Like <@&767785642276421712>
 
            \nOther Roles: 
            
            \n<@&750394745527730268> :  **One who wins 3 tourneys in one season.**

            \n<@750394539566694400> : **One who wins 2 tourneys in one season. **

            \n<@750395021701939250> : 🎖️🎖️🎖️  :  **One who wins freak cup 3 times.**

            \n<@750394928026091711> : 🎖️🎖️ : **One who wins  freak cup 2 times**

            \n<@750394813416865863> : 🎖️ : **One who wins freak cup 1 time.**
            
 
            `},




            )
            .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433282804219924/img_agarcial_20180830-140538_imagenes_lv_terceros_pro_evolution_soccer_2019_20180830095902-kkRC-U451.png');


        const newEmbed = new Discord.MessageEmbed()
            .setColor('#06FC9F ')
            .setAuthor('Freak Gamer')
            .setTitle('Roles On the Server')
            .addFields(


                { name: "1.Activity Roles" },
                { name: "2.Tourney Roles " },
                {
                    name: "3.Custom Role", value: `\n
             It is a Role that will contain a name
             of your choice it maybe a Celebrity, Football Player , 
             any other sport player or maybe a Club or a Team name. 
             It's Your Choice!!!! And it will have Your choice colour!! Custom Role Can be Obtained by two ways : 
            - The one who reaches top player role on Server leaderboard or By Giveaways 
             You can increase your server score by Being Active and chatting.
             You can see your position on the server leaderboard by typing "t!top" in #🤖│bot-commands !! `},




            )
            .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433282804219924/img_agarcial_20180830-140538_imagenes_lv_terceros_pro_evolution_soccer_2019_20180830095902-kkRC-U451.png');

        let msg = await message.channel.send(newEmbed)
        await msg.react('1️⃣')
        await msg.react('2️⃣')

        await msg.awaitReactions((reaction, user) => user.id == user.id && (reaction.emoji.name == '1️⃣' ||

            reaction.emoji.name == '2️⃣'), { max: 1, time: 10000 })
            .then(async collected => {
                if (collected.first().emoji.name == '1️⃣') { return message.channel.send(Embed1) }
                else if (collected.first().emoji.name == '2️⃣') { return message.channel.send(Embed2) }
            }).catch(async () => { return message.channel.send("error") });
    }


}