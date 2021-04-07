module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'iptal') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - seçimin iptal edildi!`);
    } else message.channel.send(`${client.emotes.error} - Aralarında geçerli bir numara göndermelisiniz**1** ve *9*${tracks.length}** !`);
};