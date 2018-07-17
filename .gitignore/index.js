const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("En dev - Indisponible");
    console.log("NelyxBot est connecté");
});

bot.login("");
