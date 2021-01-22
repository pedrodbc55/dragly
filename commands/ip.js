const Discord = require("discord.js")
const config = require('../config.json');

module.exports.run = async (client, message, args) =>{
  const Ajuda = new Discord.MessageEmbed()
  .setColor('#113aea')
  .setTitle("**Ip da Dragly**")
  .setDescription(` Ip do servidor

  ---------------------------------------------------
  <:emoji_3:801970836059717653>  rededragly.tk

  

  


  
  `);
   message.channel.send(Ajuda);
}
  