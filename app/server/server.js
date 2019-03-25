const express = require('express');

// Local imports
const aidembot = require('../bot/bot_interface');
const spotify = require('../spotify');


const app = express();
const PORT = process.env.PORT || 3000;

app.get('', function( req, res) {
	res.send('Webservice started!');
});

app.get('/spotify_cb', function( req, res ) {
	
	spotify_code = req.query.code;
	spotify_error = req.query.error;

	spotify_state = req.query.state;

	if( spotify_error ) {
		res.send("Um erro ocorreu no processo de login");

	} else {

		spotify.auth.exchangeCodeByToken(spotify_code).then( function(data) {
			res.send("Logado com sucesso! Enjoy ;)");
		
		} ).catch( function(error) {
			res.send("Erro no processo de obtenção do token. Por favor, tente novamente.");

		} );


	}

});


app.listen( PORT, function() {
	console.log('Webservice listening to...');
});