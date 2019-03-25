const SpotifyBase = require('./spotify_base');

class SpotifyRecommendation extends SpotifyBase {

	constructor(spotifyApi, config, search) {
		super(spotifyApi, config);
		this.search = search;
	}

	recommendByArtist(name) {

		return new Promise( (resolve, reject) => {

			this.search.searchArtists(name, 1).then( ( artists ) => {

				console.log("Artists: " + artists);
				const id = artists[0].id;
				console.log(id);

				const options = {
					"seed_artists": [id],
					"limit": 5
				}

				this.spotifyApi.getRecommendations(options).then( ( data ) => {

					console.log(data);

					let tracks = data.body.tracks;
					tracks = this._getMainMediasData( tracks );
					resolve(tracks);

				} ).catch( ( err ) => {
					reject(err);					
				} );

			} ).catch( (err) => {
				reject(err);
			} );

		} );



	}

}

module.exports = (spotifyApi, config, search) => {
	return new SpotifyRecommendation(spotifyApi, config, search);
}