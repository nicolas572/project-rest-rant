require('dotenv').config()

// require express
let express = require('express')

//initialize express
let app = express()

app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.set("views", __dirname + "/views")
app.engine('jsx', require('express-react-views').createEngine())



app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
