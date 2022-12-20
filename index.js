const express = require('express')
const app = express()
// const worker = require('./worker')

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello World from Express Framework')
})

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/public/product.html')
})

app.get('/about', (req, res) => {
    res.send(worker.Hello())
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/errorPage.html')
})

app.listen(3000, () =>{
    console.log('start server at port [3000]')
})