const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Goal Created' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Goal ID ${req.params.id} Updated` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Goal ID ${req.params.id} Deleted` })
})


module.exports = router