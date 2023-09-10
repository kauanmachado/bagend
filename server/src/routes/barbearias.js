const express = require('express')
const router = express.Router()

const BarbeariaController = require('../controllers/BarbeariaController')
const { authMiddleware } = require('../authMiddleware')
const { roleMiddleware } = require('../roleMiddleware')

// Cadastro da barbearia
router.post('/cadastrar-barbearia', BarbeariaController.registerBarbearia)

// Login da barbearia
router.post('/login-barbearia', BarbeariaController.loginBarbearia)

router.get('/painel-barbearia/:id', authMiddleware, roleMiddleware('barbearia'), BarbeariaController.getBarbearia,  (req, res) => {
    console.log(req.barbearia)
    res.json({ msg: 'Bem-vindo, barbearia!' });
})

// router.put('/editar-dados/:id', authMiddleware, roleMiddleware('barbearia'), BarbeariaController.editDados)

router.post('/adicionar-corteestilo', authMiddleware, roleMiddleware('barbearia'), BarbeariaController.addCorteEstilo)

module.exports = router

