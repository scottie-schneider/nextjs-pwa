export default (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ name: 'From API Routes, Next JS' }))
  }