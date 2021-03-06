## Get started

Aidem is a recommender bot for media resources. As the first step, we developed it to recommend playlists, artists and albums for spotify users.
Further, we intend to recommend movies using movielens dataset and infos from imdb too.

Since it must have a user-friendly interface, we intend to apply NLP techniques to identify user intents and other actions to communicate with Aidem.
Therefore, we want to create a lot of smart features with Artificial Intelligence by creating Aidem to be a great media recommender.

You will find it at *t.me/aidemBot* or just search for @AidemBot at Telegram. </br>
Looking for more informations about the Bot API? [Here](https://core.telegram.org/bots/api   ) 

### A Node API Wrapper

Using some wrapper to call the Spotify API can be really helpfull! Then, just as the reference, we use [this wrapper](https://github.com/thelinmichael/spotify-web-api-node)

### Telegram Bot API

This [project](https://github.com/yagop/node-telegram-bot-api) intends to be a wrapper for Telegram API. We can use it to easily communicate with our bot.


## Set it up

AidemBot is a Nodejs app. Then, after you have pulled its code, install all requirements:
```
$ npm install
```

### Running server

We use the Heroku platform to serve the webservice located in `server` folder. However, feel free to use any host.


### Config

Since we need a Telegram and Spotify tokens and other configurations stuff, you must update the *config.js* file in root folder. Just to organize the development, it is better do not share the main Telegram and Spotify tokens with all contributors, so you need to create your own TOKEN (Telegram) and CLIENT SECRET (Spotify) to develop your improvements and contribute with the project.


## Folder structure

We have four main folders:

`bot`: this folder is about the bot itself. Here it has the bot commands and any other communication interface needed with the user in Telegram. </br> 
`server`: this server is just to recevice any callbacks and other communications between the services if needed. </br>
`spotify`: here we have the whole spotify interface, providing any function the bot needs about music. </br> 
`lang`: the internationalization stuff. </br>


## Features

### Music commands

We are continously creating more features and commands. To interact with AidemBot, type in the following commands in the chat:

`spotify`: log in spotify. To use spotify features, you first need to log in </br>
```
/spotify
``` 
</br>

`lastplaylists`: it shows the 2 last playlists in your library
```
/lastplaylists
``` 

</br>

`myplaylists`: it shows N playlists in your library
```
/myplaylists [1-9]+
``` 

</br>

`artist`: get artist by name
```
/artist [\wà-úÀ-Ú\-\sçÇ]+
``` 

</br>

`recommend`: recommend tracks and artists based on a artist's name
```
/recommend [\wà-úÀ-Ú\-\sçÇ]+
``` 



## Contributing

Feel free to contribute with your code and tech skills to make Aidem so smart.
Please, take a look at "Projects" tab to check the opened task out there and get anything that you feel comfortable to do it so. You can also open issues and improvements that you want to
