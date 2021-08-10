module.exports ={
    name: 'll',
    Description: 'this is a league command',
    async execute(message,args, Discord){
             
        if(!args[0] ){
            message.reply("Mention Fixture number")

        }
        else if(args[0] == '1' ){

          message.channel.send("")
          await message.channel.send('')
         
      }

      else if(args[0] == '2' ){

        message.channel.send("")
        await message.channel.send('')
        
    }

    else if(args[0] == '3' ){

        message.channel.send("")
        await message.channel.send('')
       
    }

    else  if(args[0] == '4' ){

        message.channel.send("")
        await message.channel.send('')
       
    }

    else if(args[0] == '5'){

        message.channel.send("")
        await message.channel.send('')
    }
    else if(args[0] == '6'){

        message.channel.send("")
        await message.channel.send('')
    }
    else if(args[0] == '7'){

        message.channel.send("")
        await message.channel.send('')
    }

      
    message.delete({ timeout: 2000 })

    }  
}
