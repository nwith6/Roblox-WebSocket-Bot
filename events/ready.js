const discord = require("discord.js")

module.exports = {
    
    /**
     * 
     * @param {discord.Client} client 
     */
    async execute(client) {
        console.log(`Logged in as ${client.user.tag}`)
    }
}