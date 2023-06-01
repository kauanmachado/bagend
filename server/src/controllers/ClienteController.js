const prisma = require('../lib/prisma')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.registerCliente = async (req, res) => {
    const {
        id,
        nome_completo,
        email,
        senha,
        endereco,
    } = req.body

    // Validações
    if(!nome_completo){
        return res.status(422).json({ msg: "O seu nome é obrigatório!"})
    }
    if(!email){
        return res.status(422).json({ msg: "O email é obrigatório!"})
    }
    if(!senha){
        return res.status(422).json({ msg: "A senha é obrigatória!"})
    }
    if(!endereco){
        return res.status(422).json({ msg: "O endereco é obrigatório!"})
    }

    //Checar se o usuário existe
    const clienteExiste = await prisma.cliente.findUnique({
        where: {
            email: email
        }
    })

     if(clienteExiste){
            return res.json({ error: "Email ja cadastrado!"})
        }

    // Criar senha
    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    try {
        const cliente = await prisma.cliente.create({
            data: {
                id,
                nome_completo,
                email,
                senha: senhaHash,
                endereco
            }
        })
        
        const payload = { id: id };
        const chaveSecreta = process.env.SECRET; // Substitua pela sua chave secreta
        const token = jwt.sign(payload, chaveSecreta, { expiresIn: '1h' });
        res.json({ token })

    } catch (error) {
        res.status(400).json({ status: "error" })
    }

    

}

exports.loginCliente = async (req, res) => {
    const { email, senha } = req.body

    //Validações
    if(!email){
        return res.status(422).json({ msg: "O email é obrigatório!"})
    }
    if(!senha){
        return res.status(422).json({ msg: "A senha é obrigatória!"})
    }

    const cliente = await prisma.Cliente.findUnique({
        where: {
            email: email
        }
    })

    if(!cliente) {
        return res.status(404).json({ msg: "Usuario não encontrado!"})
    }

    // Checar se as senhas conferem
    const checarSenha = await bcrypt.compare(senha, cliente.senha)

    if(!checarSenha){
        return res.status(422).json({ msg: "Senhas inválida!"})
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: cliente.id
        }, secret)

        res.status(200).json({ msg: "Autenticação realizada com sucesso", token})
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

