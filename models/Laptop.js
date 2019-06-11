const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create Schema
const LaptopSchema = new Schema({
  brand: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  link: {
    type: String,
    required: false,
  }
})

module.exports = Laptop = mongoose.model('laptop', LaptopSchema)
