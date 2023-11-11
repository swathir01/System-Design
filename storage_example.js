const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const DATA_DIR = "example_DB_Data";

app.listen(3000, ()=>{console.log("Listening in the Port 3000!!")});

const hashMap = {}

app.post("/memory/:key", (req, res)=> {
    hashMap[req.params.key] = req.body.data
    res.send("Stored in memory");
});

app.get("/memory/:key", (req, res)=> {
    const key = req.params.key;
    if(key in hashMap){
        res.send(hashMap[key]);
        return;
    }
    res.send("null");
});


app.post("/disk/:key", (req, res)=> {
    const fileName = `${DATA_DIR}/${req.params.key}`;
    fs.writeFileSync(fileName, req.body.data);
    res.send("Stored in disk");
});

app.get("/disk/:key", (req, res)=> {
    const fileName = `${DATA_DIR}/${req.params.key}`;
    try {
        const data = fs.readFileSync(fileName);
        res.send(data); 
    }catch(err){
        res.send("null");
    }
});