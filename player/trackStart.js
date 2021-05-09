const { MessageEmbed } = require("discord.js")
const { discord } = require("../config/bot");

module.exports = (client, message, track) => {
    message.channel.send(new MessageEmbed()
    .setAuthor("Son ajouté a la liste d'attente ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
    .setTitle('R8 Music ・🧬')
    .setColor('RED')
    .setDescription(`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL()))
        message.channel.send(embed)
};