const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("En dev - Indisponible");
    console.log("Le bot a bien été connecté");
});

bot.login("NDY4NzkxNjg2OTExMjI5OTYz.Di-UfA.IH1XczCu91q1gMi0wWLLuYBhgXE");
