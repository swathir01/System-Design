const express = require('express');
const app = express();
const database = require('./database');


//hashtable to store prev access time of each user
const accesses = {}

app.listen(3000, ()=> console.log("Listening on Port 3000!"));


app.get("/index.html", (req, res)=>{
    const {user} = req.headers;
    if(user in accesses){
        const prevAccessTime = accesses[user];
        //1 request per 5 secs
        if(Date.now() - prevAccessTime < 5000){
            res.status(429).send("Too many requests!!");
            return;
        }
    }

    database.get('index.html', page=>{
        accesses[user] = Date.now();
        res.send(page);
    })
})

//commands
//node server.js
//curl -H 'user: swa' localhost:3000/index.html      
//culr -H 'user: swathi' localhost:3000/index.html 