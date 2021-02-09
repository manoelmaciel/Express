const express = require('express')
const app = express()

// will be executed for any request method in /secret
app.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.listen(3000)
