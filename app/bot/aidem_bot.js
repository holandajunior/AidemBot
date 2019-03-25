const TelegramBot = require('node-telegram-bot-api');

class AidemBot extends TelegramBot {

	constructor(token, options = {}) {
		super(token, options);
	}

	// data: [ { title: ..., spotify_urlopen } ] 
	sendManyMidiaMessage(chatId, data) {

		data.forEach( ( item ) => {

	        const text = `${item.title}  ${item.spotify_urlopen}`;
	        this.sendMessage(chatId, text);

		} );

	}

	// data: { title: ..., spotify_urlopen } 
	sendMidiaMessage(chatId, data) {

        const text = `${data.title}  ${data.spotify_urlopen}`;
        this.sendMessage(chatId, text);

	}	

}

module.exports = AidemBot;


