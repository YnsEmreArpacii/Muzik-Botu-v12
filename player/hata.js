module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Bu sunucuda dj lik yapamam dostum  !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Dostum ses kanalında değilsin ki`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Sese giremiyorum çünkü izinlerim yok hadi yetki salda geliyim !`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Birşeyler ters gidiyor : ${error}`);
    };
};
