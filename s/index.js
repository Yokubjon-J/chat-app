const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const mongoose = require('mongoose');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
    origin: ["http://localhost:3000"], //client address
    methods: ["GET", "POST"],
}, });

app.get('/', (req, res) => {
    res.send('<h1>You are viewing server homepage.</h1>');
});
io.on("connection", (socket) => {
    console.log("OpenID.Connect");
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); //returns 'msg' to the client
        console.log(msg);
        socket.broadcast.emit("hello", "world");
    });
});

httpServer.listen(5000);