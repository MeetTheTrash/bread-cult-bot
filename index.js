const Discord = require("discord.js");
const client = new Discord.Client();

const PREFIX = "-";

let images = ["./images/bread.png", "./images/bread1.png", "./images/bread2.png", "./images/bread3.png", "./images/bread4.png", "./images/bread5.png"];

let worship = ["All hail Yestia", "Yestia is Yes"];

client.on("ready", () => {
    console.log("Logged in!");
    client.user.setPresence ({ 
        activity: { 
            name: 'Bread' 
        }, 
        status: 'online' 
    });
  });
  

client.on("message", event => {
    if (event.content.toLowerCase() === "toast") {
        event.reply("Please refrain from sinning!");
    }
     
    if (!event.content.startsWith(PREFIX)) return;

    let args = event.content.substring(PREFIX.length).toLowerCase().split(" ");

    switch (args[0]) {
        case "rules":
            const rules = new Discord.MessageEmbed();

            rules.setTitle("Bread Cult Rules:");
            rules.addField("1. Be a good person", "Pretty obvious why this is a rule", false);
            rules.addField("2. No link shorteners", "Don't shorten links", false);
            rules.addField("3. No racism, bigotry, anti-seminism or anything of the sort", "This is also an obvious rule");
            rules.addField("4. No excessive swearing", "potty mouth", false);
            rules.addField("5. No slurs", "Don't have to explain why you shouldn't say slurs", false);
            rules.addField("5. No NSFW or lewds/ecchi", "ew", false);
            rules.addField("6. Be compliant with the TOS", "Follow Discord Terms of Service", false);
            rules.addField("7. English only", "So we know what you're saying", false);
            rules.addField("8. No grooming or child endangerment ", "Don't do it", false);
            rules.addField("9. No politics", "Don't be political", false);
            rules.addField("10. Keep this viewable by a 13 year old", "For the kids", false);
            rules.addField("11. No bot commands in general", "Keep general for conversations", false);
            rules.addField("12. Keep things in their respective channels", "They were made for a reason");
            rules.addField("13. Listen to the fuckin staff team", "Do it", false);
            rules.setColor(0xffcf4d);

            event.channel.send(rules);
        break;

        case "info":
            const info = new Discord.MessageEmbed();

            info.setTitle("Bread Cult Bot Info");
            info.addField("Made by: ", "TradingBooch12 and Meet_TheTrash", false);
            info.setDescription("I was sent by Yeastia");
            info.setColor(0xffcf4d);

            event.channel.send(info);
        break;

        case "bread":
            var index = Math.floor(Math.random() * images.length);

            const bread = new Discord.MessageEmbed();

            bread.setTitle("Bread");
            bread.attachFiles(images[index]);

            event.channel.send(bread);
        break;

        case "worship":
            var index = Math.floor(Math.random() * worship.length);

            event.channel.send(worship[index]);
        break
    }
});

client.login(process.env.TOKEN);
