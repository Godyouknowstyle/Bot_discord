require('dotenv').config();
const {Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, ActivityType, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", (x) => {
    console.log(`${x.user.tag} is ready!`);
    client.user.setActivity({
        name: 'Quarxnt1ne',
        type: ActivityType.Streaming, 
        url: 'https://www.twitch.tv/poyeunha'
    });

    const ping = new SlashCommandBuilder()
    .setName ('ping')
    .setDescription('This is a ping Command!');

    const hello = new SlashCommandBuilder()
    .setName ('hello')
    .setDescription('This is a hello Command now!');

    const bye = new SlashCommandBuilder()
    .setName ('bye')
    .setDescription('This is a bye Command!');

    client.application.commands.create(ping, '1111957311666274355');
    client.application.commands.create(hello, '1111957311666274355');
    client.application.commands.create(bye, '1111957311666274355');
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='ping') {
        interaction.reply('ตอนนี้กำลังพัฒนาระบบ อาจจะยังใช้งานไม่ได้นะครับ!');
    }
    if(interaction.commandName==='hello') {
        interaction.reply('สวัสดีท่านที่จะใช้คำสั่งบอทตัวนี้ บอทตัวนี้กำลังพัฒนา ให้ท่านรอสักหน่อย รอว่างจะมาทำนะครับ!');
    }
    if(interaction.commandName==='bye') {
        interaction.reply('ไว้เจอกันนะครับ!');
    }
});

client.login(process.env.TOKEN);
