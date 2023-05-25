const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/ClienteController')

// Cadastro do cliente
router.post('/cadastrar-cliente', clienteController.registerCliente)

// Login do cliente
router.post('/login-cliente', clienteController.loginCliente)


module.exports = router