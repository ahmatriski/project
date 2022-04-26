// mengimport module
const express = require('express')
const app = express()
const port = 8000

// menentukan folder untuk file statis
app.use(express.static('public'))

// memulai server
app.listen(port, () => {
    console.log('App started at http://localhost:' + port)
})