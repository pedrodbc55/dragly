const Discord = require("discord.js")
const config = require('../config.json');

module.exports.run = async (client, message, args) =>{
  const Ajuda = new Discord.MessageEmbed()
  .setColor('#113aea')
  .setTitle("**Central de Ajuda**")
  .setDescription(` Meu Prefixo : "/"

  ---------------------------------------------------
  <:emoji_5:801970885031362613>___Comandos de Diversão___

  ${config.prefix}<:legit_seta:801964652392742952>abraço - Abreçe Alguem do servidor.

  ${config.prefix}<:legit_seta:801964652392742952>avatar - Veja o Avatar de alguem.

  ${config.prefix}<:legit_seta:801964652392742952>ajuda - Veja todos os meus comandos.

  ${config.prefix}<:legit_seta:801964652392742952>ping - Veja meu Ping.

  ${config.prefix}<:legit_seta:801964652392742952>kiss - Beije alguem.
  
  ${config.prefix}<:legit_seta:801964652392742952>coinflip - Teste sua sorte jogando cara ou coroa

  ${config.prefix}<:legit_seta:801964652392742952>emo - Veja se o emoji e deste ou de outro server
  ${config.prefix}<:legit_seta:801964652392742952>slowmode - Ative/Desligue o modo espera

  ${config.prefix}<:legit_seta:801964652392742952>sorteio - Faça um sorteio
  <:emoji_12:801971132152414231>___Comandos de Moderação___


  ${config.prefix}<:legit_seta:801964652392742952>limpar - Limpe seu chat.

  ${config.prefix}<:legit_seta:801964652392742952>ban - Bane alguem do seu servidor.

  ${config.prefix}<:legit_seta:801964652392742952>unban - Desbane alguem do seu servidor.

  ${config.prefix}<:legit_seta:801964652392742952>lock - trave algum canal.

  ${config.prefix}<:legit_seta:801964652392742952>unlock - Destrave algum canal travado.

  ${config.prefix}<:legit_seta:801964652392742952>kick - Kicke alguem do seu servidor.

  ${config.prefix}<:legit_seta:801964652392742952>say - Faça o Bot falar.

  ${config.prefix}<:legit_seta:801964652392742952>uptime - Veja o tempo em que o bot esta online.
  ${config.prefix}<:legit_seta:801964652392742952>Ip - veja o ip do servidor

  <:emoji_8:801971063864426537>Se algum comando não pegar comunique o SadBoyZz#2021

  


  
  `);
   message.channel.send(Ajuda);
}
  