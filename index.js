const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '887769333:AAG6wgH5qLiNlmzPKYhoIkHmBBkaHLjt1WA';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {

const chatID = msg.chat.id;
const resp = match[1];

bot.sendMessage(chatId,resp);
});

bot.on('message', (msg) => {
const chatId = msg.chat.id;

bot.sendMessage(chatId, 'Massage');
})