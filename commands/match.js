module.exports ={
    name: 'match',
    Description: 'this is a  match command!',
    execute(client,message,args, Discord){
     
        var player1 = Math.floor(Math.random() * 4);
        var player2 = Math.floor(Math.random() * 4);

        let question1 = message.content.slice(prefix.length + 6)
        if (!question1) {

            return message.channel.send('You didnt specified a match to generate')
        }
        const Embed1 = new Discord.MessageEmbed()
            .setColor('#00f1ff')
            .setTitle("Results ")
            .setDescription(question1 + "\n" + player1 + '-' + player2)

        message.channel.send(Embed1);

        message.delete({ timeout: 2000 })

    }  
}