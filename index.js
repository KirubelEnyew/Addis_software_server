const app = require('./app')
const http = require('http')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 5000

const server = http.createServer(app)
const dbUri = process.env.DB_URI

const connection = () => {
    mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() =>
            server.listen(port, () => {
                console.log(`server runinig on port ${port}`)
            }))
        .catch((error) => { console.log(error); connection() })
}

connection()