const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '887769333:AAG6wgH5qLiNlmzPKYhoIkHmBBkaHLjt1WA';

const bot = new TelegramBot(TOKEN, { polling: true });

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

bot.on('callback_query', function (msg) {
  var answer = msg.data.split('_'); // Делим ответ на две части, превратив в массив. Первый элемент номер вопроса, второй будет вариант ответа.
  var index = answer[0]; // Получаем номер вопроса
  var button = answer[1]; // И вариант ответа

  // Если присланный вариант совпадает с вариантом из массива
  if (questions[index].right_answer==button) {
    bot.sendMessage(msg.from.id, options);
  }
}