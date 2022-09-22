const mongoose = require('mongoose')

// Difference services are discoverable at a host name identical to the container name --> change from local host to 'mongo'
mongoose
    .connect('mongodb://mongo:27017/listings', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

// // Connection string above has been changed from local host "127.0.0.1" to "mongo" which matched the name of the mongoDB service we use in the Docker.yml file
// mongoose
//     .connect('mongodb://127.0.0.1:27017/listings', { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })
