const express = require('express')
const app = express()
// const worker = require('./worker')

app.get('/', (req, res) => {
    res.send('Hello World from Express Framework')
})

// app.get('/product', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

// app.get('/about', (req, res) => {
//     res.send(worker.Hello())
// })


// app.get('*', (req, res) => {
//     res.send('ไม่พบหน้าที่ร้องขอ (Error 404 Page Not Found)')
// })

app.listen(3000, () =>{
    console.log('start server at port [3000]')
})