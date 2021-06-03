const math = require('mathjs');
module.exports ={
    name: 'calc',
    Description: 'this is a  Ping command!',
    execute(message,args, Discord){
     if(args[0]) return message.channel.send('Please Input Calculation');
     let resp;
     try{
         resp = math.eval(args.join(' '));
     }catch(e){
         return message.channel.send('sorry, please input a valid calculation');
     }
     const embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('Calculator') 
     .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)           
     .addField('Output', `\`\`\`js\n${resp}\`\`\``)             

     message.channel.send(embed);
    }  
}