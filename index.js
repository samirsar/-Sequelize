const express = require('express')
const app = express()

const User =require('./models/user')
require('./models/index')
var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()

app.get('/', function (req, res) {
  res.send('Hello Unorg')
})

User.sync({ force: true });
console.log("The table for the User model was just (re)created!");
app.listen(3000)