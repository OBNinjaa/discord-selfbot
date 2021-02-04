const Discord = require("discord.js");
const client = new Discord.Client();
var config = require("./config.json");
const chalk = require("chalk");
const log = console.log;
const fs = require("fs");
process.title = "discord.gg/oop";

const {
    prefix,
    token,
    sbversion
} = config;
const Constants = require("discord.js/src/util/Constants.js");
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;

client.on("ready", () => {
    client.login(config.token);
    log(chalk.cyan("[CLIENT] Connected to Discord via the token successfully."));
    log(chalk.cyan("[CLIENT] Logged in as: " + client.user.username));
    log(chalk.cyan("[CLIENT] Running on Discord API version " + Discord.version));
    log(chalk.cyan("[CLIENT] Running on Selfbot Name version " + sbversion));
    client.user.setActivity(``, {
        type: 0,
        browser: "DISCORD IOS"
    });
});

// Help
client.on("message", function(message) {
    if (message.content == ".help") {
        const exampleEmbed = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setTitle("**List Of Commands**")
            .setThumbnail("https://i.imgur.com/kP05HKu.png")
            .addField("command", "description")
            .addField("command", "description")
            .addField("command", "description")
            .addField("command", "description")
            .addField("command", "description")
            .addField("command", "description")
            .addField("command", "description")

            .setTimestamp()
            .setFooter("Created by OBNinjaa", "https://i.imgur.com/kP05HKu.png");

        message.channel.send(exampleEmbed);
    }
});

client.login(token);
