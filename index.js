const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '887769333:AAG6wgH5qLiNlmzPKYhoIkHmBBkaHLjt1WA';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {

const chatId = msg.chat.id;
const resp = match[1];

bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
const chatId = msg.chat.id;

bot.sendMessage(chatId, 'Massage');
})

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '������ 1', callback_data: '1' }],
      [{ text: '������ 2', callback_data: 'data 2' }],
      [{ text: '������ 3', callback_data: 'text 3' }]
    ]
  })
};

bot.onText(/\/start_test/, function (msg, match) {
  bot.sendMessage(msg.chat.id, '�������� ����� ������:', options);
});