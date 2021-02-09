const express = require('express')
const app = express()

// respond with "Hello World!" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello ... World!')
})

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

app.listen(3000)
