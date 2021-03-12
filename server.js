const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send("Hello from GET API")
})

app.get('/myname', (req, res, next) => {
  res.status(200)

  res.send({
    name: "Sahil Debnath"
  });

  res.end()
})

app.post('/add', (req, res) => {
  // var n1 = req.body.number1
  // var n2 = req.body.number2
  // res.send(n1 + n2)
  res.status(200).send(req.body)
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  return console.log(`Server is using Supervisor running on port ${PORT}`);
});

