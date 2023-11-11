const express = require('express');
const expressWS = require('express-ws');

const app = express();
expressWS(app);

app.use(express.json());

app.listen(3001, ()=>{console.log(`Listening in the Port 3001!!`)});

const sockets = [];
const messages = [{id: 1, text: "Hello 1", username: "Chat room"}];

app.post("/messages", (req, res)=> {
    const message = req.body;
    messages.push(message);

    for(const socket of sockets) {
        socket.send(JSON.stringify(message));
    }
});

app.get("/messages", (req, res)=> {
   res.json(messages);
});

app.ws("/messages", socket=> {
    sockets.push(socket);

    socket.on('close',() =>{
        sockets.splice(sockets.indexOf(socket), 1);
    });
 });