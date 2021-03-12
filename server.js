// Imports
const express = require('express')
const app = express()

// Global level middlewares
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// API level middlewares
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
  let n1 = +req.body?.num1
  let n2 = +req.body?.num2
  console.log(`Value from POST ${n1} + ${n2} = ${n1 + n2}`);
  res.status(200).send(req.body)
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  return console.log(`Server is using Supervisor running on port ${PORT}`);
});

