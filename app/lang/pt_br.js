const msgs = {
	"spotify": {
		"login": textLogin,
		"test": "Apenas test",
		"search": {
			"artist": "Aqui estão os resultados que encontramos:"
		},
		"recommend": "Baseado na sua preferência, recomendamos:"
	}
}

function textLogin( authorizationURL ) {
	return `Por favor, precisamos que você se logue no spotify primeiro ;)
	${authorizationURL}`;
}

module.exports = msgs;