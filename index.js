const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
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
    if (message.content === prefix + " help") {
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes :")
            .setDescription("Commandes Disponible avec <@468821156473077760>")
            .addField("!n help", "Affiche cette page")
            .addField("!n twitter", "Affiche le twitter de la Nelyx - Team")
            .addField("!n twitch", "Affiche les chaînes Twitch de la Nelyx - Team")
            .addField("!n candidature", "Affiche les google form disponible pour les candidature dans la Nelyx - Team")
            .addField("!n infos", "Affiche les infos du Discord ; ex : Nom du serveur, Date de création, etc...")
            .setColor("0xFE2E2E")
            .setFooter("En espérant que vous passerez du bon temps sur le Discord de la Nelyx - Team")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " twitter") {
        var embed = new Discord.RichEmbed()
            .setTitle("Le Twitter :")
            .setDescription("[@NelyxTV](https://twitter.com/NelyxTV)")
            .setThumbnail("https://pbs.twimg.com/media/DiYnFwFW0AAcXQZ.jpg")
            .setColor("0x01A9DB")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " twitch") {
        var embed = new Discord.RichEmbed()
            .setTitle("Les Chaînes Twitch :")
            .setDescription("Nelyx - Team possède plusieurs Web TV sur Twitch")
            .addField("Web TV - Fortnite", "[NelyxFortnite](https://www.twitch.tv/nelyxfortnite)")
            .addField("Web TV - Overwatch", "[NelyxOverwatch](https://www.twitch.tv/nelyxoverwatch)")
            .addField("Web TV - Autres", "[NelyxTTV](https://www.twitch.tv/nelyxttv)")
            .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/1ebfa2cc-9c03-42e7-8d41-41e0bd1f2aef-profile_image-300x300.png")
            .setColor("0x610B5E")
            .setFooter("N'hésitez pas à aller vous abonné !")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " candidature") {
        var embed = new Discord.RichEmbed()
            .setTitle("Candidature Nelyx - Team :")
            .setDescription("Si vous souhaitez faire une candidature pour la Nelyx - Team")
            .addField("Candidature Fortnite", "[Nelyx - Fortnite](https://goo.gl/forms/HbvdUGsl9XWVN4Pf2)")
            .addField("Candidature Overwatch", "[Nelyx - Overwatch](https://goo.gl/forms/194lyH5jU0lsXTBH2)")
            .addField("Candidature Paladins", "[Nelyx - Paladins](https://goo.gl/forms/Jf9l4haLC6VvNmkU2)")
            .setThumbnail("https://pbs.twimg.com/media/DibwUXIXcAUli_m.jpg:large")
            .setColor("0x0489B1")
            .setFooter("Ce sont des formulaires à remplir obligatoirement si vous voulez intégrer la Nelyx - Team")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + " infos") {
        var embed = new Discord.RichEmbed()
            .setDescription("Informations sur le Discord :")
            .addField("Nom du Discord", message.guild.name)
            .addField("Crée le", message.guild.createdAt)
            .addField("Tu as rejoint le", message.member.joinedAt)
            .addField("Nombres de membres sur le Discord", message.guild.memberCount)
            .setThumbnail("https://pbs.twimg.com/media/DibwUXIXcAUli_m.jpg:large")
            .setColor("0x0404B4")
        message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + " test") {
        var embed = new Discord.RichEmbed()
            .setThumbnail("https://lh6.googleusercontent.com/OLJOn1kzFfCuYI-c1QPhCqUR76g7A5-hhzSeeukJJLHR6UmM-saCcALhcnEiJ96mLNejHKdMow=w1000")
            .setImage("https://lh5.googleusercontent.com/0OHe3WxuGW1nMNWyo0Cs1LdO-HH9onw-3mCYUMaFPGO9kcyXzsfeSOuN-lLrmQACPCigztq9AQ=w1000")
            .setColor("0x0404B4")
        message.channel.sendEmbed(embed)
    }

});
