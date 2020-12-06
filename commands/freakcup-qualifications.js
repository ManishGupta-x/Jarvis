module.exports ={
    name: 'freakcup-qualifications',
    Description: 'Gives Freak Cup Info !',
    execute(message,args,Discord){
     
       const newEmbed = new MessageEmbed()
       .setColor('#FC4206')
       .setTitle('Qualifications Descriptions')
       .setDescription(` 

       **1.  __Top 3 Players__ From Both Divisions Will Qualify For the Freak Cup **
       
       **2. __Semifinalists Of UEFA Champions League __ Will Only be Qualified For Freak Cup**
       
       **3. The Winner Of Main Squad KO ( Scheduled for 19th Nov) and Runner Up, will Qualify For Freak Cup**
       
       **4. Depending On the Common players among the above tourneys Maximum Top players form __La Liga and Premier League__ Will Be selected and will  Qualify For Freak Cup**
       
       __In Total there will be 16 players in the Cup__
       
       __**THESE RULES WILL BE APPLICABLE FROM THE CURRENT SEASON AND WILL GO AS IT IS FOR UPCOMING SEASONS**__:Take_L: 
       
       **BEST OF LUCK GUYS*`)
       
           .setImage('https://cdn.discordapp.com/attachments/767787771816443966/776755041872642048/FIF_world_cup_trophy_on_grassjpg.jpg');
           
           
           message.channel.send(newEmbed);
        } 
        
        
}
