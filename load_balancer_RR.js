const express = require('express');
const app = express()

const port = process.env.PORT;

app.listen(port, ()=>{console.log(`Listening in the Port ${port}!!`)});

app.get('/hello', (req, res)=> {
    console.log(req.headers);
    res.send(`Hello from ${port}.\n`);
});