require('dotenv').config()
const methodOverride = require('method-override')
// require express
let express = require('express')

//initialize express
let app = express()

app.use(express.urlencoded({ extended: true }))
app.set("views", __dirname + "/views")
app.set('view engine', 'jsx')
app.use(methodOverride('_method'))
app.engine('jsx', require('express-react-views').createEngine())
app.use('/places', require('./controllers/places'))
app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
