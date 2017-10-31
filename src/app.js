const http = require('http')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const conf = require('./config/defaultConfig')

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url)
  console.log(filePath)
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.code = 404
      res.setHeader('Content-Type', 'text/plain')
      // TODO 请求头的类型和含义 this is test
      res.end(`${filePath} is not definde`)
      return false
    }
    if (stats.isFile()) {
      fs.createReadStream(filePath).pipe(res)
      // TODO createReadStream 方法和 pipe方法。
    }
  })
})

server.listen(conf.prot, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.prot}`
  console.log(`Server Started at ${chalk.green(addr)}`)
})
