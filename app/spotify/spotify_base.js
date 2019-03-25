class SpotifyBase {

	constructor( spotifyApi, config ) {
		this.spotifyApi = spotifyApi;
		this.config = config;
	}

	_getMainMidiasData( data ) {

		return data.map( ( item ) => {
			
			return {
				"title": item.name,
				"spotify_urlopen": item.external_urls.spotify,
				"id": item.id
			};

		} );
	}
}

module.exports = SpotifyBase;