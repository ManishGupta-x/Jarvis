const fs = require('fs');

module.exports = (client , Discord) =>{
  const command_files =  fs.readdirSync('./commands/').filter( file => file.endsWith('.js'));
  const deadline_files =  fs.readdirSync('./deadline/').filter( file => file.endsWith('.js'));
  const help_files =  fs.readdirSync('./help/').filter( file => file.endsWith('.js'));
  const id_files =  fs.readdirSync('./id/').filter( file => file.endsWith('.js'));
  const Rewards_files =  fs.readdirSync('./Rewards/').filter( file => file.endsWith('.js'));

for (const file of command_files) {

    const command = require(`../commands/${file}`);
    if(command.name){
        client.commands.set(command.name ,command)
    }else {
        continue;
    }
}

for (const file of deadline_files) {

    const command = require(`../deadline/${file}`);
    if(command.name){
        client.commands.set(command.name ,command)
    }else {
        continue;
    }
}

for (const file of help_files) {

    const command = require(`../help/${file}`);
    if(command.name){
        client.commands.set(command.name ,command)
    }else {
        continue;
    }
}

for (const file of id_files) {

    const command = require(`../id/${file}`);
    if(command.name){
        client.commands.set(command.name ,command)
    }else {
        continue;
    }
}
for (const file of Rewards_files) {

    const command = require(`../Rewards/${file}`);
    if(command.name){
        client.commands.set(command.name ,command)
    }else {
        continue;
    }
}

}