const { MessageEmbed } = require("discord.js")
const { discord } = require("../config/bot");

module.exports = (client, message, query) => {
    const embed = new MessageEmbed()
    .setAuthor("Aucun son trouvé ! ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
    .setTitle('R8 Music・:dna:')
    .setColor('RED')
    .setDescription(`${client.emotes.error} - No results found on YouTube for ${query} !`)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
        
    message.channel.send(embed)
};