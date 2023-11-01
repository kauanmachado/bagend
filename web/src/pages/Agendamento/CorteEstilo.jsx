import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, ListGroup, Modal, Row } from "react-bootstrap"
import { BsScissors } from "react-icons/bs"
import { MdOutlineArrowBackIos } from "react-icons/md"
import { Link, useParams } from "react-router-dom"

const CorteEstilo = ({ onPrev, onNext, updateCorteEstilo }) => {

    const [showModal, setShowModal] = useState(false)
    const [selectedCorteEstilo, setSelectedCorteEstilo] = useState(null);

    const apiUrl = "http://localhost:8001"
    const [data, setData] = useState({ cortesestilos: [] })
    const { id } = useParams()

    const handleEventClick = (corteEstilo) => {
        setSelectedCorteEstilo(corteEstilo)
        setShowModal(true)
        updateCorteEstilo(corteEstilo)
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
        fetchBarbearia()
    }, [])

    return (
        <Container className="default-margin">
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Detalhes do Corte ou Estilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCorteEstilo && (
                        <div>
                            <h5 className="fw-bold fs-6 text-uppercase">{selectedCorteEstilo.nome_corte}</h5>
                            <h5 className="text-success fs-5 fw-bold">R${selectedCorteEstilo.preco}</h5>
                            <p>Tempo estimado: {selectedCorteEstilo.tempo_estimado} Minutos</p>
                            
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button className="rounded-pill px-3" onClick={onNext}>
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
                  />Voltar para horários</Button>
                    
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

                                {Array.isArray(data.cortesestilos) && data.cortesestilos.length === 0 ? (
                                    <h5 className="text-muted mt-4 p-0">Não há nenhum corte ou estilo registrado.</h5>
                                ) : (
                                    data.cortesestilos.map((corteEstilo) => (
                                        <Card
                                            style={{ width: "18rem" }}
                                            className="border-0 shadow m-1 p-3"
                                            key={corteEstilo.id}
                                            
                                        >
                                            <Card.Body>
                                                <h5 className="fw-bold fs-6 text-uppercase">
                                                    {corteEstilo.nome_corte}
                                                </h5>
                                                <h5 className="text-success fs-5 fw-bold">R${corteEstilo.preco}</h5>
                                                <p className="">Tempo estimado: {corteEstilo.tempo_estimado} Minutos</p>
                                            </Card.Body>
                                            <Button className=" py-3 shadow rounded-pill" onClick={() => handleEventClick(corteEstilo)}>Selecionar</Button>
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

export default CorteEstilo