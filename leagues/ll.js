module.exports ={
    name: 'll',
    Description: 'this is a league command',
    async execute(message,args, Discord){
             
        if(!args[0] ){
            message.reply("Mention Fixture number")

        }
        else if(args[0] == '1' ){

          message.channel.send("https://cdn.discordapp.com/attachments/840518246687440906/874654079782113390/Screenshot_20210810-1922512.png")
          await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654100766208030/Screenshot_20210810-1922592.png')
          await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654113596579900/Screenshot_20210810-1923072.png')
         
      }

      else if(args[0] == '2' ){

        message.channel.send("https://cdn.discordapp.com/attachments/840518246687440906/874654126791880764/Screenshot_20210810-1928442.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654149067800616/Screenshot_20210810-1923252.png')
        await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654169615695892/Screenshot_20210810-1923332.png')
        
    }

    else if(args[0] == '3' ){

        message.channel.send("https://cdn.discordapp.com/attachments/840518246687440906/874654188381020221/Screenshot_20210810-1923402.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654197751119882/Screenshot_20210810-1923492.png')
        await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654221071421491/Screenshot_20210810-1923572.png')
    }

    else  if(args[0] == '4' ){

        message.channel.send("https://cdn.discordapp.com/attachments/840518246687440906/874654231322296402/Screenshot_20210810-1924092.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654241401241610/Screenshot_20210810-1924172.png')
        
    }

    else if(args[0] == '5'){

        message.channel.send("https://cdn.discordapp.com/attachments/840518246687440906/874654249622052914/Screenshot_20210810-1925212.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654257763201024/Screenshot_20210810-1925292.png')
        await message.channel.send('https://cdn.discordapp.com/attachments/840518246687440906/874654265937899630/Screenshot_20210810-1925552.png')
    }

  

      
    message.delete({ timeout: 2000 })

    }  
}
