module.exports ={
    name: 'sr',
    Description: 'this is a league command',
    async execute(message,args, Discord){
             
        if(!args[0] ){
            message.reply("Mention Fixture number")

        }
        else if(args[0] == '1' ){

          message.channel.send("https://cdn.discordapp.com/attachments/875351958486126622/875352080125165618/IMG_20210812_174447.jpg")
          await message.channel.send('https://cdn.discordapp.com/attachments/875351958486126622/875352080401969162/IMG_20210812_174456.jpg')
         
      }

      else if(args[0] == '2' ){

        message.channel.send("https://cdn.discordapp.com/attachments/875351958486126622/875352216133840946/IMG_20210812_174237.jpg")
        await message.channel.send('https://cdn.discordapp.com/attachments/875351958486126622/875352216364544060/IMG_20210812_174249.jpg')
        
    }

    else if(args[0] == '3' ){

        message.channel.send("https://cdn.discordapp.com/attachments/875351958486126622/875352216637145129/IMG_20210812_174300.jpg")
        await message.channel.send('https://cdn.discordapp.com/attachments/875351958486126622/875352216851079199/IMG_20210812_174311.jpg')
       
    }

    else  if(args[0] == '4' ){

        message.channel.send("https://cdn.discordapp.com/attachments/875351958486126622/875352217148878878/IMG_20210812_174321.jpg")
        await message.channel.send('https://cdn.discordapp.com/attachments/875351958486126622/875352217429868555/IMG_20210812_174331.jpg')
       
    }

    else if(args[0] == '5'){

        message.channel.send("https://cdn.discordapp.com/attachments/875351958486126622/875352217647980594/IMG_20210812_174340.jpg")
        await message.channel.send('https://cdn.discordapp.com/attachments/875351958486126622/875352217954160670/IMG_20210812_174351.jpg')
    }
    else if(args[0] == '6'){

        message.channel.send("https://cdn.discordapp.com/attachments/875351958486126622/875352243161944084/IMG_20210812_174401.jpg")
        await message.channel.send('https://cdn.discordapp.com/attachments/875351958486126622/875352243409395762/IMG_20210812_174410.jpg')
    }
    else if(args[0] == '7'){

        message.channel.send("https://cdn.discordapp.com/attachments/875351958486126622/875352243698827324/IMG_20210812_174424.jpg")
        await message.channel.send('https://cdn.discordapp.com/attachments/875351958486126622/875352243967246368/IMG_20210812_174434.jpg')
    }

      
    message.delete({ timeout: 2000 })

    }  
}
