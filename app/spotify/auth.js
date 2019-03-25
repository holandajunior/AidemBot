const SpotifyBase = require('./spotify_base');

class SpotifyAuth extends SpotifyBase {

	getAuthorizationURL() {

		const scopes = this.config.spotify.SCOPES;
	    const state = this.config.spotify.STATE; // Check it out to generate a valid state string in the future

		// Create the authorization URL
		const authorizeURL = this.spotifyApi.createAuthorizeURL(scopes, state);

		return authorizeURL;
	}

	exchangeCodeByToken(code) {

		return new Promise( ( resolve, reject ) => {

			this.spotifyApi.authorizationCodeGrant(code).then( (data) => {
			    console.log('The token expires in ' + data.body['expires_in']);
			    console.log('The access token is ' + data.body['access_token']);
			    console.log('The refresh token is ' + data.body['refresh_token']);

			    // Set the access token on the API object to use it in later calls
			    this.spotifyApi.setAccessToken(data.body['access_token']);
			    this.spotifyApi.setRefreshToken(data.body['refresh_token']);

			    resolve();

			  },
			  (err) => {
			    console.log('Something went wrong!', err);
			    reject();
			  }
			);


		} );

		

	}

	refreshAccessToken() {

		return new Promise( ( resolve, reject ) => {

			this.spotifyApi.refreshAccessToken().then( (data) => {
			    console.log('The access token has been refreshed!');

			    // Save the access token so that it's used in future calls
			    this.spotifyApi.setAccessToken(data.body['access_token']);

			    resolve();
			  },
			  (err) => {
			    console.log('Could not refresh access token', err);
			    reject();
			  }
			);

		} );

	}



}

module.exports = (spotifyApi, config) => {
	return new SpotifyAuth(spotifyApi, config);
}

