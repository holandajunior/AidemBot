// Local imports
const config = require('../config');
const spotify = require('../spotify');
const lang = require('../lang');
const AidemBot = require('./aidem_bot');

// Create a bot that uses 'polling' to fetch new updates
const bot = new AidemBot(config.telegram.TOKEN_BOT, {polling: true});


// ====================
// Callbacks for Playlists
// ====================


bot.onText(/\/spotify/, (msg, match) => {

  const chatId = msg.chat.id;

  authorizationURL = spotify.auth.getAuthorizationURL();
  bot.sendMessage(chatId, lang.spotify.login(authorizationURL));
});


// ====================
// Callbacks for Playlists
// ====================

bot.onText(/\/lastplaylists/, listPlaylistsCallback);
bot.onText(/\/myplaylists ([1-9]+)/, listPlaylistsCallback);


function listPlaylistsCallback( msg, match ) {

  const chatId = msg.chat.id;
  const limit = ( match ? match[1] : 2 );

  spotify.playlist.getUserPlaylists(limit).then( ( playlists ) => {

    bot.sendManyMidiaMessage(chatId, playlists);

  } ).catch( ( err ) => {
    console.log("Error on getting user's playlist");
  } );
}

// ====================
// Callbacks for Searching
// ====================

bot.onText(/\/artist ([\wà-úÀ-Ú\-\sçÇ]+)/, ( msg, match ) => {

  const chatId = msg.chat.id;
  const artistName = match[1];

  console.log("Msg.:" + msg);
  console.log("Match:" + match);

  spotify.search.searchArtists(artistName).then( ( artists ) => {

    bot.sendMessage(chatId, lang.spotify.search.artist);
    bot.sendManyMidiaMessage(chatId, artists);

  } ).catch( ( err ) => {
    console.log("Error on getting artists based on their name")
  } );

});

bot.onText(/\/recommend ([\wà-úÀ-Ú\-\sçÇ]+)/, ( msg, match ) => {

  const chatId = msg.chat.id;
  const artistName = match[1];

  console.log("Msg.:" + msg);
  console.log("Match:" + match);

  spotify.recommendation.recommendByArtist(artistName).then( ( tracks ) => {

    bot.sendMessage(chatId, lang.spotify.recommend);
    bot.sendManyMidiaMessage(chatId, tracks);

  } ).catch( ( err ) => {
    console.log("Error on getting recommendations based on artist name")
    console.log(err);
  } );

});



module.exports = bot;