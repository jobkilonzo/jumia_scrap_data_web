const express = require('express')

const router = express.Router()
const Laptop = require('../../models/Laptop')

router.get('/laptops', (req, res) => {
  Laptop.find()
    .then(laptops => res.json(laptops))
    .catch(err => res.status(404).json({nolaptops: "No laptops found"}))
})

module.exports = router
