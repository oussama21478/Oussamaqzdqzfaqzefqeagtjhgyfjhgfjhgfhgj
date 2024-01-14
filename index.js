const express = require('express');
const app = express();
const chalk = require("chalk");
const keep_alive = require('./keep_alive.js')

app.use('/ping', (req, res) => {
        res.send(new Date());
});
app.listen(3000, () => {
        console.log(chalk.red.bold('Express is ready.'))
});

const Discord = require("discord.js");

const { Client , MessageActionRow , MessageButton , MessageEmbed , MessageSelectMenu , Intents } = require("discord.js");


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
  allowedMentions: { repliedUser: false }, ws: {properties: { $browser:"Discord iOS" }
      },
});

const db = require("quick.db");
const ms = require("ms");

const prefix = "+";

client.on('ready', () => {
console.log(`${client.user.tag}`)
 client.user.setActivity(`1 + 2`, { type: 'STREAMING', url: 'https://www.twitch.tv/SXB' })
});


client.login(process.env.token).catch((err) => {
   console.log(err.message)
});

////////////////////////

/////////////////اجعل الكود فيه 6 أزرار كل زر ينقل المستخدم إلى غرفة محددة، 


////////////////////log-help




////////////////kill 1 staf

////////////////////////24/7


const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("1086413411392442408") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
});


/////////////////////////////////انا حي

client.on('message', message => {
if(message.content.startsWith("oussama1")) {
message.reply(`**انا حي لاتقلق**`)

}
});

///////////give-role
  
 client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith (prefix+"addrole")) {

if(!message.member.roles.cache.has('1039647541723136090')) return message.reply("<a:33222:1073588446934880286>")
    
const theRole = message.mentions.roles.first() || message.guild.roles.cache.get(message.content.split(" ")[2]);
 
const theUser = message.mentions.members.first();
 
if (!theUser) return message.reply('Please Mention A User !')
 
if (!theRole) return message.reply('مسافة وحدة بين الطاق وايدي الرول   <a:SXB_ahmm:1070828719964426320>')
 
theUser.roles.add(theRole)
.then( () => {
message.reply("Done ")
})
.catch( (t) => {
message.reply("Error  : "+t.message)
})
  }
})
/////////////////dele-role

client.on("messageCreate", message => {
  if (message.content.toLowerCase().startsWith (prefix+"delrole")) {
 
const theRole = message.mentions.roles.first() || message.guild.roles.cache.get(message.content.split(" ")[2]);

    if(!message.member.roles.cache.has('1039647541723136090')) return message.reply("ليست لديك الصلاحية   <a:t_EspHhahah:1070854932904808458>")
 
const theUser = message.mentions.members.first();
 
if (!theUser) return message.reply('Please Mention A User !')
 
if (!theRole) return message.reply('Please Mention A Role !')
 
theUser.roles.remove(theRole)
.then( () => {
message.reply("Done ")
})
.catch( (t) => {
message.reply("Error  : "+t.message)
})
  }
})
///////////come-
client.on("messageCreate", message => {
  if (message.content.startsWith(prefix + "come")) {

if(!message.member.roles.cache.has('1148073351835832370')) return message.reply("ليست لديك الصلاحية <a:pp234:1023035959459184700>")

          let args = message.content.split(" ").slice(1).join(" ");
    
                const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
          
                if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
                
                if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
      
                if (member.id === message.member.id)
              return message.reply({ content: `:rolling_eyes: **You can't send yourself**`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
         
          
          let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('اضغط هنا للانقال للتكت')
      .setURL(`${message.url}`))
 
 

    let embed = new MessageEmbed()
       .setDescription(`**تم دعوتك من قبل الادارة هنا <#${message.channel.id}>, الرجاء الذهاب الى التكت في حال عدم الرد عليها سيتم اغلاقها**`) 
        .setColor(message.guild.me.displayColor)
 
 
    member.send({embeds: [embed], components: [button]}).then(() => {
    message.reply (`:white_check_mark: **Done send invitation to join**`)
}).catch(() => {
    message.reply(`:x: **I could not send the invitation message **`)
}).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                   })
        }
});


//////////////////Spin

