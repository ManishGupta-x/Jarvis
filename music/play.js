module.exports ={
    name: 'play',
    Description: 'this is a music command!',
    execute(client,message,args, Discord){
     
        const music = args.join(" ");

        client.distube.play(message, music)


    }  
}