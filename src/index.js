//คำสั่งพื้นฐาน Bot discord 
//ไว้สำหรับเป็นตัวอย่างในการทำให้บอทขึ้นออนนะครับ


require('dotenv').config();
const {Client, GatewayIntentBits, EmbedBuilder, SlashCommandBuilder, PermissionsBitField, ActivityType, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", (x) => {
    console.log(`${x.user.tag} is ready!`);
    client.user.setActivity({
        name: 'PG Slot',
        type: ActivityType.Streaming, 
        url: 'https://www.youtube.com/watch?v=tYPIR8XWXFE&list=RDtYPIR8XWXFE&start_radio=1' 
    });

    const ping = new SlashCommandBuilder()
    .setName ('ping')
    .setDescription('This is a ping Command!');

    const hello = new SlashCommandBuilder()
    .setName ('hello')
    .setDescription('This is a hello Command!');

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
        interaction.reply('ละมึงเป็นควยอะไรอะ อย่าใช้งานได้ป่ะ กูยังทำระบบไม่เสร็จ!');
    }
    if(interaction.commandName==='hello') {
        interaction.reply('สวัสดี ผมมิ๊กกี้เม้าส์ จะมาเล่นหน้าพ่อมึง!');
    }
    if(interaction.commandName==='bye') {
        interaction.reply('ไว้เจอกันนะไอ้เด็กเหี้ย!');
    }
});

client.login(process.env.TOKEN);

//ขออนุญาตนอนก่อนแล้วกัน 