let allowedRole = '934052877763235917' // ايدي الرتبه اللي تقدر تعمل سبن
let nothing = ['1', 
               '2',
               '3', 
               '4',
               '5' ];
 
client.on('messageCreate', message => { 
if (message.content.startsWith(prefix + "spin")) {
  if (!message.guild) return;
if (message.member.roles.cache.find(role => role.id === allowedRole)) {
        let user = message.mentions.members.first()
        if (!user) return message.channel.send(`❌ please mention a member : ${prefix}spin @user`)


let embed = new MessageEmbed()
    .setAuthor(`${user.user.tag}`, user.user.displayAvatarURL({ dynamic: true }))
           .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setDescription(` 🎉 مـبروك يـا  ${user} فـزت في : ${nothing[Math.floor(Math.random() * nothing.length)]} `)
          .setTimestamp()
        .setColor('RANDOM')
        

message.channel.send({embeds: [embed]})

}
}

});
///////////////////////emoje 

client.on("message",async message=>{
if(message.content.startsWith(prefix+"adde")){

if(!message.member.roles.cache.has('942071332315750491')) return message.reply("ليست لديك صلاحية   <a:pp234:1023035959459184700>")
  
    let args=message.content.split(" ").slice(1)
    const emojis = args
    if(!emojis.length){
      message.channel.send(`**\`\`\-\`\`\ Please choose an emoji to add .**`)
      return ;
    }
    let names = []
    for (const emoji of emojis) {
      let info = Discord.Util.parseEmoji(emoji)
      if (!info.id) {
        continue;
      }
      let type = info.animated ? ".gif" : ".png"
      let url = `https://cdn.discordapp.com/emojis/${info.id + type}`
      var emj=await message.guild.emojis.create(url, info.name, {
        reason: `emoji created by ${client.user.tag}`
      })
      names.push(emj)
    }
    if(!names.length){
       message.channel.send("**\`\`\-\`\`\ Sorry to find any emoji .**");
       return;
    } else {
    message.channel.send(`**\`\`\-\`\`\ Done adeded emoji 
\`\`\-\`\`\ emoji : ${names.join("/")} . **`)
    }
}
})

////////////////////////allban


client.on('messageCreate', message => {
  if (message.content.startsWith(prefix + "allbans")) {
    if (!message.guild) return;
    if(!message.member.permissions.has('BAN_MEMBERS')) return;
    message.guild.bans.fetch()
.then(bans => {
          
  let list = bans.map(user => `- ${user.user.username}`).join('\n');
    
  if (list.length >= 1950) list = `${list.slice(0, 1948)}`;

  const embed = new MessageEmbed()
  .setColor(message.guild.me.displayColor)
  .setTitle(`${bans.size} users are banned :`)
  .setDescription(`
**${list}**
      `)
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic : true}))
 message.channel.send({embeds : [embed]})
})
.catch(console.error);
  }
});


//////////////////////ادارة تكت ريبوند

//1
client.on("channelCreate", async channel => {
const CategoryID = "1148073454512373790" //الكاتيجوري
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && CategoryID.includes(channel.parent.id)) {

await new Promise(r => setTimeout(r, 2000))
  
channel.send(`**مرحبا عزيزي المواطن . لتقديم شكوى على احد الاداريين الرجاء ملئ هاذه الاستمارة**

**الاداري (الاسم)  :**
**ايدي الاداري  : **
**نص الشكوى  : **
**الادلة ان وجدت  : **

 **الرجاء التحلي بالصبر وانتظار الرد من الادارة العليا**`)
}
});
//2
client.on("channelCreate", async channel => {
const CategoryID = "1148073455804227674" //الكاتيجوري
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && CategoryID.includes(channel.parent.id)) {

await new Promise(r => setTimeout(r, 2000))
  
channel.send(`
**مرحبا عزيزي المواطن . الرجاء ملئ هاذه الاستمارة لتستطيع الادارة مساعدتك وحل مشكلتك**

**الايدي الخاص بك : **
**سبب فتح التذكرة :**


**وانتظر الرد من الادارة**

`) // الرد

}
});
//3
client.on("channelCreate", async channel => {
const CategoryID = "1148073452150988820" //الكاتيجوري
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && CategoryID.includes(channel.parent.id)) {

await new Promise(r => setTimeout(r, 2000))
  
channel.send(`
**مرحبا عزيزي المواطن . لشراء سيارة الرجاء ملئ هاذه الاستمارة**

**الايدي الخاص بك  :**
**المتنج الذي تريد شراءه :**
**الصورة الخاصة بالمنتج :**
**دليل تحويل الكريديت  : **

 **الرجاء انتظار المسؤولين للرد عليك وتسليمك المنتج**
`)

}
});
//4
client.on("channelCreate", async channel => {
const CategoryID = "1019597812427673600" //الكاتيجوري
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && CategoryID.includes(channel.parent.id)) {

await new Promise(r => setTimeout(r, 2000))
  
channel.send(`
**مرحبا عزيزي المواطن . لشراء بيت الرجاء ملئ هاذه الاستمارة**

**الايدي الخاص بك  :**
**موضوع الثغرة :**
**صورة الثغرة : **


 **الرجاء انتظار المسؤولين للرد عليك**

`) 

}
});

