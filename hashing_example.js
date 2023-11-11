const util = require('./hashing_utils');
const {hashString, computeScoreFunc} = require('./hashing_utils'); //another way

const usernames = [
    "username0",
    "username1",
    "username2",
    "username3",   
    "username4",
    "username5",
    "username6",
    "username7",
    "username8"
]

const serverSet1 = [
    "server0",
    "server1",
    "server2",
    "server3",   
    "server4"
]

const serverSet2 = [
    "server0",
    "server1",
    "server2",
    "server3" 
]

function pickServerSimple(username, servers) {
    const hash = util.hashString(username);
    return servers[hash % servers.length];
}

function pickRendezvous(username, servers) {
    let maxServer = null;
    let maxScore = 0;
    for(const server of servers) {
        const score = util.computeScoreFunc(server, username);
        if(maxServer === null || score > maxScore){
            maxScore = score;
            maxServer = server;
        }
    }
    return maxServer;
}



console.log("Simple Hashing Strategy");
for(let username of usernames){
    const server1 = pickServerSimple(username, serverSet1);
    const server2 = pickServerSimple(username, serverSet2);
    console.log(`${username}, ${server1} => ${server2}, equal = ${server1 == server2}`)
}


console.log("Rendezvous Hashing Strategy");
for(let username of usernames){
    const server1 = pickRendezvous(username, serverSet1);
    const server2 = pickRendezvous(username, serverSet2);
    console.log(`${username}, ${server1} => ${server2}, equal = ${server1 == server2}`)
}