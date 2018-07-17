const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("En dev - Indisponible");
    console.log("NelyxBot est connecté");
});

bot.login("NDY4ODIxMTU2NDczMDc3NzYw.Di-veQ.i0fCrC6BxrN-jSVuID7l2tLjHYA");

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue ${member}, sur le serveur ${server} ; avant de discuter avec les autres membres du serveur va voir les règles dans le canal #règlement.`)

})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member}, vient de quitter le serveur ${server}. Tant pis pour lui !`)

})