////5

client.on("channelCreate", async channel => {
const CategoryID = "1148073455804227674" //الكاتيجوري
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && 
    CategoryID.includes(channel.parent.id)) {

await new Promise(r => setTimeout(r, 2000))
  
channel.send(`
**مرحبا عزيزي المواطن . لتقديم شكوى ضد مواطن الرجاء ملئ هاذه الاستمارة**

**الايدي الخاص بك  :**
**ايدي المواطن  : **
**نص الشكوى  : **
**الدليل : **

 **الرجاء انتظار المسؤولين للرد عليك**

`) 

}
});


////////////////////trans

client.on('message', message => {
if(message.content.startsWith("تحويل")) {
message.reply(`c 521863680699400193 المبلغ`)
}
});


  
/////////////////////////////

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'page') {
    const pageOne = new Discord.MessageEmbed()
      .setTitle('صفحة 1')
      .setDescription('هذه هي الصفحة الأولى')
      .setColor('#ff0000');

    const row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId('page1')
          .setLabel('الصفحة الأولى')
          .setStyle('PRIMARY'),
        new Discord.MessageButton()
          .setCustomId('page2')
          .setLabel('الصفحة الثانية')
          .setStyle('SECONDARY'),
        new Discord.MessageButton()
          .setCustomId('page3')
          .setLabel('الصفحة الثالثة')
          .setStyle('SECONDARY')
      );

    message.channel.send({ embeds: [pageOne], components: [row] })
      .then(sentMessage => {
        const filter = i => {
          return i.user.id === message.author.id;
        };

        const collector = sentMessage.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', interaction => {
          if (interaction.customId === 'page1') {
            const newPage = new Discord.MessageEmbed()
              .setTitle('صفحة 1')
              .setDescription('هذه هي الصفحة الأولى')
              .setColor('#ff0000');

            interaction.update({ embeds: [newPage], components: [row] });
          } else if (interaction.customId === 'page2') {
            const newPage = new Discord.MessageEmbed()
              .setTitle('صفحة 2')
              .setDescription('هذه هي الصفحة الثانية')
              .setColor('#00ff00');

            interaction.update({ embeds: [newPage], components: [row] });
          } else if (interaction.customId === 'page3') {
            const newPage = new Discord.MessageEmbed()
              .setTitle('صفحة 3')
              .setDescription('هذه هي الصفحة الثالثة')
              .setColor('#0000ff');

            interaction.update({ embeds: [newPage], components: [row] });
          }
        });

        collector.on('end', collected => {
          console.log(`Collected ${collected.size} interactions.`);
        });
      })
      .catch(error => {
        console.error(error);
        message.reply('حدث خطأ أثناء محاولة إرسال الرسالة.');
      });
  }
});


/////////////////////456


