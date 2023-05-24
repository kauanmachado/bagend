const express = require('express')
const router = express.Router()

const BarbeariaController = require('../controllers/BarbeariaController')

// Cadastro da barbearia
router.post('/cadastrar-barbearia', BarbeariaController.registerBarbearia)

// Login da barbearia
router.post('/login-barbearia', BarbeariaController.loginBarbearia)


module.exports = router