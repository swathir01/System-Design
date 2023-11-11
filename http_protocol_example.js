const express = require('express');
const app = express();

app.use(express.json());


app.listen(3000, ()=>{console.log("Listening in the Port 3000!!")});


app.get("/hello", (req, res)=> {
    console.log("Request Method", req.method);
    console.log("Request Headers", req.headers);
    res.send("Recieved Get Request!\n");
});

app.post("/hello", (req, res)=> {
    console.log("Request Method", req.method);
    console.log("Request Body", req.body);
    console.log("Request Headers", req.headers);
    res.send("Recieved Post Request!\n");
});