const Discord = require("discord.js");
var config = require("./config.json");
const fs = require("fs");

const Constants = require("discord.js/src/util/Constants.js");
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`;

const client = new Discord.Client();
const {
    prefix,
    token,
    sbversion
} = config;
client.on("ready", () => {
    client.login(config.token);
    console.log("[CLIENT] Connected to Discord via the token successfully.");
    console.log("[CLIENT] Username: " + client.user.username);
    console.log("[CLIENT] Running on Discord API version " + Discord.version);
    console.log("[CLIENT] Running on Selfbot Name version " + sbversion);
    client.user.setActivity(`Made by OBNinjaa`, {
        type: 3,
        browser: "DISCORD IOS"
    });
});

client.on("message", function(message) {
    if (message.content == ".bump") {
        message.channel.send("**Auto bumper has started!**");
        var interval = setInterval(function() {
            message.channel.send("!bump");
        }, 7.2e6);
    }
});

client.login(token);
