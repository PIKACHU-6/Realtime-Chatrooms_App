# Real-Time Chatrooms
Created a real-time chatroom application where users can talk to eachother in a chatroom.
User has to enter his/her name and a room name where you would like to join

Live version of app: https://chat-with-kiritok.netlify.app/

## Table of Contents
1. [Pre-requisite Tools](#pre-requisite-tools)
1. [Implementation](#implementation)
1. [Demo](#demo)
1. [Technologies Used](#technologies-used)

## Pre-requisite Tools
- Node.js
- npm
- React

## Implementation
- Clone the repository
- Go inside individual "client" and "server" folders and install their dependencies separately. Perform the following commands from the root directory.
```Client folder
cd client
npm install
```

```Server folder
cd server
npm install
```

- Run the server
```
cd server
npm start
```
- Run the React client
```
cd client
npm start
```
- A browser will automatically open at 'localhost:3000' or open it using the URL.
- Open multiple tabs and enter the same chatrooms.
- Enjoy the live chat app.

## Demo
<img src="https://raw.githubusercontent.com/kirito-k/realtime-chat-app/main/demo/1.gif" title="Short Demo gif" />


## Technologies Used
### Client side:
- React
- Axios
- React Hooks
- Socket.io-client

### Server side:
- Node.js
- Axios
- Express.js
- Express Router
- Socket.io

### Deployment:
- Heroku (server codebase hosting)
- Netlify (client codebase hosting)
