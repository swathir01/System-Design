const messagingAPI = require('./messaging_api');
const readline = require('readline');

const TOPIC_ID = process.env.TOPIC_ID;

const terminal = readline.createInterface({
    input: process.stdin,
});

terminal.on('line', text=>{
    const name = process.env.NAME;
    const message = {name, text};
    messagingAPI.publish(TOPIC_ID, message);
})
