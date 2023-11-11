const axios = require('axios');
const WebSocket = require('ws');

function createMessagingSocket() {
    return new WebSocket("ws://localhost:3001/messages");
}

function sendMessage(message) {
    return axios.post("http://localhost:3001/messages", message);
}

function getMessages() {
    return axios.get("http://localhost:3001/messages").then(res => res.data);
}


module.exports = {createMessagingSocket, getMessages, sendMessage};