'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static('./public'))

server.get('/',(req,res) => {
    res.send('home route')
});

server.get('/test',(request,respose) => {
    respose.send('your server ready to use !!');
});

server.listen(PORT,() => {
    console.log(`listening on PORT ${PORT}`);
});