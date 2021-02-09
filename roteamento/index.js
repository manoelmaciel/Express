const express = require('express')
const app = express()

// GET method route
app.get('/', (req, res) => {
  res.send('GET ... Request to the homepage!')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST ... Request to teh homepage!')
})

app.listen(3000)
