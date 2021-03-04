module.exports ={
    name: 'freakcup-qualifications',
    Description: 'Gives Freak Cup Info !',
    execute(client,message,args,Discord){
     
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#FC4206')
       .setTitle('Qualifications Descriptions')
       .setDescription(`4 Ways To Enter `)
       .addFields(

              
           {name: "1 -" , value: `**__Top 3 Players__ From Both Divisions Will Qualify For the Freak Cup**`},
           {name: "2 -" , value: `**__Semifinalists Of UEFA Champions League __ Will Only be Qualified For Freak Cup**`},  
           {name: "3 -" , value: '** Depending On the Common players among the above tourneys Maximum Top players form __La Liga and Premier League__ Will Be selected and will  Qualify For Freak Cup**'},
           {name: "4 -", value : `**The Winner Of Main Squad KO ( Scheduled for 19th Nov) and Runner Up, will Qualify For Freak Cup**`},
           {name: "5 -" , value: '**In Total there will be 16 players in the Cup** '},
        






       )
       
           .setImage('https://cdn.discordapp.com/attachments/610950416498425886/784433282804219924/img_agarcial_20180830-140538_imagenes_lv_terceros_pro_evolution_soccer_2019_20180830095902-kkRC-U451.png');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
