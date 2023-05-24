const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/ClienteController')

router.get('/clientes', clienteController.getCustomers)


module.exports = router