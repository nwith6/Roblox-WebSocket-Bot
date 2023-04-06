const discord = require("discord.js")
const { Scraper } = require("../modules/scraper")
const utility = require("../modules/utility")
const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getplayer')
        .setDescription("Fetch the server data for a specific server based on a players username.")
        .addStringOption(option =>
            option
                .setName("username")
                .setDescription("The players username.")
                .setRequired(true)
        ),

    /**
     * 
     * @param {discord.Interaction} interaction 
     */
    async execute(interaction) {
        const scraper = new Scraper(undefined)
        const server = await scraper.fetchPlayerServer(interaction.options.getString("username"))

        if (server.error) {
            return await interaction.reply({content: server.error, ephemeral: true})
        }

        const socketData = await scraper.fetchServerSocket(server.gameId)

        let serverString;
        if (socketData.error) {
            serverString = `; ${socketData.error} ;`
        } else {
            serverString = `[ User Server | (?/${server.maxPlayers}) | ${socketData.ip}:${socketData.port} | ?ms ]`
        }

        const embed = utility.SERVER(`${server.user.display} (${server.user.name})`, server.user.url, server.user.playerHeadshot, "```ini\n" + serverString + "```")
        await interaction.reply({embeds: [embed]})
    }
}