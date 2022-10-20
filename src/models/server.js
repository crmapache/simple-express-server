const express = require('express')
const cors = require('cors')

class Server {
  app = null
  port = null

  constructor(port = 3000) {
    this.app = express()
    this.port = port

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.static('public'))
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use('/api/users', require(`${__dirname}/../routes/user`))
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on http://localhost:${this.port}`)
    })
  }
}

module.exports = { Server }
