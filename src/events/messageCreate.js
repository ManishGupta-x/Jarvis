
      /*╠══════════════════════════════════════════ 𝕸𝖊𝖘𝖘𝖆𝖌𝖊 𝖈𝖗𝖊𝖆𝖙𝖊 𝖊𝖛𝖊𝖓𝖙 ═════════════════════════════════════════════════════════════════╣*/


const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const mongoose = require("mongoose");
const prefix = require('../models/prefix');
const prefixModel = require("../models/prefix")
const config = require('../../settings.json')

mongoose.connect(config.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
var d;

   /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
   //gettingprefix

   module.exports = async (client, message) => {
   const data = await prefixModel.findOne({
      GuildID: message.guild.id
   });

   /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

   //commandfile declaration

   const file = client.commands.get(`snipe`);
   const searchfile = client.commands.get(`gsearch`);

   /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

   //args system	

   const messageArray = message.content.split(' ');
   const cmd = messageArray[0];
   const args = messageArray.slice(1);

   if (message.author.bot || message.channel.type === 'dm') return;
   if (message.author.bot) return;

   /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
   if (message.mentions.members.first()) {

      if (message.mentions.members.first().id == '550267183503114250' || message.mentions.members.first().id == '852779571816562729') {

         if (d == 1 && message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') {

            message.reply("Tumahra Darloo so rha h abhi 🥱, thodi der me ana 😴")

         }
         else if (d == 1) {

            message.reply("Boss sleeping rn 😴 , Ping him after a while 🥱")

         }
      }
   }

   /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
   //maincode

   if (data) {

      const prefix1 = data.Prefix;

      /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

      if (!message.content.startsWith(prefix1)) {

         switch (message.content) {


            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case 'jarvis': if (message.author.id == '550267183503114250' || message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') {

               message.reply("Yes Boss 🙃")


            } else if (message.author.id == '761159077639356446') {

               message.channel.send({ content: 'Hn bolo Janeman 🙃' })

            } else message.channel.send({ content: 'Hn bol bsdk 😒' })

               break;

            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case "jarvis google kr": searchfile.run(client, message, args, Discord);


               break;


            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case "-friendly": await message.channel.send({ content: `<@&885896296739790919>` })


               break;

            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case "sleep mode on": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {

               message.reply("Sweet dreams boss 🥱 ");
               d = 1;
            }
               break;


            case "sleep mode off": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {

               if (d == 1) {

                  message.reply("Deactivated Boss!!")
               }

               d = 0;
            }
               break;

            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
            case "jarvis snipe": file.run(client, message, args, Discord);


               break;

            case "snipe": file.run(client, message, args, Discord);

               break;

         }

      } else if (message.content.startsWith(prefix1)) {

         const commandfile = client.commands.get(cmd.slice(prefix1.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix1.length).toString().toLowerCase()));

         if (commandfile) {

            commandfile.run(client, message, args, Discord);

         }

      }

   } else if (!data) {

      const prefix2 = 'p!';

      if (!message.content.startsWith(prefix2)) {

         switch (message.content) {


            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case 'jarvis': if (message.author.id == '550267183503114250' || message.author.id == '761159077639356446' && message.guild.id == '730714810064306188') {

               message.reply("Yes Boss 🙃")


            } else if (message.author.id == '761159077639356446') {

               message.channel.send({ content: 'Hn bolo Janeman 🙃' })

            } else message.channel.send({ content: 'Hn bol bsdk 😒' })

               break;

            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case "jarvis google kr": searchfile.run(client, message, args, Discord);


               break;


            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case "-friendly": await message.channel.send({ content: `<@&885896296739790919>` })


               break;

            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/

            case "sleep mode on": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {

               message.reply("Sweet dreams boss 🥱 ");
               d = 1;
            }
               break;


            case "sleep mode off": if (message.author.id == '550267183503114250' || message.author.id == '852779571816562729') {

               if (d == 1) {

                  message.reply("Deactivated Boss!!")
               }

               d = 0;
            }
               break;

            /*╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════╣*/
            case "jarvis snipe": file.run(client, message, args, Discord);


               break;

            case "snipe": file.run(client, message, args, Discord);

               break;
         }

      } else if (message.content.startsWith(prefix2)) {

         const commandfile = client.commands.get(cmd.slice(prefix2.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix2.length).toString().toLowerCase()));

         if (commandfile) {

            commandfile.run(client, message, args, Discord);

         }

      }


   }


}