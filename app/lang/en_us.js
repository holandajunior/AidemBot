const msgs = {
	"spotify": {
		"login": textLogin,
		"test": "Just testing",
		"search": {
			"artist": "Here what I have found for you:"
		},
		"recommend": "Based on your preferencies, we recommend:"
	}
}

function textLogin( authorizationURL ) {
	return `Please, You need to log in Spotify first ;)
	${authorizationURL}`;
}

module.exports = msgs;