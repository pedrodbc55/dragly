const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const ping = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle("**Pong :ping_pong: **")
   .setDescription(`${message.author.username} Meu **Ping** -> ${Math.round(client.ws.ping)}Ms.`);
  message.channel.send(ping);
}