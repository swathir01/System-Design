const express = require('express');
const database = require('./database');
const redis = require('redis').createClient();

const app = express();

app.listen(3000, ()=>{
    init();
    console.log("Listening in the Port 3000!!")});

const init = async () => {
    await redis.connect()
  .then(async (res) => {
    console.log('connected');
  })
  .catch((err) => {
    console.log('err happened' + err);
  });
}
app.get("/nocache/index.html", (req, res)=> {
    database.get('index.html', page=>{
        res.send(page);
    });
});

app.get("/withcache/index.html", (req, res)=> {
        redis.get('index.html').then((redisRes)=>{
            if(redisRes) {
                res.send(redisRes);
                return;
            }
            database.get('index.html', page =>{ 
                redis.set('index.html', page, 'EX', 10);
                res.send(page);
            });
        }).catch((err)=>{
            console.log('err happened' + err);
        });
});