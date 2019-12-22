// Custom Express Server
const express = require('express')
const next = require('next')

const { join } = require('path')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/a', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: 'From Express Server' }))
    return 
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts', { id: req.params.id })
  })

  server.all('*', (req, res) => {
    console.log('catching all')
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl
    // this is required to ensure the service worker is served
    if (pathname === '/service-worker.js') {
      console.log('SERVING THE SERVICE WORKER')
      const filePath = join(__dirname, '.next', pathname)
      app.serveStatic(req, res, 'http://localhost:3000/static/service-worker.js')
      return 
    } else {
      return handle(req, res, parsedUrl)
    }    
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})