module.exports = (client, error, message) => {
    const embed = new MessageEmbed()
      .setColor("RED")
      .setAuthor("Error ", "https://downloadwap.com/thumbs3/screensavers/d/new/logo-brands/equalizer_animated-83679.gif")
      .setTitle('R8 Music・:dna:')
      .setColor('RED')
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
      

  switch (error) {
        case 'NotPlaying':
            embed.setDescription(`${client.emotes.error} - There is no music being played on this server !`);
            break;
        case 'NotConnected':
            embed.setDescription(`${client.emotes.error} - You are not connected in any voice channel !`);
            break;
        case 'UnableToJoin':
            embed.setDescription(`${client.emotes.error} - I am not able to join your voice channel, please check my permissions !`);
            break;
        default:
            embed.setDescription(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
    };

  message.channel.send(embed);
};