const { MessageEmbed } = require("discord.js")

module.exports = (client, message, queue, track) => {
    const embed = new MessageEmbed()
    .setAuthor("Son ajouté a la liste d'attente ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
    .setTitle('R8 Music・:dna:')
    .setColor('RED')
    .setDescription(`${client.emotes.music} - After playing ${track.title} into ${message.member.voice.channel.name} ...`)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL())

    message.channel.send(embed);
};