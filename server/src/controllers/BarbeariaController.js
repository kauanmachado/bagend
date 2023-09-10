const prisma = require('../lib/prisma')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Cookies = require('js-cookie')


// Cadastro da barbearia
exports.registerBarbearia = async (req, res) => {

    const {
        id,
        nome_barbearia,
        email,
        cnpj,
        senha,
        endereco,
        lat,
        lng,
        foto_perfil,
        telefone,
        link_instagram } = req.body

    // Validações
    if (!nome_barbearia) {
        return res.status(422).json({ msg: "O nome da barbearia é obrigatório!" })
    }
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório!" })
    }
    if (!cnpj) {
        return res.status(422).json({ msg: "O CNPJ é obrigatório!" })
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" })
    }
    if (!endereco) {
        return res.status(422).json({ msg: "O endereco é obrigatório!" })
    }
    if (!lat) {
        return res.status(422).json({ msg: "A latitude é obrigatória!" })
    }
    if (!lng) {
        return res.status(422).json({ msg: "A longitude é obrigatória!" })
    }
    if (!telefone) {
        return res.status(422).json({ msg: "O telefone é obrigatório!" })
    }
    // if(senha !== confirmarSenha){
    //     return res.status(422).json({ msg: "Senhas não conferem!"})
    // }

    // Checar se o usuário existe
    const barbeariaExiste = await prisma.Barbearia.findUnique({
        where: {
            email: email,

        }
    })

    const barbeariaCnpjExiste = await prisma.Barbearia.findUnique({
        where: {
            cnpj: cnpj
        }
    })

    if (barbeariaExiste) {
        return res.status(422).json({ msg: "Email ja cadastrado!" })
    }

    if (barbeariaCnpjExiste) {
        return res.status(422).json({ msg: "CNPJ ja cadastrado!" })
    }

    // Criar senha
    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)



    try {
        const barbearia = await prisma.barbearia.create({
            data: {
                id,
                nome_barbearia,
                email,
                cnpj,
                senha: senhaHash,
                endereco,
                lat,
                lng,
                foto_perfil,
                telefone,
                link_instagram
            }
        })
        //res.status(201).json(barbearia)
        const chaveSecreta = process.env.SECRET; // Substitua pela sua chave secreta
        const token = jwt.sign({
            id: barbearia.id,
            role: "barbearia"
        }, chaveSecreta, { expiresIn: '1h' });
        const data = { barbearia, token }
        const tokenCookie = res.cookie('token', token, { httpOnly: true, secure: true });
        console.log(tokenCookie)

        return res.json(data)
    }
    catch (error) {
        res.status(400).json({ msg: error.message })
    }

}


//Login da barbearia
exports.loginBarbearia = async (req, res) => {
    const { email, senha } = req.body

    // Validações
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório!" })
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" })
    }

    // Checar se o usuário existe
    const barbearia = await prisma.Barbearia.findUnique({
        where: {
            email: email
        }
    })

    if (!barbearia) {
        return res.status(404).json({ msg: "Usuario não encontrado!" })
    }
    // Checar se as senhas conferem
    const checarSenha = await bcrypt.compare(senha, barbearia.senha)
    if (!checarSenha) {
        return res.status(422).json({ msg: "Senhas inválida!" })
    }

    try {
        const secret = process.env.SECRET
        const token = jwt.sign({
            id: barbearia.id,
            role: "barbearia"
        }, secret, { expiresIn: '1h' })
        //   res.cookie('token', token);


        res.status(200).json({ msg: "Autenticação realizada com sucesso", token })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.getBarbearia = async (req, res) => {
    const id = req.params.id;

    const barbearia = await prisma.barbearia.findUnique({
        where: {
            id: id
        },
        include: {
            agendas: true,
            cortesestilos: true,
            profissionais: true,
            avaliacoes: true
        }
    })
    if (!barbearia) {
        return res.status(404).json({ msg: 'Barbearia não encontrado' });
    }
    return res.json(barbearia);
}

exports.addCorteEstilo = async (req, res) => {
    const {
        id,
        nome_corte,
        tempo_estimado,
        preco
    } = req.body

    if (!nome_corte) {
        return res.status(422).json({ msg: "O nome do corte é obrigatório!" })
    }

    if (!tempo_estimado) {
        return res.status(422).json({ msg: "O tempo estimado é obrigatório!" })
    }

    if (!preco) {
        return res.status(422).json({ msg: "O preço é obrigatório!" })
    }

    try {
        await prisma.cortesEstilos.create({
            data: {
                id,
                nome_corte,
                tempo_estimado,
                preco
            }
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }


}