client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '456') {
    const embed1 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Page 1')
      .setDescription('This is page 1.');

    const embed2 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Page 2')
      .setDescription('This is page 2.');

    const embed3 = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Page 3')
      .setDescription('This is page 3.');

    const pages = [embed1, embed2, embed3];

    let currentPage = 0;
    const emojiList = ['⏪', '◀️', '▶️', '⏩'];
    const timeout = 120000;

    const msg = await message.channel.send({ embeds: [pages[currentPage]] });

    for (const emoji of emojiList) {
      await msg.react(emoji);
    }

    let collector;
    const runCollector = () => {
      collector = msg.createReactionCollector({
        filter: (reaction, user) =>
          emojiList.includes(reaction.emoji.name) && !user.bot,
        time: timeout,
      });

      collector.on('collect', (reaction, user) => {
        reaction.users.remove(user);

        switch (reaction.emoji.name) {
          case emojiList[0]:
            currentPage = 0;
            break;
          case emojiList[1]:
            currentPage = currentPage > 0 ? --currentPage : pages.length - 1;
            break;
          case emojiList[2]:
            currentPage = currentPage + 1 < pages.length ? ++currentPage : 0;
            break;
          case emojiList[3]:
            currentPage = pages.length - 1;
            break;
          default:
            break;
        }

        msg.edit({ embeds: [pages[currentPage]] });
      });

      collector.on('end', () => {
        msg.edit({ embeds: [pages[currentPage].setFooter('This page is now inactive')] });
        setTimeout(() => {
          msg.reactions.removeAll()
            .then(() => runCollector())
            .catch((error) => console.error('Failed to clear reactions: ', error));
        }, 300000); // Run every 5 minutes
      });
    }

    runCollector();
  }
});



////////////////////



client.on('messageCreate', async message => {
  if (message.content === `${prefix}sendImage`) {
    const selectMenu = new Discord.MessageSelectMenu()
      .setCustomId('images')
      .setPlaceholder('Select an image')
      .addOptions([
        {
          label: 'Image 1',
          value: 'image1',
          description: 'Description for image 1',
          emoji: '🖼️'
        },
        {
          label: 'Image 2',
          value: 'image2',
          description: 'Description for image 2',
          emoji: '📷'
        },
        {
          label: 'Image 3',
          value: 'image3',
          description: 'Description for image 3',
          emoji: '🌄'
        }
      ]);

    const row = new Discord.MessageActionRow().addComponents(selectMenu);

    await message.reply({
      content: 'Please select an image to send:',
      components: [row],
      ephemeral: true
    });

    const filter = i => i.customId === 'images' && i.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async i => {
      await i.update({ content: 'Image selected!', components: [] });
      let image;
      switch (i.values[0]) {
        case 'image1':
          image = 'https://example.com/image1.png';
          break;
        case 'image2':
          image = 'https://example.com/image2.jpg';
          break;
        case 'image3':
          image = 'https://example.com/image3.jpeg';
          break;
        default:
          return console.log('Unknown image selected');
      }
      await message.channel.send({
        content: 'Here is your selected image:',
        files: [image]
      });
    });

    collector.on('end', async collected => {
      if (collected.size === 0) {
        await message.channel.send('You did not select an image in time.');
      }
    });
  }
});

/////////////////////////159




client.on('messageCreate', async (message) => {
  if (message.content.startsWith(`${prefix}159`)) {
    const selectMenu = new Discord.MessageSelectMenu()
      .setCustomId('roomType')
      .setPlaceholder('Select the room type')
      .addOptions([
        {
          label: 'Text Room',
          description: 'Create a private text room',
          value: 'text',
        },
        {
          label: 'Voice Room',
          description: 'Create a private voice room',
          value: 'voice',
        },
      ]);

    const row = new Discord.MessageActionRow().addComponents(selectMenu);

    await message.reply({
      content: 'What type of private room do you want to create?',
      components: [row],
    });

    const filter = (interaction) =>
      interaction.isSelectMenu() && interaction.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({
      filter,
      time: 15000, // 15 seconds
      max: 1, // Allow only 1 interaction
      errors: ['time'], // Throw error when time is up
    });

    collector.on('collect', async (interaction) => {
      if (interaction.customId === 'roomType') {
        const roomType = interaction.values[0];
        let createdRoom;

        if (roomType === 'text') {
          createdRoom = await message.guild.channels.create(`Private Text Room`, {
            type: 'GUILD_TEXT',
            parent: message.channel.parent, // set the parent category of the room
            permissionOverwrites: [
              {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL'], // Prevent everyone from seeing the room
              },
              {
                id: message.author.id,
                allow: ['VIEW_CHANNEL'], // Allow the message author to see the room
              },
            ],
          });
        } else if (roomType === 'voice') {
          createdRoom = await message.guild.channels.create(`Private Voice Room`, {
            type: 'GUILD_VOICE',
            parent: message.channel.parent, // set the parent category of the room
            permissionOverwrites: [
              {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL'], // Prevent everyone from seeing the room
              },
              {
                id: message.author.id,
                allow: ['VIEW_CHANNEL'], // Allow the message author to see the room
              },
            ],
          });
        }

        await interaction.reply({
          content: `Room created: ${createdRoom}`,
          ephemeral: true, // Only visible to the interaction author
        });
      }
    });

    collector.on('end', async (collected, reason) => {
      if (reason === 'time') {
        await message.channel.send('The interaction has timed out.');
      }
    });
  }
});


