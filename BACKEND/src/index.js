const express = require('express'); //importando a biblioteca "express"
const mongoose = require('mongoose'); //importando a biblioteca "mongoose"
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app); 

setupWebsocket(server);

mongoose.connect('mongodb://localhost:27017/omnistack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3333, () => {

    console.log("servidor ok")
}); //inserindo um endereço ao servidor

