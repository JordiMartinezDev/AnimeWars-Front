# AnimeWars

## AnimeWars
Developed as the final project of my web development bootcamp at Ironhack Barcelona. It's a MERN Stack application, check the back repository [here](https://github.com/JordiMartinezDev/AnimeWars-Back/)

## About
This project is based on the development of a Crunchyroll-style website in which users can register, log in as well as view, add, delete and follow their favorite anime.


## Deployment
You can check the app fully deployed [here](link). If you wish to view the API deployment instead, check [here](link)

## Work structure
We developed this project in group and used [Trello](https://trello.com/b/gPwpHZUL/proyecto-final-animewars) to organize our workflow.

## Installation guide

*Fork this repo
*Clone this repo

```
$ cd AnimeWars-Front
$ npm install
$ npm start
```

## Routes

| Route  | Privacy | Renders |
| ------------- |:-------------:|:-------------:|
| /      | Public     | HomePage    |
| /profile/userId     | Private     |ProfilePage    |
| /signup     | Public    | SignupPage        |
| /login       | Public    |  LoginPage       |
| /createEpisode |  Public |   CreateEpisode  |
| /followedSeries/:userId| Public  | FollowedSeries   |
| /createdSeries | Private  | CreatedSeries    |
| /createdEpisodes | Private  | CreatedEpisodes|
| /seeMySerieLst/:userId | Private  | SeeMyAnimeLst   |
| /seeMyEpisodeLst/:userId | Private  | SeeMyEpisodeLst   |
|/seeMyFollowedSeries/:userId|Private| seeMyAnimeFollowed|
|/editProfileImg/:userId|Private| editProfileImg|
|/episode/:episodeId|Public|Episode|



## Components
* Navbar
* ProfileAnimeCreatedBox ----> Bloque fijo de animes renderizado en Profile
* ProfileFavoriteBox ----> Bloque fijo de animes renderizado en Profile
* ShowAnime ----> Reciclamos codigo Ex: Index page
* ShowEpisodes

 
