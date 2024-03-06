const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('This is My Server!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})