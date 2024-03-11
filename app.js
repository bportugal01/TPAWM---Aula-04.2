const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine


app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('primeira_pagina')
})

app.listen(8081, function () {
    console.log('A porra do servidor rodando no endereço http://localhost:8081')
})