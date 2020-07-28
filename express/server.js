const express = require('express')
const app = express()
const port = 3000


app.get('/client/index.js',(req,res) => res.send('hello world!'))

app.listen(port, () => console.log('Canada COVID-19HEALTH app listening at http://localhost:${port}'))