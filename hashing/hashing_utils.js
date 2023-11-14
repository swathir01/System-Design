function hashString(str) {
    let hash = 0;
    if(str.length === 0) return hash;
    for(let i=0;i<str.length;i++){
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}
//This is just an example, only use industry standard hashing

function computeScore(server, username) {
    const usernameHash = hashString(username);
    const serverHash = hashString(server);
    return (usernameHash * 13 + serverHash * 11) % 67; //some random computation  use standard score computing func
}

module.exports = {hashString};
module.exports.computeScoreFunc = computeScore;