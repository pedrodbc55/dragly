const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    description: "Receba um prêmio diário de dinheiro",

    async run (client, message, args) {
        let user = message.author;
        let timeout = 86400000;
        let amount = 500;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`Você já colecionou seu prêmio diário. Volte para dentro ${time.days}d, ${time.hours}h, ${time.minutes}m, e ${time.seconds}s`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(`Adicionado com sucesso ${amount} moedas para sua conta`)
        }
    }
}