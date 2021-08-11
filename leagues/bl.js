module.exports ={
    name: 'bl',
    Description: 'this is a league command',
    async execute(message,args, Discord){
             
        if(!args[0] ){
            message.reply("Mention Fixture number")

        }
        else if(args[0] == '1' ){

          message.channel.send("https://cdn.discordapp.com/attachments/874963502584963173/875032384439988254/Screenshot_20210811-2029522.png")
          await message.channel.send('https://cdn.discordapp.com/attachments/874963502584963173/875032403545043024/Screenshot_20210811-2030012.png')
         
      }

      else if(args[0] == '2' ){

        message.channel.send("https://cdn.discordapp.com/attachments/874963502584963173/875032423124062208/Screenshot_20210811-2030102.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/874963502584963173/875032448352780329/Screenshot_20210811-2030192.png')
        
    }

    else if(args[0] == '3' ){

        message.channel.send("https://cdn.discordapp.com/attachments/874963502584963173/875032504531312690/Screenshot_20210811-2030332.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/874963502584963173/875032528124280842/Screenshot_20210811-2030422.png')
       
    }

    else  if(args[0] == '4' ){

        message.channel.send("https://cdn.discordapp.com/attachments/874963502584963173/875032549901082644/Screenshot_20210811-2030522.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/874963502584963173/875032721859162132/Screenshot_20210811-2031032.png')
       
    }

    else if(args[0] == '5'){

        message.channel.send("https://cdn.discordapp.com/attachments/874963502584963173/875032742256062534/Screenshot_20210811-2031152.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/874963502584963173/875032764821409792/Screenshot_20210811-2031242.png')
    }
    else if(args[0] == '6'){

        message.channel.send("https://cdn.discordapp.com/attachments/874963502584963173/875032781149839400/Screenshot_20210811-2031332.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/874963502584963173/875032795855077486/Screenshot_20210811-2031422.png')
    }
    else if(args[0] == '7'){

        message.channel.send("https://cdn.discordapp.com/attachments/874963502584963173/875032815287291904/Screenshot_20210811-2031542.png")
        await message.channel.send('https://cdn.discordapp.com/attachments/874963502584963173/875032831418568744/Screenshot_20210811-2032032.png')
    }

      
    message.delete({ timeout: 2000 })

    }  
}
