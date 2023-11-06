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
        lat,
        lng
    } = req.body

    // Validações
    if (!nome_completo) {
        return res.status(422).json({ msg: "O seu nome é obrigatório!" })
    }
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório!" })
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" })
    }
    if (!endereco) {
        return res.status(422).json({ msg: "O endereco é obrigatório!" })
    }

    //Checar se o usuário existe
    const clienteExiste = await prisma.cliente.findUnique({
        where: {
            email: email
        }
    })

    if (clienteExiste) {
        return res.json({ error: "Email ja cadastrado!" })
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
                endereco,
                lat,
                lng
            }
        })


        const chaveSecreta = process.env.SECRET; // Substitua pela sua chave secreta
        const token = jwt.sign({
            id: cliente.id,
            role: "cliente"
        }, chaveSecreta, { expiresIn: '1h' });
        const data = { cliente, token }
        const tokenCookie = res.cookie('token', token, { httpOnly: true, secure: true });
        console.log(tokenCookie)

        return res.json(data)


    } catch (error) {
        res.status(400).json({ status: "error" })
    }



}

exports.loginCliente = async (req, res) => {
    const { email, senha } = req.body

    //Validações
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatório!" })
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" })
    }

    const cliente = await prisma.Cliente.findUnique({
        where: {
            email: email
        }
    })

    if (!cliente) {
        return res.status(404).json({ msg: "Usuario não encontrado!" })
    }

    // Checar se as senhas conferem
    const checarSenha = await bcrypt.compare(senha, cliente.senha)

    if (!checarSenha) {
        return res.status(422).json({ msg: "Senhas inválida!" })
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: cliente.id,
            role: "cliente"
        }, secret)

        res.status(200).json({ msg: "Autenticação realizada com sucesso", token })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.getCliente = async (req, res) => {
    const id = req.params.id

    const cliente = await prisma.cliente.findUnique({
        where: {
            id: id
        },
        include: {
            agendas: true,
            salvos: true
        }
    })

    if (!cliente) {
        return res.status(404).json({ msg: 'Cliente não encontrado' });
    }

    return res.json(cliente);
}

exports.getAgendas= async (req, res) => {
    const idCliente = req.params.id;

    try {
        const agendas = await prisma.agenda.findMany({
            where: {
                id_cliente: idCliente
            },
        })



        const agendaDetails = []

        for (const agenda of agendas) {
            const { id, id_barbearia, id_profissional, id_corteestilo, id_datahorario} = agenda;

            // Consultar informações relacionadas separadamente

            const barbearia = await prisma.barbearia.findUnique({
                where: {
                    id: id_barbearia
                }
            })


            const profissional = await prisma.profissional.findUnique({
                where: {
                    id: id_profissional
                }
            })

            const corteestilo = await prisma.cortesEstilos.findUnique({
                where: {
                    id: id_corteestilo
                }
            })

            const datahorario = await prisma.horarioDisponivel.findUnique({
                where: {
                    id: id_datahorario
                }
            });


            const agendaInfo = {
                id,
                barbearia,
                profissional,
                corteestilo,
                datahorario
            };

            agendaDetails.push(agendaInfo);
        }

        return res.json(agendaDetails);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar agendas do cliente.' });
    }
}


exports.salvarBarbearia = async (req, res) => {
    const idCliente = req.params.id

    const {
        id,
        idBarbearia,
    } = req.body

    try {
        const existeSalvo = await prisma.salvo.findFirst({
            where: {
                id_cliente: idCliente,
                id_barbearia: idBarbearia,
            },
        });

        if(existeSalvo) {
            const updatedSalvo = await prisma.salvo.update({
                where: {
                    id: existeSalvo.id,
                },
                data: {
                    data: new Date()
                }
            })
            return res.json(updatedSalvo)
        } else {
            const barbeariaSalva = await prisma.salvo.create({
                data: {    
                    id,
                    cliente: {
                        connect: { id: idCliente } 
                    },
                    barbearia: {
                        connect: { id: idBarbearia}
                    },
                    data: new Date()
                }
            })
            res.json(barbeariaSalva)
        }      
    } catch (error) {
        console.error(`Erro ao salvar barbearia: ${error}`)
    }
}

exports.getSalvos = async (req, res) => {
    const id = req.params.id

    try {
        const salvos = await prisma.salvo.findMany({
            where: {
                id_barbearia: id
            }
        })

        const barbearias = await Promise.all(
            salvos.map(async (salvo) => {
                const idBarbearia = salvo.id_barbearia
                const barbearia = await prisma.barbearia.findUnique({
                    where: {
                        id: idBarbearia
                    },
                    select: {
                        id: true,
                        nome_barbearia: true,
                        endereco: true,
                        telefone: true,
                        link_instagram: true
                    }
                })
                barbearia.idSalvo = salvo.id;
                return barbearia;
            })
        )
        res.json(barbearias)
    } catch (error) {
        console.error(`Erro ao buscar as barbearias salvas: ${error}`)
    }
}

exports.deleteSalvo = async (req, res) => {
    const id = req.params.id

    try {
        const deletedSalvo = await prisma.salvo.delete({
            where: {
                id: id
            }
        })
        return res.json(deletedSalvo)
    } catch (error) {
        console.error(`Erro ao deletar barbearia salva: ${error}`)
    }
}


exports.fazerAgenda = async (req, res) => {
    const {
       id_cliente,
       id_barbearia,
       id_corteestilo,
       id_profissional,
       id_datahorario
    } = req.body

    try {
        const agenda = await prisma.agenda.create({
            data: {
                id_cliente,
                id_barbearia,
                id_corteestilo,
                id_profissional,
                id_datahorario,
                concluida: false
            }
        })

        await prisma.horarioDisponivel.update({
            where: {
                id: id_datahorario
            },
            data: {
                disponivel: false
            }
        })
        
        return res.json(agenda)
    } catch (error) {
        console.error(`Erro ao fazer agendamento: ${error}`)
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
    const imagemUrl = `/uploads/${barbearia.foto_perfil}`;
        const barbeariaComImagem = {
            ...barbearia,
            imagemUrl
        };
    if (!barbeariaComImagem) {
        return res.status(404).json({ msg: 'Barbearia não encontrado' });
    }
    return res.json(barbeariaComImagem);
}

exports.updateCliente = async (req, res) => {
    const { id } = req.params

    const {
        nome_completo,
        email,
        senha,
        endereco
    } = req.body

    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    try {
        const cliente = await prisma.cliente.findUnique({
            where: { id: id }
          });

        if(!cliente){
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }

        const uptadedCliente = await prisma.cliente.update({
            where: {
                id: id
            },
            data: {
               nome_completo,
               email,
               senha: senhaHash,
               endereco
            }
        })
        return res.json(uptadedCliente)

    } catch(error) {
        console.error(`Erro ao atualizar o cliente: ${error}`)
    }
}