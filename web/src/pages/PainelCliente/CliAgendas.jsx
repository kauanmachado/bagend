import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import HeaderClienteLogado from "../../components/HeaderCliente";
import Cookies from "js-cookie";
import PainelCliente from "../../components/PainelCliente";
import { Card, Modal, Table, Toast } from "react-bootstrap";
import { AiFillSchedule } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdFreeCancellation } from "react-icons/md";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode"
import ScrollToTop from "../../components/ScrollToTop";
import { RiCheckboxCircleFill } from "react-icons/ri";

const CliAgendas = () => {

  const [agendas, setAgendas] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedAgenda, setSelectedAgenda] = useState(null)
  const [canceledAgenda, setCanceledAgenda] = useState(null)
  const [toastCheck, setToastCheck] = useState(false)
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const idCliente = decodedToken.id
  const apiUrl = "http://localhost:8001"

  const exibirToastCheck = () => {
    setToastCheck(true)

    setTimeout(() => {
      window.location.reload()
      setToastCheck(false)
    }, 3000)
  }
  
  const handleEventClick = (agenda) => {
    setSelectedAgenda(agenda)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setSelectedAgenda(null)
    setShowModal(false)
  }

  useEffect(() => {
    async function fetchAgendas() {
      try {
        const res = await axios.get(`http://localhost:8001/painel-cliente/agendas/${idCliente}`, {
          withCredentials: true 
        })
        setAgendas(res.data)
        
      } catch (error) {
        console.error(error)
      }
    }

    fetchAgendas()
  }, [canceledAgenda])

  const handleCancelarAgenda = async (idAgenda) => {
    try {
      await axios.delete(`${apiUrl}/painel-barbearia/agendas/${idAgenda}`)
      setCanceledAgenda(idAgenda)
      setShowModal(false)
      ScrollToTop()
      exibirToastCheck()

    } catch (error) {
      console.error('Erro ao cancelar agenda:', error)
    }
  }

  return (
    <>
    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Cancelar agenda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAgenda && (
            <div>
              <h4 className="fw-bold fs-6">{selectedAgenda.barbearia.nome_barbearia}</h4>
              <hr />
              <h4 className="fw-bold fs-6">{selectedAgenda.corteestilo.nome_corte}</h4>
              <h5 className="text-success fs-6 fw-bold">{`R$${selectedAgenda.corteestilo.preco}`}</h5>
              <p className="fs-6 fw-bold">
                {format(new Date(selectedAgenda.datahorario.dataHorario), "dd/MM/yyyy - HH:mm")}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button variant="danger" onClick={() => handleCancelarAgenda(selectedAgenda.id)}>
            Confirmar cancelamento
          </Button>
        </Modal.Footer>
      </Modal>
      <HeaderClienteLogado />
      <Container className="default-margin">
        <Row className="rounded shadow bg-white">
        <Toast
            show={toastCheck}
            onClose={() => setToastCheck(false)}
            className="position-absolute top-0 start-50 translate-middle-x toastEmail bg-success text-white mt-5"
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              Agenda cancelada com sucesso!
            </Toast.Body>
          </Toast>
          <Col md={3} className="rounded bg-white col-auto d-flex flex-column p-5">
            <PainelCliente />
          </Col>
          <Col md={9} className="border rounded bg-light p-5">
            <div className="d-flex">
              <AiFillSchedule className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Agendas</h3>
            </div>

            <Container>
              <Row className="d-flex justify-content-start">
                {agendas.length === 0 ? (
                  <h5 className="text-muted">Não há agendas disponíveis.</h5>
                ) : (
                  // Mapeie e renderize as agendas
                  agendas.map((agenda) => (
                    <Card key={agenda.id} style={{ width: '18rem' }} className="border-0 shadow m-1 p-3">
                      <Card.Body>
                      <h4 className="fw-bold fs-6">{agenda.barbearia.nome_barbearia}</h4>
                        <hr></hr>
                        <h4 className="fw-bold fs-6">{agenda.corteestilo.nome_corte}</h4>
                        <h5 className="text-success fs-6 fw-bold">{`R$${agenda.corteestilo.preco}`}</h5>
                        <p className="fs-6 fw-bold">
                         {format(new Date(agenda.datahorario.dataHorario), "dd/MM/yyyy - HH:mm")}
                        </p>
                        <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 w-100" onClick={() => handleEventClick(agenda)}>
                          <MdFreeCancellation />
                          Cancelar horário
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default CliAgendas;