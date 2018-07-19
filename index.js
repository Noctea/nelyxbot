const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setActivity("En dev | !n help");
});

bot.login(process.env.TOKEN);

var prefix = ("!n");


bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "aéroport").send(`Bienvenue, ${member} sur le serveur de la **Nelyx - Team** ; avant de faire quoi que se soit va lire les règles qui se trouve dans le canal <#431231993267879946>`);
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "aéroport").send(`Quel dommage, ${member} viens de quitter le serveur de la **Nelyx - Team** !`);
});


bot.on("message", message => {
    if (message.content === prefix + " help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes :")
            .setDescription("Commandes Disponible avec <@468821156473077760>")
            .addField("!n help", "Affiche cette page")
            .addField("!n twitter", "Affiche le twitter de Nelyx - Team")
            .addField("!n twitch", "Affiche les chaînes Twitch de Nelyx - Team")
            .addField("!n candidature", "Affiche les google form disponible pour les candidature dans la Nelyx - Team")
            .setColor("0xFE2E2E")
            .setFooter("En espérant que vous passerez du bon temps sur le Discord de Nelyx - Team")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " twitter"){
        var embed = new Discord.RichEmbed()
            .setTitle("Le Twitter :")
            .setDescription("[@NelyxTV](https://twitter.com/NelyxTV)")
            .setThumbnail("https://pbs.twimg.com/media/DiYnFwFW0AAcXQZ.jpg")
            .setColor("0x01A9DB")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " twitch"){
        var embed = new Discord.RichEmbed()
            .setTitle("Les Chaînes Twitch :")
            .setDescription("[NelyxTTV](https://www.twitch.tv/nelyxttv) \n [NelyxFortnite](https://www.twitch.tv/nelyxfortnite) \n [NelyxOverwatch](https://www.twitch.tv/nelyxoverwatch)")
            .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/1ebfa2cc-9c03-42e7-8d41-41e0bd1f2aef-profile_image-300x300.png")
            .setColor("0x610B5E")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " candidature"){
        var embed = new Discord.RichEmbed()
            .setTitle("Candidature Nelyx - Team :")
            .setDescription("Si vous souhaitez faire une candidature pour la Nelyx - Team")
            .addField("Candidature Fortnite", "[Nelyx - Fortnite](https://docs.google.com/forms/d/e/1FAIpQLSd2pOi3jduntU38tSacEBHFAR26Db5dri2AIdV7-zRi75jqzw/viewform)")
            .addField("Candidature Overwatch", "[Nelyx - Overwatch](https://docs.google.com/forms/d/e/1FAIpQLSfHI9JZKm3dQs1LVxKonuKB-JxElsfS2v9U3nqtsguuq4frRg/viewform)")
            .setThumbnail("https://pbs.twimg.com/media/DibwUXIXcAUli_m.jpg:large")
            .setColor("0x0489B1")
            .setFooter("Ce sont des formulaires à remplir obligatoirement si vous voulez intégrer la Nelyx - Team")
        message.channel.sendEmbed(embed);
    }

});
