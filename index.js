const Discord = require('discord.js');

const client = new Discord.Client();
const { MessageEmbed } = require('discord.js')

const prefix = 'p!';
const fs = require('fs');
const { disconnect } = require('process');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {

    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.deadline = new Discord.Collection();
const deadlineFiles = fs.readdirSync('./deadline/').filter(file => file.endsWith('.js'));
for (const file of deadlineFiles) {

    const command = require(`./deadline/${file}`);
    client.deadline.set(command.name, command);
}
client.Rewards = new Discord.Collection();
const RewardsFiles = fs.readdirSync('./Rewards/').filter(file => file.endsWith('.js'));
for (const file of RewardsFiles) {

    const command = require(`./Rewards/${file}`);
    client.Rewards.set(command.name, command);
}

client.help = new Discord.Collection();
const helpFiles = fs.readdirSync('./help/').filter(file => file.endsWith('.js'));
for (const file of helpFiles) {

    const command = require(`./help/${file}`);
    client.help.set(command.name, command);
}


client.once('ready', () => {
    console.log('Nightmare is online!');
    client.user.setActivity('PES 2021', { type: 'PLAYING' }).catch(console.error);

});
module.exports.timedcheck = undefined;
module.exports.val = 0;


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    switch (command) {

        case 'ping': client.commands.get('ping').execute(message, args);
            break;
        case 'youtube': client.commands.get('youtube').execute(message, args);
            break;
        case 'official': client.commands.get('official').execute(message, args);
            break;
        case 'twitter': client.commands.get('twitter').execute(message, args);
            break;
        case 'freakcup': client.commands.get('freakcup').execute(message, args);
            break;
        case 'div1': client.commands.get('div1').execute(message, args);
            break;
        case 'div2': client.commands.get('div2').execute(message, args);
            break;
        case 'clear': client.commands.get('clear').execute(message, args);
            break;
        case 'divisions': client.commands.get('divisions').execute(message, args);
            break;
        case 'deadline-mainko': client.deadline.get('deadline-mainko').execute(message, args, Discord);
            break;
        case 'deadline-freakcup': client.deadline.get('deadline-freakcup').execute(message, args, Discord);
            break;
        case 'deadline-ucl': client.deadline.get('deadline-ucl').execute(message, args, Discord);
            break;
        case 'deadline-laliga': client.deadline.get('deadline-laliga').execute(message, args, Discord);
            break;
        case 'deadline-premleague': client.deadline.get('deadline-premleague').execute(message, args, Discord);
            break;
        case 'main-squadko': client.commands.get('main-squadko').execute(message, args, Discord);
            break;
        case 'rewards-freakcup': client.Rewards.get('rewards-freakcup').execute(message, args, Discord);
            break;
        case 'rewards-ucl': client.Rewards.get('rewards-ucl').execute(message, args, Discord);
            break;
        case 'rewards-laliga': client.Rewards.get('rewards-laliga').execute(message, args, Discord);
            break;
        case 'rewards-premleague': client.Rewards.get('rewards-premleague').execute(message, args, Discord);
            break;
        case 'rewards-mainko': client.Rewards.get('rewards-mainko').execute(message, args, Discord);
            break;
        case 'kick': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
            return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 }));

            client.commands.get('kick').execute(message, args, Discord);
            break;

        case 'gn': client.commands.get('gn').execute(message, args, Discord);
            break;
        case 'mute': client.commands.get('mute').execute(message, args, Discord);
            break;
        case 'unmute': client.commands.get('unmute').execute(message, args, Discord);
            break;
        case 'gn': client.commands.get('gn').execute(message, args, Discord);
            break;

        case 'poll': if (!message.member.roles.cache.has('599566802682511360') && !message.member.roles.cache.has('610377914109788180'))
            return message.channel.send('YOU DONT HAVE PERMISSION TO THAT DUMB ').then(message => message.delete({ timeout: 4000 })).catch(console.error);
            const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

            if (!channel) {


                return message.channel.send('You did not mention / give the id of the channel you wanted to create the poll in!')
            }

            let question = message.content.slice(prefix.length + 5 + channel.id.length + 3)
            if (!question) {

                return message.channel.send('You didnt specified a question for the poll')
            }
            const Embed = new MessageEmbed()
                .setColor('#00f1ff')
                .setTitle("Who will win 🤔")
                .setDescription(question)
                .setFooter(`Mark The correct Option Below 🤩`)
            let msg = await client.channels.cache.get(channel.id).send(Embed)
            await msg.react('1️⃣')
            await msg.react('2️⃣')
            await msg.react('🤝')
            message.delete({ timeout: 2000 })
            break;

        case 'bday': client.commands.get('bday').execute(message, args, Discord);
            break;
        case 'help' : {
               
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#6beea8')
            .setTitle('Help Module')
            .setDescription('Server\'s Info And Commands')
            .addFields( 
                 
                 {name : "1. General Commands " , value : `Gives Info for General commands like ping 
                 , twitter , official...etc`},
                 {name : "2. Rewards" , value : `Gives Info for Rewards Commands`},
     
                 {name : "3. Tourneys Info And Rules" , value : `Gives Info and rules for Tourneys `},
                 {name : "4. Deadline Commands " , value : `Gives Info for Deadline Commands`},
                 {name : "5. Server Competitions" , value : `Gives Info For Our Server Competetions`}
                  
               
             
             
                )
                .setFooter(`You can only React for one at a time`)
               .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784406658075721758/WW-17-800x445.jpg');
              
                
                let msg = await message.channel.send(newEmbed)
               await msg.react('1️⃣')
               await msg.react('2️⃣')
               await msg.react('3️⃣')
               await msg.react('4️⃣')
               await msg.react('5️⃣')
               await msg.awaitReactions((reaction,user) => user.id == user.id && (reaction.emoji.name=='1️⃣' || 
                
                reaction.emoji.name=='2️⃣' || reaction.emoji.name=='3️⃣' || reaction.emoji.name=='4️⃣' || reaction.emoji.name=='5️⃣'),{ max :1 , time: 10000})
                .then(async collected=>{
                if (collected.first().emoji.name== '1️⃣' ){ return client.help.get('1').execute(message, args, Discord) }
                else if(collected.first().emoji.name== '2️⃣' ){ return client.help.get('2').execute(message, args, Discord) }
                else if(collected.first().emoji.name== '3️⃣' ){ return client.help.get('3').execute(message, args, Discord) }
                else if(collected.first().emoji.name== '4️⃣' ){ return client.help.get('4').execute(message, args, Discord) }
                else if(collected.first().emoji.name== '5️⃣' ){ return client.help.get('5').execute(message, args, Discord) }
                else return message.channel.send('error');

                
                


                } ) .catch(async () => { return message.channel.send("error")});

        }
        
        
            break;
            case 'match' : 

            var player1 =Math.random()*4;
            var player2 = Math.random()*4;
            
            let question1 = message.content.slice(prefix.length + 5 + channel.id.length + 3)
            if (!question1) {

                return message.channel.send('You didnt specified a match to generate')
            }
            const Embed1 = new MessageEmbed()
                .setColor('#00f1ff')
                .setTitle("Results " )
                .setDescription(question + player1 + '-' + player2)
                .setFooter(`Mark The correct Option Below 🤩`)
             
            message.delete({ timeout: 2000 })
            
           

    }

}




);



client.login(process.env.token);