const { MessageEmbed } = require("discord.js")
const { discord } = require("../config/bot");

module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()
    .setAuthor("Il n\'y a plus aucune musique dans la liste d'attente.", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
    .setTitle('R8 Music・:dna:')
    .setColor('RED')
    .setDescription(`${client.emotes.error} - Music stopped as there is no more music in the queue !`)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        
    message.channel.send(embed)
};