import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, ListGroup, Modal, Row } from "react-bootstrap"
import { BsScissors } from "react-icons/bs"
import { MdOutlineArrowBackIos } from "react-icons/md"
import { Link, useParams } from "react-router-dom"

const Profissional = ({ onPrev, updateProfissional }) => {
    const [showModal, setShowModal] = useState(false)
    const [profissionais, setProfissionais] = useState([])
    const [selectedProfissional, setSelectedProfissional] = useState(null);

    const apiUrl = "http://localhost:8001"
    const [data, setData] = useState({ profissionais: [] })
    const { id } = useParams()

    const handleEventClick = (profissional) => {
        setSelectedProfissional(profissional)
        setShowModal(true)
        updateProfissional(profissional)
    }

    useEffect(() => {
        async function fetchBarbearia() {
            try {
                const res = await axios.get(`${apiUrl}/perfil-barbearia/${id}`, {
                    withCredentials: true
                })
                const dados = res.data
                const barbearia = {
                    ...dados,
                    imagemUrl: `${apiUrl}/${dados.foto_perfil}`
                }
                console.log(barbearia)
                setData(barbearia)
            }
            catch (error) {
                console.error('Erro ao buscar dados da API:', error)
            }
        }
        async function fetchProfissionais() {
            try {
                const res = await axios.get(`${apiUrl}/painel-barbearia/${id}/profissionais`, {
                    withCredentials: true
                })
                const profissionaisComImagens = res.data.map((profissional) => {
                    return {
                        ...profissional,
                        imagemUrl: `${apiUrl}/${profissional.foto_profissional}`
                    };
                });
                setProfissionais(profissionaisComImagens)
                console.log(res.data)
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error)
            }
        }
        fetchProfissionais()
        fetchBarbearia()
    }, [])

    return (
        <Container className="default-margin">
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Detalhes do Profissional</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProfissional && (
                        <div>
                            <div className="d-flex">
                            <img
                                src={selectedProfissional.imagemUrl}
                                width="40"
                                height="40"
                                className="rounded-circle "
                            />
                            <h5 className="fw-bold fs-6 text-uppercase ms-3 mt-2">{selectedProfissional.nome_profissional}</h5>
                            
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="rounded-pill px-3" onClick={handleEventClick}>
                        Confirmar
                    </Button>
                    <Button className="bg-secondary rounded-pill px-3" onClick={() => setShowModal(false)}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className="d-flex justify-content-center">
                <Col md={9} className=" p-5 shadow rounded">
                    <Button className="float-end btn-prev text-dark fw-bold fs-6 rounded-pill" onClick={onPrev}>
                        <MdOutlineArrowBackIos
                            style={{ fontSize: 15 }}
                            className="me-2"
                        />Voltar para cortes e estilos</Button>

                    <div className="d-flex mt-3 mb-3">
                        <img
                            src={data.imagemUrl}
                            width="60"
                            height="60"
                            className="rounded-circle "
                        />
                        <div className=" ms-3 flex flex-column">
                            <h5 className=" mt-2 fw-bold text-capitalize">{data.nome_barbearia}</h5>
                            <span className="text-secondary">{data.endereco}</span>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="d-flex mt-5">
                        <BsScissors className="fs-2 text-secondary ms-1" />
                        <h3 className="fw-bold mb-3 text-secondary ms-3">Cortes e estilos</h3>
                    </div>
                    <ListGroup horizontal className=" d-flex">
                        <Container>
                            <Row>

                                {profissionais.length === 0 ? (
                                    <h5 className="text-muted mt-4 p-0">Não há nenhum corte ou estilo registrado.</h5>
                                ) : (
                                    profissionais.map((profissional) => (
                                        <Card
                                            style={{ width: "18rem" }}
                                            className="border-0 shadow m-1 p-3"
                                            key={profissional.id}

                                        >
                                            <Card.Body>
                                                <div className="d-flex">
                                                    <img
                                                        src={profissional.imagemUrl}
                                                        width="40"
                                                        height="40"
                                                        className="rounded-circle "
                                                    />
                                                    <h5 className="fw-bold fs-6 text-capitalize ms-3">
                                                        {profissional.nome_profissional}
                                                    </h5>

                                                </div>

                                            </Card.Body>
                                            <Button className=" py-3 shadow rounded-pill" onClick={() => handleEventClick(profissional)}>Selecionar</Button>
                                        </Card>
                                    ))

                                )}







                            </Row>
                        </Container>
                    </ListGroup>


                </Col>

            </Row>
        </Container>
    )
}

export default Profissional