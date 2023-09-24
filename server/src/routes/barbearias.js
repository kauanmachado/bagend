const express = require('express')
const router = express.Router()
const BarbeariaController = require('../controllers/BarbeariaController')
const { authMiddleware } = require('../authMiddleware')
const { roleMiddleware } = require('../roleMiddleware')
const upload = require('../multerConfig')

// Cadastro da barbearia
router.post('/cadastrar-barbearia', upload.single('foto_perfil'), BarbeariaController.registerBarbearia)

// Login da barbearia
router.post('/login-barbearia', BarbeariaController.loginBarbearia)

router.get('/painel-barbearia/:id', authMiddleware, roleMiddleware('barbearia'), BarbeariaController.getBarbearia,  (req, res) => {
    console.log(req.barbearia)
    res.json({ msg: 'Bem-vindo, barbearia!' });
})
router.get('/perfil-barbearia/:id', BarbeariaController.getBarbearia)
router.get('/barbearias', BarbeariaController.getAllBarbearias)

router.post('/painel-barbearia/:id/adicionar-corteestilo', BarbeariaController.addCorteEstilo)
router.get('/painel-barbearia/:id/corteestilos', BarbeariaController.getCortesEstilos)
router.delete('/painel-barbearia/:id/corteestilos/:id', BarbeariaController.deleteCorteEstilo)
router.put('/painel-barbearia/atualizar-corteestilo/:id', BarbeariaController.updateCorteEstilo)

router.post('/painel-barbearia/:id/adicionar-profissional', upload.single('foto_profissional'), BarbeariaController.addProfissional)
router.get('/painel-barbearia/:id/profissionais', BarbeariaController.getProfissional)
router.delete('/painel-barbearia/:id/profissionais/:id', BarbeariaController.deleteProfissional)


module.exports = router

