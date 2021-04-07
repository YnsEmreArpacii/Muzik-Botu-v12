module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - ses kanalı boş olduğundan müzik durduruldu xD!`);
};