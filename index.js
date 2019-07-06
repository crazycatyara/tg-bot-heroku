var TelegramBot = require('node-telegram-bot-api');
var TOKEN = '887769333:AAG6wgH5qLiNlmzPKYhoIkHmBBkaHLjt1WA';

var bot = new TelegramBot(TOKEN, { polling: true });

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Кнопка 1', callback_data: '0_1' }],
      [{ text: 'Кнопка 2', callback_data: '0_2' }],
      [{ text: 'Кнопка 3', callback_data: 'text 3' }]
    ]
  })
};
bot.onText(/\/start_test/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Выберите любую кнопку:', options);
});
