
module.exports = {
    name: 'kick',
    Description: 'this is a  kick command!',
    execute(message, args, Discord) {

        const user = message.mentions.users.first();

        if (user) {

            const member = message.guild.member(user);
            if (member) {
                member.kick('You where Kicked from freak gamer').then(() => {
                    message.reply(`Sucessfully kicked ${user.tag} https://tenor.com/view/kids-bye-kick-gif-13210062`);
                }).catch(err => {
                    message.reply(' I was unable to kick the Member');
                    console.log(err);


                });
            } else {
                message.reply("That user isn\'t in this guild")
            }
        } else {

            message.reply("You need to specify a Person!")
        }


    }
}
























