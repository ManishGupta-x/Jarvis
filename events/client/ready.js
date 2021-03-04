module.exports = () => {
    console.log('Nightmare is online!');
    client.user.setActivity('PES 2021', { type: 'PLAYING' }).catch(console.error);
}