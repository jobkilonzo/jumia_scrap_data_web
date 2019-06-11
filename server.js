const express = require('express')
const mongoose = require('mongoose')
const laptops = require('./routes/api/laptops')

const app = express()

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose
  .connect(db)
  .then(()=> console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// use routes
app.use('/api/laptops', laptops)

const port = process.env.PORT || 5001

app.listen(port, () => console.log(`Server running on port ${port}`))
