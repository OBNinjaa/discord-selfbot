const Discord = require("discord.js");
const client = new Discord.Client();
var config = require("./config.json");
const chalk = require("chalk");
const log = console.log;
const fs = require("fs");
process.title = "discord.gg/wolkig";

const { owner, prefix, token, sbversion, advert, response } = config;
const Constants = require("discord.js/src/util/Constants.js");
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;

client.on("ready", () => {
	client.login(config.token);
	log(chalk.cyan("[CLIENT] Connected to Discord via the token successfully."));
	log(chalk.cyan("[CLIENT] Logged in as: " + client.user.username));
	log(chalk.cyan("[CLIENT] Running on Discord API version " + Discord.version));
	log(chalk.cyan("[CLIENT] Running on Selfbot Name version " + sbversion));
	client.user.setActivity(``, { type: 0, browser: "DISCORD IOS" });
});

// Auto bump - Disboard
client.on("message", function (message) {
	if (message.content == ".bump") {
		message.channel.send("**Disboard auto bump started!**");

		var interval = setInterval(function () {
			message.channel.send("!bump");
		}, 7.2e6); // Sends the message every 20 minuets
	}
});

// Auto Beg - Dank Memer
client.on("message", function (message) {
	if (message.content == ".beg") {
		message.channel.send("**Dank Memer auto beg started!**");

		var interval = setInterval(function () {
			message.channel.send("pls beg");
		}, 45000); // Sends the message every 45 seconds
	}
});

// Auto advertisement
client.on("message", function (message) {
	if (message.content == ".advertise") {
		message.channel.send("**Advertisement process started!**");

		var interval = setInterval(function () {
			message.channel.send(advert);
		}, 3.6e6); // Sends the message every hour
	}
});

// Help
client.on("message", function (message) {
	if (message.content == ".help") {
		const exampleEmbed = new Discord.RichEmbed()
			.setColor("#ff0000")
			.setTitle("**List Of Commands**")
			.setThumbnail("https://i.imgur.com/kP05HKu.png")
			.addField(".bump", "Automatically bumps your guild")
			.addField(".beg", "Automatically begs (Requires Dank Memer)")
			.addField(".advertise", "Sends an advertisement every hour")

			.setTimestamp()
			.setFooter("Created by OBNinjaa", "https://i.imgur.com/kP05HKu.png");

		message.channel.send(exampleEmbed);
	}
});

https: client.login(token);
