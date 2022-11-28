const { MessageEmbed } = require("discord.js")

function SERVER(authorText, authorUrl, authorIconUrl, description) {
    return new MessageEmbed()
        .setAuthor({name: authorText, url: authorUrl, iconURL: authorIconUrl})
        .setDescription(description)
        .setColor(0x006fd5)
}

module.exports = {
    SERVER
}