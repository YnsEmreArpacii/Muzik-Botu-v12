module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Youtube da böyle bir şarkı olduğundan emin değilim xD ${query} !`);
};