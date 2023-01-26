const express = require('express')
const app = express()

const port = process.env.PORT || 5000

require('./db')// conecting to database
// var bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()
app.use(express.json());// it's called middleware
app.use('/static',express.static('Files'))
app.get('/', function (req, res) {
  res.send('Hello Unorg')
})


const ItemCategory=require('./routes/ItemCategory')
const User=require('./routes/User')
const Image=require('./routes/Image')

app.use('/api',ItemCategory);
app.use('/api',User);
app.use('/api',Image);

app.listen(port,()=>{
  console.log(`Server running on http://localhost:${port}`);
})