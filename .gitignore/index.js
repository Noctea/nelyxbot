const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("En dev - Indisponible");
    console.log("Le bot a bien été connecté");
});

bot.login("NDY4ODIxMTU2NDczMDc3NzYw.Di-veQ.i0fCrC6BxrN-jSVuID7l2tLjHYA");
