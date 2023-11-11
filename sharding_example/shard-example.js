const express = require('express');
const fs = require('fs');

const port = process.env.PORT;
const DATA_DIR = process.env.DATA_DIR;

const app = express();
app.use(express.json());

app.listen(port, ()=>{console.log(`Listening in the Port ${port}!!`)});



app.post("/:key", (req, res)=> {
    const {key} = req.params;
    console.log(`storing data at key ${key}`);
    const fileName = `${DATA_DIR}/${key}`;
    fs.writeFileSync(fileName, req.body.data);
    res.send();
});

app.get("/:key", (req, res)=> {
    const {key} = req.params;
    console.log(`Retrieving data from key ${key}`);
    const fileName = `${DATA_DIR}/${key}`;
    try {
        const data = fs.readFileSync(fileName);
        res.send(data); 
    }catch(err){
        res.send("null");
    }
});