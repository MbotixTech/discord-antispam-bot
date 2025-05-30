require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

const keywordRegex = new RegExp(
  [
    'free nitro', 'airdrop', 'click here', 'discord.gift',
    'discord.com/freenitro', 'bit.ly', 'gift card',
    'free gift', 'free trial', 'earn money', 'get paid',
    'giveaway', 'winner', 'claim now', 'instant cash',
    '100% free', 'no cost', 'free subscription', 'make money',
    'cash bonus', 'discord nitro', 'nitro promo', 'free discord nitro'
  ].join('|'),
  'i' 
);

const whitelistLinks = [
  'youtube.com',
  'facebook.com',
  'tiktok.com',
  'envy217.com'
];

client.once('ready', () => {
  console.log(`🤖 Bot siap sebagai ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const content = message.content;

  const linkRegex = /https?:\/\/[\w./-]+/g;
  const isWhitelisted = whitelistLinks.some(link => content.toLowerCase().includes(link));
  const isLink = linkRegex.test(content);
  const isLinkSpam = isLink && !isWhitelisted;

  const steamGiftRegex = /steamcommunity\.com\/gift|steamcommunity\.com\/.*gift.*|steamcommunity\.com\/.*pay/i;
  const mentionSpam = message.mentions.everyone || message.content.includes('@here');

  const isKeywordSpam = keywordRegex.test(content);

  const isSpam = isKeywordSpam || isLinkSpam || steamGiftRegex.test(content) || mentionSpam;

  if (isSpam) {
    try {
      await message.delete();
      console.log(`🧹 Pesan spam dihapus dari ${message.author.tag}`);
    } catch (err) {
      console.error('❌ Gagal menghapus pesan:', err);
    }
  }
});

client.login(process.env.BOT_TOKEN);
