import { createServer } from 'http'

const port = 3000
const ip = 'localhost'

const server = () =>
  createServer((req, res) => {
    res.end('teste')
  })

server().listen(port, ip, () => {
  console.log('err')
})
