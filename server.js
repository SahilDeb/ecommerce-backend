const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send("Hello from GET API")
})

app.post('/add', (req, res) => {
  // var n1 = req.body.number1
  // var n2 = req.body.number2
  // res.send(n1 + n2)
  res.status(200).send(req.body)
})

app.listen(3000, () => {
  return console.log("Server is using Supervisor running on port 3000");
});

