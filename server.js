const express = require('express')
const app = express()
PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//templeting engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: true
}))
//routes
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)
app.use('/article', newsRouter)


app.listen(PORT, '127.0.0.1', () => {
    console.log(`Listening on port no ${PORT}`);
})