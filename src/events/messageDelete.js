module.exports = (client,message) => {
    if (!message) {

        return;
    }
    if (message?.author?.bot) return;
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message?.author?.tag,
        member: message.member,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null



    })



}