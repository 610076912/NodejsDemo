const http = require('http')
const chalk = require('chalk')
const path = require('path')
const conf = require('./config/defaultConfig')

const server = http.createServer((req, res) => {
  const url = path.join(conf.root, req.url)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(url)
})

server.listen(conf.prot, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.prot}`
  console.log(`Server Started at ${chalk.green(addr)}`)
})