/////////////////////123

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  const categoryIDs = {
    car: '1086414749966798990',
    hose: '976980931434926100',
    help: '1086414817021136956',
    admin: '1086414841499095141',
  };

  const selectedOption = interaction.values[0];
  
  if (selectedOption === 'car') {
    const channel = await interaction.guild.channels.create('New Car Room', {
      type: 'GUILD_TEXT',
      parent: categoryIDs[selectedOption],
    });
await interaction.reply({ content: `Car Room ${channel} created in category ${categoryIDs[selectedOption]}`, ephemeral: true });

  } else if (selectedOption === 'house') {
    const channel = await interaction.guild.channels.create('New House Room', {
      type: 'GUILD_TEXT',
      parent: categoryIDs[selectedOption],
    });
   await interaction.reply({ content: `house Room ${channel} created in category ${categoryIDs[selectedOption]}`, ephemeral: true });

  } else if (selectedOption === 'help') {
    const channel = await interaction.guild.channels.create('New Help Room', {
      type: 'GUILD_TEXT',
      parent: categoryIDs[selectedOption],
    });
    await interaction.reply({ content: `help Room ${channel} created in category ${categoryIDs[selectedOption]}`, ephemeral: true });

  } else if (selectedOption === 'admin') {
    const channel = await interaction.guild.channels.create(' room', {
      type: 'GUILD_TEXT',
      parent: categoryIDs[selectedOption],
    });
    await interaction.reply({ content: `admin Room ${channel} created in category ${categoryIDs[selectedOption]}`, ephemeral: true });

  }
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith(`${prefix}123`)) {
    const selectMenu = new Discord.MessageSelectMenu()
      .setCustomId('create-channel')
      .setPlaceholder('Select Channel Type')
      .addOptions([
        {
          label: 'Car Room',
          description: 'Create a Car Room',
          value: 'car',
          emoji: '🚗'
        },
        {
          label: 'House Room',
          description: 'Create a House Room',
          value: 'house',
          emoji: '🏠'
        },
        {
          label: 'Help Room',
          description: 'Create a Help Room',
          value: 'help',
          emoji: '❓'
        },
        {
          label: 'Admin Room',
          description: 'Create an Admin Room',
          value: 'admin',
          emoji: '🔒'
        },
      ]);

    const row = new Discord.MessageActionRow().addComponents(selectMenu);

    await message.reply({
      content: 'Select Channel Type:',
      components: [row],
    });
  }
});


//////////////////321


