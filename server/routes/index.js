const routes = require('express').Router();
const fetch = require('node-fetch'); 

routes.get('/streamdata',(req,res)=>{
    res.status(200).set({
        "connection":"keep-alive", 
        "cache-control" :"no-cache", 
        "content-Type":"text/event-stream"
    }); 
    setInterval(()=>{
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
        .then(res=>res.json())
        .then(json=>res.write('data:' + JSON.stringify(json) + '\n\n'));   
    },5000); 
}); 

module.exports = routes; 