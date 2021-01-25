const Discord = require("discord.js");
var config = require("./config.json");
const fs = require("fs");

const client = new Discord.Client();
const { prefix, token, sbversion } = config;
client.on("ready", () => {
	client.login(config.token);
	console.log("[CLIENT] Connected to Discord via the token successfully.");
	console.log("[CLIENT] Username: " + client.user.username);
	console.log("[CLIENT] Running on Discord API version " + Discord.version);
	console.log("[CLIENT] Running on Selfbot Name version " + sbversion);
});

client.login(token);
