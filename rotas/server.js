const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time: ', Date.now().toString())
  next() 
})

app.use('/user', (req, res, next) => {
  // console.log('Request type: ', req.method)
  const metodo = req.method;
  res.send(`Request type: ${metodo}`)
  next()
})

app.listen(51576)
