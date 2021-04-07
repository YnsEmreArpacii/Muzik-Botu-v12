module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Şimdi oynatılıyor ${track.title} İçine ${message.member.voice.channel.name} ...`);
};