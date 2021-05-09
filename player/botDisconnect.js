const { MessageEmbed } = require("discord.js")
const { discord } = require("../config/bot");

module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()
    .setAuthor("Son ajouté a la liste d'attente ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
    .setTitle('R8 Music・:dna:')
    .setColor('RED')
    .setDescription(`${client.emotes.error} - Music stopped as i have been disconnected from the channel !`)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        
    message.channel.send(embed)
};