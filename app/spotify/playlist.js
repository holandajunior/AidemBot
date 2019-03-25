const SpotifyBase = require('./spotify_base');

class SpotifyPlaylist extends SpotifyBase {

	getUserPlaylists(limit = 3) {

		const options = {
			limit: limit
		};
		
		return new Promise( ( resolve, reject ) => {

			this.spotifyApi.getUserPlaylists( undefined, options ).then( (data) => {

				let playlists = data.body.items;

				playlists = this._getMainMediasData( playlists );
				resolve(playlists)

			}, (err) => {
				console.log('Something went wrong!', err);
				reject();
	  		});

		} );

	}

}

module.exports = (spotifyApi, config) => {
	return new SpotifyPlaylist(spotifyApi, config);
}