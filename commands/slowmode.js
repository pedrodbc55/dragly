module.exports = {
  name: "slowmode",
  category: "utility",
  description: "Set the slowmode for the channel!",
  run: async (bot, message, args) => {
    if (!args[0])
      return message.channel.send(
        `Você não especificou o tempo em segundos que deseja definir o modo lento deste canal também!`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      bot.prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "No reason provided!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}** with the reason: **${reason}**`
    );
  },
};
