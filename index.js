const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/kek/, (msg, match) => {
	
	const chatId = msg.chat.id
	bot.sendMessage(chatId, 'Что выбереш', {
		reply_markup: {
			inline_keyboard: [
			[
			{
				text: 'KEKS',
				callback_data:'KEKS'
			},
						{
				text: 'SHRECK',
				callback_data:'Shreck'
			},
			{
				text: 'SES',
				callback_data:'SES'
				
			}
		]
		]
		}
	});
});
