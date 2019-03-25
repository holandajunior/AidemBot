const config = {};

config.telegram = {
	'TOKEN_BOT': process.env.AIDEM_TOKEN_BOT 
};


config.spotify = {
	'CLIENT_ID': process.env.AIDEM_CLIENT_ID,
	'CLIENT_SECRET': process.env.AIDEM_CLIENT_SECRET,
	'REDIRECT_URI': process.env.AIDEM_REDIRECT_URL,
	'STATE': 'aidem_bot_state',
	'SCOPES': ['playlist-read-private', 'user-read-private', 'user-read-email']
}


module.exports = config;