async function showSelectMenu(message, options) {
  const selectMenu = new Discord.MessageSelectMenu()
    .setCustomId('menu')
    .setPlaceholder('Select an option')
    .addOptions(options);

  const row = new Discord.MessageActionRow().addComponents(selectMenu);

  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Select an option:')
    .setDescription('Please choose one of the following options:')
    .addFields(
      {
       name: '1',
        value: options[0].label,
        inline: true,
      },
      {
        name: '2',
        value: options[1].label,
        inline: true,
      },
      {
        name: '3',
        value: options[2].label,
        inline: true,
      },
      {
       name: '4',
        value: options[3].label,
        inline: true,
      },
      {
       name: '5',
        value: options[4].label,
        inline: true,
      },
      {
       name: '6',
        value: options[5].label,
        inline: true,
      },
      {
       name: '7',
        value: options[6].label,
        inline: true,
      },
      {
       name: '8',
        value: options[7].label,
        inline: true,
      },
      {
       name: '9',
        value: options[8].label,
        inline: true,
      },
      {
       name: '10',
        value: options[9].label,
        inline: true,
      },
    );

  const msg = await message.reply({
    embeds: [embed],
    components: [row],
  });

  const filter = (interaction) => {
    return (
      interaction.isSelectMenu() &&
      interaction.customId === 'menu' &&
      interaction.message.id === msg.id
    );
  };

  const collector = message.channel.createMessageComponentCollector({ filter });

  collector.on('collect', async (interaction) => {
    const selectedOption = interaction.values[0];

    let content;

    options.forEach((option) => {
      if (option.value === selectedOption) {
        content = option.answer;
      }
    });

    const replyEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('ملاحظة')
      .setDescription('**عدم قراءة القوانين لا يعد عذر لتفادي العقوبات**')
      .addField('القوانين', content);

    await interaction.reply({ embeds: [replyEmbed], ephemeral: true });
  });
}

