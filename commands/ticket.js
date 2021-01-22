const Discord = require('discord.js')


module.exports = {
    name: 'ticket',
    description: "opens a ticket",
    execute(message, args){
        const user = message.author.id;
        const name = "ticket-" + user;
        if(message.guild.channels.cache.find(ch => ch.name == name)){
            message.channel.send("You have already opened a ticket")
        }else{
    message.guild.channels.create(name).then((chan)=>{
    chan.updateOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
    })
    chan.updateOverwrite(user,{
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
    })
    message.channel.send("I have created a ticket for you");
    chan.send("Support will be here shortly").then((m)=>{
        m.pin()
    })
    })   

     }
    }
}

//This is the endticket.js file for my command handler

const Discord = require('discord.js')


module.exports = {
    name: 'Ticketfechado',
    description: "Ticket acabando",
    execute(client, message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Only a moderator can end a ticket!")

        if(message.member.hasPermission("ADMINISTRATOR")) message.channnel.delete()
    }

}