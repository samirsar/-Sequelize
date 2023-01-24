const express = require('express')
const app = express()

const port = process.env.PORT || 5000

require('./db')// conecting to database
var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
app.use(express.json());// it's called middleware

app.get('/', function (req, res) {
  res.send('Hello Unorg')
})

app.use('/user',require('./routes/user'))

app.listen(port,()=>{
  console.log(`app is running on port ${port}`);
})