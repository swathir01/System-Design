const axios = require('axios');
const ws = require('ws');

function publish(topicID, message){
    return axios.post(`http://localhost:3001/${topicID}`, message);
}

function subscribe(topicID){
    return new ws(`http://localhost:3001/${topicID}`);
}

module.exports = {publish, subscribe}