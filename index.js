const Discord = require("discord.js");
const { LOADIPHLPAPI } = require("dns");
const { type } = require("os");
const Client = new Discord.Client;
const prefix = "!";
Client.login(process.env.TOKEN);



// Client Paramètre
Client.on("ready", () => {
    console.log("## GuinBear_BOT by Miinja#3382. ##");
    console.log("------------------------------");
    console.log("API Now Online !");
    console.log("------------------------------");
    setTimeout(() => {
        Client.user.setStatus("online");
        }, 100)

    Client.user.setActivity("a New Website !", {
            type:"STREAMING",
            url: "NextWebsite.com"
        });
    });
// Client Paramètre


// Message grade

Client.on('message', message => {
 
     const fs = require('fs');
     const userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8'));
     var sender = message.author;
     var Msender = message.mentions.users.first();
     const channel2upload = Client.channels.cache.get('926922179893952532');
     member = message.member;

     
     // Grade
     $100MSG = "935896782230130708";
     $300MSG = "932730791618805803";
     $500MSG = "935897621736857630";
     // Grade

    //  ALL STATS COMMANDS

        //!mystats
        if(message.content == prefix + "stats") {
            let Embed = new Discord.MessageEmbed()
            .setTitle("GuinBearGang")
            .setColor('#FFFFFF')
            .setDescription('**' + `${message.author}` + '** sent **' + userData[sender.id].messagesSent + '** messages !')
            .setThumbnail("https://media.giphy.com/media/Jv1Xu8EBCOynpoGBwd/giphy.gif")
            .setFooter(text="GuinbearBot")
            .setTimestamp()
            message.channel.send(Embed)
            }
        if (!userData[sender.id]) userData[sender.id] = {
            messageSent: 0
            }
        //!mystats



        // !leaderboard
        if(message.content == prefix + "HideLeaderboardOfTheGBG") {
            let Array = []
            message.guild.members.cache.forEach(function(member){
            if(!userData[member.id])return;
            const messages = userData[member.id].messagesSent
            Array.push({name : member.user.username, msg : messages})
        
            });
            Array.sort(function(b,a){
            return a.msg- b.msg
            })
            
            Array = Array.map((x,i)=>`#${i+1} |**  ${x.name}** with **${x.msg}** Messages. \n`);
             
            
            let Embed = new Discord.MessageEmbed()
            .setTitle("Leaderboard Of GuinBearGang")
            .setColor('#FFFFFF')
            .setDescription(Array.splice(0,10))
            .setThumbnail("https://media.giphy.com/media/Jv1Xu8EBCOynpoGBwd/giphy.gif")
            .setFooter(text="GuinbearBot")
            .setTimestamp()
            message.channel.send(Embed);
        }

        // !leaderboard

    //  ALL STATS COMMANDS

             //Messages Grades
             const user = message.author;

             if(!member.roles.cache.has($100MSG)) {
                    if(userData[sender.id].messagesSent > 100) {
                        member.roles.add($100MSG)
                        channel2upload.send("Wow " +`${message.author}`+ " ! You now have **100 Messages **." )
                        console.log("Wow " +message.author.tag+ " ! You now have **100 Messages **.")
                     }
            }

             if(!member.roles.cache.has($300MSG)) {
                     if(userData[sender.id].messagesSent > 300) {
                        member.roles.add($300MSG)
                        channel2upload.send("Wow " +`${message.author}`+ " ! You now have **300 Messages **." )
                        console.log("Wow" +message.author.tag+ " ! You now have **300 Messages **.")
                     }
            }  

            if(!member.roles.cache.has($500MSG)) {      
                     if(userData[sender.id].messagesSent > 500) {
                        member.roles.add($500MSG)
                        channel2upload.send("Wow " +`${message.author}`+ " ! You now have **500 Messages **." )
                        console.log("Wow " +message.author.tag+ " ! You now have **500 Messages **.")
                     }
            }
             //Messages Grades

    if(message.author.bot) return;
     if (message.channel.id !== "926922189280792597") {
         userData[sender.id].messagesSent++;
         fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {if (err) console.error(err);})
     } 
    });
// Message grade
