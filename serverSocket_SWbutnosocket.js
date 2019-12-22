const express = require("express");
const next = require("next");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

const { join } = require('path')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 3000

nextApp.prepare().then(() => {
    app.get('/a', (req, res) => {
        console.log('getting "a" route')
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify({ name: 'From Express Server in server.js' }))
        return 
      })
    app.get('/service-worker', (req, res) => {
        console.log('getting sw!')
        const filePath = join(__dirname, '.next', pathname)
        nextApp.serveStatic(req, res, filePath)        
    })
    app.all("*", (req, res) => {        
        const parsedUrl = parse(req.url, true)
        const { pathname } = parsedUrl
        console.log(`pathname is ${pathname}`)
        // this is required to ensure the service worker is served
        if (pathname === '/service-worker.js') {
        console.log('getting sw!')
        const filePath = join(__dirname, '.next', pathname)
        nextApp.serveStatic(req, res, filePath)        
        return 
        } else {
        return nextHandler(req, res, parsedUrl)
        }    
    })

    app.listen(port, err => {
        if (err) throw err;
        console.log(`Server listening on port ${port}`);
    })
})

const takers = [];
const givers = [];

io.on("connect", socket => {
    console.log("Received a " + socket.handshake.query.role + " connection: " + socket.id);

    if (socket.handshake.query.role !== "taker" && socket.handshake.query.role !== "giver") {
        console.log("Unsupported role " + socket.handshake.query.role);
    }

    if (socket.handshake.query.role === 'taker') {
        takers.push(socket);
        givers.forEach(giver => giver.emit('takers', takers.length));
    }

    if (socket.handshake.query.role === 'giver') {
        givers.push(socket);
        if (givers.length > 1) {
            console.log("Too many cooks in the kitchen");
        }

        socket.emit('takers', takers.length);
    }

    socket.on('disconnect', (reason) => {
        const takerIdx = takers.indexOf(socket);
        if (takerIdx !== -1) {
            takers.splice(takerIdx, 1);
        }
        const giverIdx = givers.indexOf(socket);
        if (giverIdx !== -1) {
            givers.splice(giverIdx, 1);
        }
    });

    socket.on('trivia_question', data => {
        console.log('got trivia question ' + JSON.stringify(data));
        takers.forEach(taker => taker.emit('trivia_question', data));
    });

    socket.on('answer', data => {
        console.log('got answer ' + JSON.stringify(data));
        givers.forEach(giver => giver.emit('answer', data));
    });
});