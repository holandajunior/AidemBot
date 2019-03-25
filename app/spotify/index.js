const SpotifyWebApi = require('spotify-web-api-node');


// Local imports
const config = require('../config');

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
const spotifyApi = new SpotifyWebApi({
  redirectUri: config.spotify.REDIRECT_URI,
  clientId: config.spotify.CLIENT_ID,
  clientSecret: config.spotify.CLIENT_SECRET
});

// Spotify parts
const auth = require('./auth')(spotifyApi, config);
const playlist = require('./playlist')(spotifyApi, config);
const search = require('./search')(spotifyApi, config);
const recommendation = require('./recommendation')(spotifyApi, config, search);

module.exports = {
	auth,
	playlist,
	search,
	recommendation
}



