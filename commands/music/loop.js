const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop / (queue)',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(new MessageEmbed()
                .setAuthor("La playslist ne sera pas repétée", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
                .setTitle('R8 Music・:dna:')
                .setColor('RED')
                .setDescription(`${client.emotes.success} - Repeat mode **disabled** !`)
                .setFooter(`${message.author.username}`, message.author.displayAvatarURL()))
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(new MessageEmbed()
                .setAuthor("La playslist redemarrera aprés la derniere musique", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
                .setTitle('R8 Music・:dna:')
                .setColor('RED')
                .setDescription(`${client.emotes.success} - Repeat mode **enabled** the whole queue will be repeated endlessly !`)
                .setFooter(`${message.author.username}`, message.author.displayAvatarURL()))
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(new MessageEmbed()
                .setAuthor("La musique ne sera pas repétée", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
                .setTitle('R8 Music・:dna:')
                .setColor('RED')
                .setDescription(`${client.emotes.success} - Repeat mode **disabled** !`)
                .setFooter(`${message.author.username}`, message.author.displayAvatarURL()))
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(new MessageEmbed()
                .setAuthor("La musique redemarrera aprés la derniere musique", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
                .setTitle('R8 Music・:dna:')
                .setColor('RED')
                .setDescription(`${client.emotes.success} - Repeat mode **enabled** the current music will be repeated endlessly !`)
                .setFooter(`${message.author.username}`, message.author.displayAvatarURL()))
            };
        };
    },
};