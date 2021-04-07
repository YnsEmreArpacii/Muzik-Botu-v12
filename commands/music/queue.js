module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalına geç  !`);
ld.me
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.gui.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bot ile aynı ses kanalında değilsiniz kenks !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şarkı çalmıyo kanka !`);

        message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** diğer şarkılar...` : `Çalma listesinde **${queue.tracks.length}** song(s)...`}`));
    },
};