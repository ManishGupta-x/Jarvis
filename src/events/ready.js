

module.exports = (client) => {
    console.log('Jarvis is online!');



    let statusarray = [

        `${client.guilds.cache.size/1000} K Servers`,
        `${client.channels.cache.size} Channels`,
        `${client.users.cache.size} Users`,
        `p!music for help `

    ]
    setInterval(() => {

        client.user.setActivity(`${statusarray[Math.floor(Math.random() * statusarray.length)]}`, { type: 'WATCHING' })

    }, 10000)

};