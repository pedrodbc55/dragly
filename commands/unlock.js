const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    
  if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(':x: | Falta permissão `Manage_Channels`')

  const travado = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription('🔓 | Canal destravado.')
   .setColor('#261717')
  message.channel.send(travado)

  message.channel.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: true,
    ADD_REACTIONS: true
  })
}