const express = require('express')
const app = express()
PORT = process.env.PORT || 8000

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//templeting engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//routes
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)

app.listen(PORT, () => {
    console.log(`Listening on port no ${PORT}`);
})