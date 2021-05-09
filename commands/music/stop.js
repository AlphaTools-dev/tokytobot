const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);
        
        message.channel.send(new MessageEmbed()
        .setAuthor("Le son a été arrêté ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
        .setTitle('R8 Music・:dna:')
        .setColor('RED')
        .setDescription(`${client.emotes.success} - Music **stopped** into this server !`)
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL()))

    },
};