const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'replay',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}replay',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already playing !`);

        client.player.resume(message);

        message.channel.send(new MessageEmbed()
        .setAuthor("Le son a repris. ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
        .setTitle('R8 Music・:dna:')
        .setColor('RED')
        .setDescription(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} resumed !`)
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL()))
    },
};