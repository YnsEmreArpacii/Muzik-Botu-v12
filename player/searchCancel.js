module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Geçerli bir yanıt vermediniz ... Lütfen komutu tekrar gönderin`);
};