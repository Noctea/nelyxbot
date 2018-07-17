const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("En dev - Indisponible");
    console.log("NelyxBot est connecté");
});

bot.login("NDY4ODIxMTU2NDczMDc3NzYw.Di-veQ.i0fCrC6BxrN-jSVuID7l2tLjHYA");

var prefix = ("!");

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send("Bienvenue ${member}, sur le serveur de la `Nelyx - Team` ; avant de t'amuser va voir les règles dans le canal ${#règlement}.")

})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send("${member}, vient de quitter le serveur de la `Nelyx - Team`. Tant pis pour lui !")

})

bot.on('message', message => {

    if (message.content === 'ping') {

    message.channel.sendMessage('pong');

  }

});
