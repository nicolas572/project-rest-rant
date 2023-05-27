require('dotenv').config()

// require express
let express = require('express')

//initialize express
let app = express()

app.get('/', function (req, res){
    res.send('Hello World')
})

app.listen(process.env.PORT)
