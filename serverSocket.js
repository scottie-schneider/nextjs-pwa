const app = require('express')();
const server = require('http').Server(app)
const io = require('socket.io')(server);
const next = require('next')

const { join } = require('path')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler() 

// fake DB 
const messages = []

let port = 3000 || process.env.PORT 

// socket.io server
io.on('connection', socket => {
    // this from one example
    console.log('hey we have a socket connection')
    socket.emit('now', {
        message: 'zeit'
    })
    // this from another
    socket.on('message', (data) => {
        console.log('messages socket')
        messages.push(data)
        socket.broadcast.emit('message', data)
    })
})
nextApp.prepare().then(() => {    
    app.get('/a', (req, res) => {
        console.log('getting a route')
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify({ name: 'From Express Server' }))
        return 
    })
    app.get('*', (req, res) => {        
        const parsedUrl = parse(req.url, true)
        const { pathname } = parsedUrl
        // this is required to ensure the service worker is served
        if (pathname === '/service-worker.js') {
          const filePath = join(__dirname, '.next', pathname)
          nextApp.serveStatic(req, res, filePath)
          return 
        } else {
          return nextHandler(req, res, parsedUrl)
        }
    })
    
    app.listen(port, (err) => {
        if(err) throw err;
        console.log(`> Ready on localhost: ${port}`)
    })
})