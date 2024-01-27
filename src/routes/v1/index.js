import express from 'express'
import { StatusCodes } from 'http-status-codes'

const router = express.Router()

router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'Hello world!'
  })
})

router.use('/example', require('./exampleRoute'))

module.exports = router