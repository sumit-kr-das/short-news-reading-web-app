const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
require('dotenv').config()
const apiKey = process.env.API_key

newsRouter.get('/', (req, res) => {
    res.render('index')
})

newsRouter.get('/allnews', async (req, res) => {
    const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
    res.render('singleNews', {
        articles: newsAPI.data.articles,
    })
})

newsRouter.get('/:country/:category', async (req, res) => {
    try {
        const apiLink = 'https://newsapi.org/v2/top-headlines?'
        const apiLinkTwo = '&apiKey='
        const newsAPI = await axios.get(apiLink + "country=" + req.params.country + "&category=" + req.params.category + apiLinkTwo + apiKey)
        res.render('news', {
            articles: newsAPI.data.articles,
        })
    } catch (err) {
        console.log(err);
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.requiest) {
            console.log(err.requiest);
        } else {
            console.error('Error', err.message)
        }
    }
})

module.exports = newsRouter