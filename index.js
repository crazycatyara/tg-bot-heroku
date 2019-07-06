const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '887769333:AAG6wgH5qLiNlmzPKYhoIkHmBBkaHLjt1WA'

const bot = new TelegramBot(TOKEN, { polling: true })

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'HELLO FORM BOT, bot says: "Hi, ${msg.from.first_name}"')
})