const Discord = require("discord.js");
const disTube = require("distube");
module.exports.run = async (client, message, args, Discord) => {

    message.channel.send("Konsi Chaiye cs2 ya csgo ?");
  const filter = (m) => m.author.id == message.author.id && m.author.bot == false;
  const collected = await message.channel.awaitMessages({
    filter,
    max: 1,
    time: 60000,
    errors: ["time"],
  });
  const query = collected.first().content;
  if (
    query == "cs2" ||
    query == "Cs2" ||
    query == "CS2" ||
    query == "cS2" ||
    query == "cS2"
  ) {
    message.channel.send("connect cs2.omegaindiaworld.win ; password 0m3g@CS2");
  } else if (
    query == "csgo" ||
    query == "Csgo" ||
    query == "CSGO" ||
    query == "CSgo" ||
    query == "cSgo" ||
    query == "cSGo" ||
    query == "CsGo" ||
    query == "CSGo"
  ) {
    message.channel.send("connect omegaindiaworld.win ; password 0m3g@start");
    }
  try {
    const collected2 = await message.channel.awaitMessages({ filter, max: 1, time: 60000, errors: ['time'] });
    const query2 = collected2.first().content;
    const lowercase = query2.toLowerCase();
      if (lowercase == "thanks" ) {
          message.channel.send("Your Welcome <3");
      }
  } catch (error) {
    console.log(error);
    }
  
};

module.exports.config = {
  name: "ip",
  aliases: [],
  Description: "Command",
};
