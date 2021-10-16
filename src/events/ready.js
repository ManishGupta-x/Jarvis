

module.exports = (client) => {
    console.log('Jarvis is online!');

 let guildsize = client.guilds.cache.size ;

 if(guildsize > 1000){

guildsize = guildsize/1000; 

 
    let statusarray = [

        `${guildsize} Servers`,
        `${client.channels.cache.size} Channels`,
        `${client.users.cache.size} Users`,
        `p!music for help `

    ]

    setInterval(() => {

        client.user.setActivity(`${statusarray[Math.floor(Math.random() * statusarray.length)]}`, { type: 'WATCHING' })

    }, 10000)


}

    
};