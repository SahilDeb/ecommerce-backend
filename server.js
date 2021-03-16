// Imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const User = require('./api/models/users');

const DB_URL = "mongodb://root:qW6KHCje6uJfZy6Q@ecommdb-shard-00-00.eiij8.mongodb.net:27017,ecommdb-shard-00-01.eiij8.mongodb.net:27017,ecommdb-shard-00-02.eiij8.mongodb.net:27017/ecomm-db?ssl=true&replicaSet=atlas-g9fis0-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Mongo DB connected"))
.catch(e => console.error(e))

// Global level middlewares
app.use(cors())

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

// API level middlewares
app.get('/', (req, res) => {
  res.send("Hello from GET API")
})

app.get('/myname', (req, res) => {
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

app.post('/signup', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  user.save()
  .then(result => {
    console.log("User inserted")
    res.status(201).json({
      message: "User created",
      user: result
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  });
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  return console.log(`Server is using Supervisor running on port ${PORT}`);
});

