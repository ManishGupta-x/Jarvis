

module.exports = (client) => {
    console.log('Jarvis is online!');

var us = client.users.cache.size;

us = us.toString();
us = us.slice(0,-2);
us = parseInt(us);
us = us/10;


    let statusarray = [

        `${client.guilds.cache.size}  Servers`,
        `${client.channels.cache.size} Channels`,
        `${us}K Users`,
        `p!help `
       
    ]
    setInterval(() => {

        client.user.setActivity(`${statusarray[Math.floor(Math.random() * statusarray.length)]}`, { type: 'WATCHING' })

    }, 10000)

};