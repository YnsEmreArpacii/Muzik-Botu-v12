module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Kanaldan ayrıldığım için müzik durdu`);
};