# Roblox Web Socket Bot

## What is this bot?
This bot sends requests to multiple roblox endpoints to find out the web sockets for roblox servers. The bot has 2 commands, `getservers` and `getplayer`. The first command takes a game url and outputs upto 25 pieces of server data including the web socket. The second command takes a player username and will attempt to get that specific players server and output the server data, including the web socket.

## Examples

## How to get started
1. Clone this repo into a new workspace.
2. run `npm install` to install all the required dependencies.
3. Correctly fill out all the entries inside `config.json`
4. In your terminal run `npm run deploy` to deploy your commands and begin running the bot.
5. Now all you have to do from here is run the commands which are slash commands. To do this go to any text channel in your server and type `/getservers url: <game_url>` or `/getplayer username: <username>`.

# If you need any help contact me @ nathan#2400