client.on('messageCreate', async (message) => {
  if (message.content.startsWith(`${prefix}321`)) {
    const options = [
      {
        label: 'قوانين التعويضات',
        value: '1',
        answer: `**- للحصول على تعويض يجب عليك اتباع الخطوات التاليه
----------------------------------------------------------
[1]- افتح تيكت
----------------
[2] - يجب عليك وضع دليل على ما تطلبه(صوره/فيديو)
-------------------------------------------------------
[3]- اذا تم اثبات بان لك حق فى التعويض سيتم تعويضك من الشخص نفسه
------------------------------------------------------------------------
[4]- اذا حدث اى شيئ بسبب اللعبه ستتكفل الاداره بتعويضك
------------------------------------------------------------
[5]- اذا لم يتم توفير الدليل فلن يتم تعويضك
**`,
      },
      {
        label: 'مواقيت السجن',
        value: '2',
        answer: `**- Meta Gaming : 120m

- Free kill : 80m

- Force RP : 70m

- Mass RP : 60m

- Fear RP : 100m

- Pain RP : 50m

- win RP : 30m

- Car Kill : 90m

- Fair Play : 55m

- Mix RP : 130m

- No value of life : 110m

- Fuir le RP : 90m

- Fail Drive : 60m

- Copbait : 70m

- Mort RP : CK
**`,
      },
      {
        label: 'قوانين الديسكورد',
        value: '3',
        answer: `**¶ R1: يمنع السب والشتم
¶ R2: يمنع إرسال صور إباحية أو غير لائقة
¶ R3: يمنع طلب الرتب او الكريدت
¶ R4: ممنوع السبام بجميع أنواعه
¶ R5: يمنع التكلم بمواضيع سياسية أو دينية
¶ R6: يمنع الإزعاج بالرومات الصوتية بأي شكل من الأشكال
¶ R7: يمنع إرسال صور أو ايموجيات مقرفة في الشات
¶ R8: ممنوع طلب سيرفرات
¶ R9 : يمنع البيع والشراء في الشات العام
¶ R10 : يمنع النشر منعاً باتاً
¶ R11: يمنع إزعاج أو استفزاز أي عضو أو إداري آخر حتى ولو كان بقصد المزاح
¶ R12: ممنوع نشر الشكاوي في الشات العام**`
      },
       {
        label: 'قوانين داخل المدينة',
        value: '4',
        answer: `**1-يمنع توظيف الناس بدون فتح التوظيف 

2- أستخدام أسم غير لائق

3- التحدث وأنت ميت

4- عدم تقدير حياتك وحياة الاخرين

5- الخروج من السيرفر وسط سيناريو أو مطاردة شرطة أو تحدث أدمن معك

6- انعدام الواقعية في لعبك

7- التقليل من هيبة الجهات الامنية

8 - عدم التزامك بمهامك الوظيفية

9 - القتل بدون سبب مقنع وبدون تهديد

10 - القتل والخطف بدافع الانتقام (الشخصي) بشكل شخصي

11 - RDM (قتل شخص بدون اربي وتكرار عملية القتل بدون توقف)

12 - VDM (تستغل سيارة في دعس الناس وتقتلهم بسيارة)

13 - القاعدة الذهبية وهي احترام المواطنين
**`
      },
      {
        label: 'قوانين الاعدام',
        value: '5',
        answer: `القبض عليك من طرف الشرطة في سيناريو مداهمات مقرات العصابة
القبض علي في سيناريو مداهمة الحدود 
التأكد بأدلة من كونك تنتمي لعصابة
القبض عليك وبحوزتك اسلحة سواء في نقاط التفتيش او عمليات المداهمات وتفتيش سيارات
ادا تحقق الشروط المدكوره فوق يتم توجيه المجرم واستدعاء فاكشن الحكومة إدا قرر مسؤولين الحكومة الاعدام بعد تحق اللشروط
يتم تحديد مكان الاعدام ويجب ان يكون مكان الاعدام خارج المدينة في منقطة حمراء ويجب عمل اعلان من اي جهة حكومة بمكان الاعدام ومتي يتم الاعدام 
كيف يتم الاعدام بعد موافقة الحكومة وتوفر شرط من شروط الموجوده فوق ؟
يقوم اي جهة حكومة بكتابة اعلان بمكان الاعدام ومتي يتم الاعدام 
عمل ريبورت وطلب منهم احظار ادمن مسؤول الاعدمات ليقوم بعد انتهاء الاعدامات بعمل اعدام او سيكا لشخصيته لكي لايستطيع دخوله لانه معدم
بعد وصول الحكومة لمكان الاعدام الدي يجب ان يكون خارج المدينة تقوم الحكومة بحماية مكان الاعدام 
يجتمع مسؤولي القطاعات في مكان المحدد للاعدام والتكلم بواقعية مثلا بموجب القانون وكدا سيتم تطبيق الاعدام علي المتهم المدكور باسم كدا لسبب كدا 
بعد الانتهاء من الكلام الانتظار خمسة دقائق قبل تنفيد الاعدام
 اداتم مداهمة المكان من طرف اي عصابة لانقاد الشخص المعدوم وتم قتل جميع الحكوميين لايتم تطبيق الاعدام
 في حالة ادا لم يتم مداهمة المكان ولم يتم انقاد الشخص الدي سيتم اعدامه وانتهت الخمس دقائق يتم اعدامه 

في حالة تم شخص من طرف العصابات 
- الشخص الدي تم القبض عليه ينتمي الي قطاع حكومي سواء شرطي او جيش او بياري او حكومة -
في حالة تم القبض عليه من طرف عصابة
يتم تطبيق الاعدام ادا تحقق اي شرط من الشروط التالية
 يجب ان يكون الشخص الدي سيتم تطبيق الاعدام عليه ينتمي لقطاع حكومي
 التاكد جيدا انه من الحكومة بوجود ادلة مثلا شارة وكدا
`,
      },
      {
        label: 'Option 6',
        value: '6',
        answer: 'This is the answer for option 6.',
      },
      {
        label: 'Option 7',
        value: '7',
        answer: 'This is the answer for option 7.',
      },
      {
        label: 'Option 8',
        value: '8',
        answer: 'This is the answer for option 8.',
      },
      {
        label: 'Option 9',
        value: '9',
        answer: 'This is the answer for option 9.',
      },
      {
        label: 'Option 10',
        value: '10',
        answer: 'This is the answer for option 10.',
      },
    ];

    await showSelectMenu(message, options);
  }
});


////////////////////////////////////////










const PREFIX = '!';

