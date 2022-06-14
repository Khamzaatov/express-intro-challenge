const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/users', (req, res) => {
    res.send(["user1", "user2", "user3"])
  })

app.post('/users', (req, res) => {
    res.send("юзер добавлен")
  })

app.get('/admin', (req, res) => {
    res.send("не хватает прав доступа")
  })

app.get('/users/:id', (req, res) => {
    res.json(`Клиент запрашивает юзера с номером ${req.params.id}`)
  }) 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})