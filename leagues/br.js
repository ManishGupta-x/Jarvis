module.exports = {
    name: 'br',
    Description: 'this is a league command',
    async execute(message, args, Discord) {

        if (!args[0]) {
            message.reply("Mention Fixture number")

        }
        else if (args[0] == '1') {

            message.channel.send("https://cdn.discordapp.com/attachments/873925787017953310/873928036360278066/Screenshot_20210808-1920582.png")
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928060628533258/Screenshot_20210808-1921112.png')

        }

        else if (args[0] == '2') {

            message.channel.send("https://cdn.discordapp.com/attachments/873925787017953310/873928081566494760/Screenshot_20210808-1921252.png")
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928105788575764/Screenshot_20210808-1921342.png')

        }

        else if (args[0] == '3') {

            message.channel.send("https://cdn.discordapp.com/attachments/873925787017953310/873928137489149982/Screenshot_20210808-1921452.png")
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928164248793088/Screenshot_20210808-1921572.png')

        }

        else if (args[0] == '4') {

            message.channel.send("https://cdn.discordapp.com/attachments/873925787017953310/873928197941653514/Screenshot_20210808-1922092.png")
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928225326260234/Screenshot_20210808-1922202.png')

        }

        else if (args[0] == '5') {

            message.channel.send("https://cdn.discordapp.com/attachments/873925787017953310/873928250068455484/Screenshot_20210808-1922302.png")
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928279663448144/Screenshot_20210808-1922412.png')
        }
        else if (args[0] == '6') {

            message.channel.send("https://cdn.discordapp.com/attachments/873925787017953310/873928295626973204/Screenshot_20210808-1922502.png")
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928312550998056/Screenshot_20210808-1922592.png')
        }
        else if (args[0] == '7') {

            message.channel.send("https://cdn.discordapp.com/attachments/873925787017953310/873928350475894814/Screenshot_20210808-1923472.png")
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928363515985921/Screenshot_20210808-1923592.png')
            await message.channel.send('https://cdn.discordapp.com/attachments/873925787017953310/873928381836697651/Screenshot_20210808-1924082.png')
        }


        message.delete({ timeout: 2000 })

    }
}
