const { MessageEmbed } = require("discord.js")
const { discord } = require("../config/bot");

module.exports = (client, message, queue, playlist) => {
    const embed = new MessageEmbed()
    .setAuthor("Son ajouté a la liste d'attente ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
    .setTitle('R8 Music・:dna:')
    .setColor('RED')
    .setDescription(`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs) !`)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        
    message.channel.send(embed)
};