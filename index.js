﻿const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '887769333:AAG6wgH5qLiNlmzPKYhoIkHmBBkaHLjt1WA';

const bot = new TelegramBot(TOKEN, { polling: true });

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Кнопка 1', callback_data: '1' }],
      [{ text: 'Кнопка 2', callback_data: 'data 2' }],
      [{ text: 'Кнопка 3', callback_data: 'text 3' }]
    ]
  })
};

bot.onText(/\/start_test/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
});

bot.action('1', (ctx) => ctx.editMessageText('Awesome'));