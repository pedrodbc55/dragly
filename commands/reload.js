module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '730074320189259828') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Reiniciando o bot..`)
        process.exit();
    }
}