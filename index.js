const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("En dev | !n help");
});

bot.login(process.env.TOKEN);

var prefix = ("!n");


bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue, ${member} sur le serveur de la **Nelyx - Team** ; avant de faire quoi que se soit va lire les règles qui se trouve dans le canal <#431231993267879946>`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`Quel dommage, ${member} viens de quitter le serveur de la **Nelyx - Team** !`)
})


bot.on("message", message => {
    if (message.content === prefix + " help"){
        message.channel.sendMessage("Commandes : \n \n !n help \n !n twitter \n !n twitch");
    }

    if (message.content === prefix + " twitter"){
        message.channel.sendMessage("[@NelyxTV] (https://twitter.com/NelyxTV)");
    }

    if (message.content === prefix + " twitch"){
        message.channel.sendMessage("[NelyxTTV] (https://www.twitch.tv/nelyxttv) \n [NelyxFortnite] (https://www.twitch.tv/nelyxfortnite) \n [NelyxOverwatch] (https://www.twitch.tv/nelyxoverwatch)");
    }
});