const rolesMap = new Map([
  ['1', '1076925452557484122'],
  ['2', '994773410141966347'],
  ['3', '994772310366093362'],
  ['4', '994773417964355594'],
  ['5', '1112302631214383234'],
  ['6', '1120875344640094299'],
  ['7', '1059126390072557608'],
  ['8', '994771850263531682'],
  ['9', '1112302635870072962'],
  ['10', '1112302639254884514'],
  ['11', '1112302637166104587'],
  ['12', '994773396866990150'],
  ['13', '1076260064161169539'],
  ['14', '1076261520629039154'],
  ['15', '1076258640685699162'],
  ['16', '1061756746319790171'],
  ['17', '1102210744847716524'],
  ['18', '1102213983827677244'],
  ['19', '1102211029074706502'],
  ['20', '1102214010818015273'],
  ['21', '1102214009605853234'],
  ['22', '1102214005986185367'],
  ['23', '1077698447479685131'],
  ['24', '995209938601267200'],
  ['25', '995217422216867911'],
  ['26', '995217578794438667 '],
  ['27', '995218098711953448'],
  ['28', '995217961168162906'],
  ['29', '995217794243244052'],
  ['30', '995217195539906580'],
  ['31', '1077673045172424875'],
  ['32', '1077673037622685726'],
  ['33', '1077673043805085707'],
  ['34', '1077673036427313162'],
  ['35', '1077673338429767810'],
  ['36', '994771867325972561'],
  ['37', '994771814339334174'],
  ['38', '1077701133717491832'],
  ['39', '1058547312961536071'],
  ['40', '1058547313729093672'],
  ['41', '1058547459015573514'],
  ['42', '995209959765725204'],
  ['43', '995218223920320582'],
  ['44', '995218391684087889'],
  ['45', '995218367034175508'],
  ['46', '1077700336120250429'],
  ['47', '1077700338448093194'],
  ['48', '1077700341916782693'],
  ['49', '1077700557730500618'],
  ['50', '1077700334853562488'],
  ['51', '994773404383182858'],
  ['52', '995218742470524958'],
  ['53', '995218918551605329'],
  ['54', '995218922695577690'],
  ['55', '995219013263171604'],
  ['56', '995219977466564668'],
  ['57', '995219983435038760'],
  ['58', '995220478883008582'],
  ['59', '995220479625412629'],
  ['60', '995220732948783134'],
  ['61', '1077674195275751596'],
  ['62', '1077674287219089470'],
  ['63', '1077674284987727943'],
  ['64', '1077674189407920128'],
  ['65', '1077674183229702274'],
  ['66', '994772444307017808'],
  ['67', '995220918844530739'],
  ['68', '995221015858786315'],
  ['69', '995221025220481044'],
  ['70', '995221033550360621'],
  ['71', '995221036113088522'],
  ['72', '995221743797014578'],
  ['73', '995221829759275041'],
  ['74', '995223383287529482'],
  ['75', '995221747920031744'],
  ['76', '995222305712119959'],
  ['77', '995222937395277845'],
  ['78', '995222938955558993'],
  ['79', '995223381014224986'],
  ['80', '1008098497129619568'],
  ['81', '1144230043455848478'],
  // وهكذا لكل الرولات المراد عرضها ومنحها
]);
const requiredRole = '934052877763235916';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'giverole') {
    if (!message.member.roles.cache.has(requiredRole)) {
      return message.reply('You do not have the required role to use this command.');
    }

    const mentionedMember = message.mentions.members.first();
    if (!mentionedMember) {
      return message.reply('You need to mention a member to give them a role.');
    }

    const roleId = rolesMap.get(args[0]);
    if (!roleId) {
      return message.reply('Invalid role number.');
    }

    const role = message.guild.roles.cache.get(roleId);
    if (!role) {
      return message.reply('Invalid role ID.');
    }

    try {
      await mentionedMember.roles.add(role);
      message.reply(`You have given ${mentionedMember.user.username} the role: ${role.name}`);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while trying to give the role to the mentioned member.');
    }
  } else if (command === 'removerole') {
    if (!message.member.roles.cache.has(requiredRole)) {
      return message.reply('You do not have the required role to use this command.');
    }

    const mentionedMember = message.mentions.members.first();
    if (!mentionedMember) {
      return message.reply('You need to mention a member to remove their role.');
    }

    const roleId = rolesMap.get(args[0]);
    if (!roleId) {
      return message.reply('Invalid role number.');
    }

    const role = message.guild.roles.cache.get(roleId);
    if (!role) {
      return message.reply('Invalid role ID.');
    }

    try {
      await mentionedMember.roles.remove(role);
      message.reply(`You have removed the role ${role.name} from ${mentionedMember.user.username}.`);
    } catch (error) {
      console.error(error);
      message.reply('An error occurred while trying to remove the role from the mentioned member.');
    }
  }
});












