const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("En dev - Indisponible");
    console.log("NelyxBot est connecté");
});

bot.login(process.env.TOKEN);

var prefix = ("!n");

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue, ${member} sur le serveur de la **Nelyx - Team** ; avant de faire quoi que se soit va lire les règles qui se trouve dans le canal #règlement`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`Quel dommage, ${member} viens de quitter le serveur de la **Nelyx - Team** !`)
})

bot.on('message', message => {
if (message.content === prefix + "twitter"){
    message.channel.sendMessage("test");
});
