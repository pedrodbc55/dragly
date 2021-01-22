const ms = require('ms');

module.exports = {
    name: "reroll",
    description: "Rerolls giveaway",

    async run (client, message, args){

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Você não tem permissão para refazer brindes');

        if(!args[0]) return message.channel.send('Nenhum ID de sorteio fornecido');

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('Não consegui encontrar um sorteio com esse ID/nome');

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Sorteio reroll')
        })
        .catch((e) => {
            if(e.startsWith(`Sorteio com ID ${giveaway.messageID} não é terminado`)){
                message.channel.send('Este sorteio ainda não terminou.')
            } else {
                console.error(e);
                message.channel.send('An error occured')
            }
        })
    }
}