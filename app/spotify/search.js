const SpotifyBase = require('./spotify_base');

class SpotifySearch extends SpotifyBase {

	searchArtists(name, limit = 3) {

		const options = {
			limit: limit
		};

		return new Promise( (resolve, reject) => {

			this.spotifyApi.searchArtists(name, options).then( (data) => {

				let results = data.body.artists.items;

				console.log(data.body);

				results = this._getMainMidiasData( results );

				resolve(results); 
			  
			}, (err) => {
				console.error(err);
				reject();
			});

		} );


	}

}

module.exports = (spotifyApi, config) => {
	return new SpotifySearch(spotifyApi, config);
}