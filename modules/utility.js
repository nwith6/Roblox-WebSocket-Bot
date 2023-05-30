const { EmbedBuilder } = require("discord.js")

function SERVER(authorText, authorUrl, authorIconUrl, description) {
    return new EmbedBuilder()
        .setAuthor({ name: authorText, iconURL: authorIconUrl, url: authorUrl })
        .setDescription(description)
        .setColor(0x006fd5)
}

module.exports = {
    SERVER
}