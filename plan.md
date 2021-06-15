# npm init

# npm install axios body-parser ejs express

# npm install --save-dev nodemon

# create and import on server.js

- import express & create a server
- import all static files
- import templeting engine
- import routes

# crete a routes on server.js and export

const express = require('express')
const newsRouter = express.Router()

newsRouter.get('', async (req, res) => {
res.render('news')
})

module.exports = newsRouter

# import axios on news.js
