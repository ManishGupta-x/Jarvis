module.exports ={
    name: 'epl',
    Description: 'this is a league command',
    async execute(message,args, Discord){
             
        if(!args[0] && message.member.roles.cache.has('610377914109788180')){
            message.reply("Mention Fixture number")

        }
        else if(args[0] == '1' || message.member.roles.cache.has('610377914109788180')){

          message.channel.send("https://cdn.discordapp.com/attachments/839033013119352872/873154763800317972/Screenshot_20210806-1607232.png")
          await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873154783563886592/Screenshot_20210806-1608242.png')
          await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873154808981381140/Screenshot_20210806-1608302.png')
      }

      else if(args[0] == '2' || message.member.roles.cache.has('610377914109788180')){

        message.channel.send("https://cdn.discordapp.com/attachments/839033013119352872/873154832259743784/Screenshot_20210806-1608382.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873154854846074900/Screenshot_20210806-1608452.png')
        await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873154971770708038/Screenshot_20210806-1608542.png')
    }

    else if(args[0] == '3' || message.member.roles.cache.has('610377914109788180')){

        message.channel.send("https://cdn.discordapp.com/attachments/839033013119352872/873154992993886208/Screenshot_20210806-1609122.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873155007862698014/Screenshot_20210806-1609202.png')
        await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873155026086932570/Screenshot_20210806-1609272.png')
    }

    else  if(args[0] == '4' || message.member.roles.cache.has('610377914109788180')){

        message.channel.send("https://cdn.discordapp.com/attachments/839033013119352872/873155047423356948/Screenshot_20210806-1609352.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873155063965679656/Screenshot_20210806-1609422.png')
        await message.channel.send('https://cdn.discordapp.com/attachments/839033013119352872/873155084786221056/Screenshot_20210806-1609482.png')
    }

    else if(args[0] == '5' || message.member.roles.cache.has('610377914109788180')){

        message.channel.send("https://cdn.discordapp.com/attachments/839033013119352872/873155101517287454/Screenshot_20210806-1609552.png")
        
    }

      
    message.delete({ timeout: 2000 })

    }  
}