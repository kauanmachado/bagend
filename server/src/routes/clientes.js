const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/ClienteController')
const { authMiddleware } = require('../authMiddleware')
const { roleMiddleware } = require('../roleMiddleware')

// Cadastro do cliente
router.post('/cadastrar-cliente', clienteController.registerCliente)

// Login do cliente
router.post('/login-cliente', clienteController.loginCliente)

router.get('/painel-cliente/:id', authMiddleware, roleMiddleware('cliente'), clienteController.getCliente, (req, res) => {
    res.json({ msg: 'Bem-vindo, cliente!'})
})
router.get('/painel-cliente/:id/agendas', authMiddleware, roleMiddleware('cliente'), clienteController.getAgendas)


module.exports = router