const express = require('express');
const app = express();
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
require('dotenv').config();
const config = require("./config.json");

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

       try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
let active = new Map();
let ops = { active: active }
});



client.on('ready', () => {
 
    let activities = [
    
        `Meu prefixo é ${config.prefix}`,
        `Para adquirir ajuda ${config.prefix}ajuda`,
        `Status:ON`,
        `Ip do servidor:rededragly.tk`,
        `Bot exclusivo do rededragly`,
        `Creditos para:PolaarZz
#7209`
    
    ],
    i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ %
    activities.length]}`, {
        type: "WATCHING"
    }), 5000);
    console.log(`Aplicação Iniciada...`);
let active = new Map();
let ops = { active: active }
});




      client.on('message', message => {
        const nick = message.mentions.members.first();
        if (message.content.includes('nick')) {
          if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
          message.member.setNickname(message.content.replace('changeNick ', ''));
      }
    }); 


client.login(process.env.TOKEN); 
