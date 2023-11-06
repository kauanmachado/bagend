import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { AiFillSchedule } from "react-icons/ai";
import PainelBarbearia from "../../components/PainelBarbearia";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"
import { Modal, Toast } from "react-bootstrap";
import axios from "axios";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBRLocale from '@fullcalendar/core/locales/pt-br';
import { RiCheckboxCircleFill } from "react-icons/ri";
import ScrollToTop from "../../components/ScrollToTop";

const BrbAgendas = () => {

  const [events, setEvents] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedAgenda, setSelectedAgenda] = useState(null)
  const [canceledAgenda, setCanceledAgenda] = useState(null)
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  // console.log(decodedToken)
  const idBarbearia = decodedToken.id
  const apiUrl = "http://localhost:8001"
  const [toastCheck, setToastCheck] = useState(false);

  const exibirToastCheck = () => {
    setToastCheck(true)

    setTimeout(() => {
      window.location.reload()
      setToastCheck(false)
    }, 3000)
  }


  useEffect(() => {
    async function fetchAgendas() {
      try {
        const res = await axios.get(`${apiUrl}/painel-barbearia/agendas/${idBarbearia}`, {
          withCredentials: true
        })

        

        const agendas = res.data
        if (!agendas || agendas.length === 0) {
          return
        }

        const formattedEvents = agendas.map((agenda) => {
          return {
            title: `${agenda.datahorario.horario} - ${agenda.cliente.nome_completo} `,
            start: agenda.datahorario.dataHorario,
            agenda: agenda
          }
        })

        setEvents(formattedEvents)


      } catch (error) {
        console.error(error)
      }
    }
    fetchAgendas()
  }, [canceledAgenda])

  const handleEventClick = (info) => {
    setSelectedAgenda(info.event.extendedProps.agenda)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setSelectedAgenda(null)
    setShowModal(false)
  }

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
          <Modal.Title className="fw-bold">Detalhes da Agenda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAgenda && (
            <>
              <p className="fw-bold">{selectedAgenda.corteestilo.nome_corte}</p>
              <p className="fw-bold text-success">R${selectedAgenda.corteestilo.preco}</p>
              <p><strong>Tempo estimado: </strong>{selectedAgenda.corteestilo.tempo_estimado} minutos</p>
              <p><strong>Profissional: </strong> {selectedAgenda.profissional.nome_profissional}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button variant="danger" onClick={() => handleCancelarAgenda(selectedAgenda.id)}>
            Cancelar horário
          </Button>
        </Modal.Footer>
      </Modal>

      <HeaderBarbearia />
      <Container className="default-margin">
        <Row className="justify-content-center shadow bg-white rounded">
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
          <Col
            md={3}
            className="rounded bg-light col-auto d-flex flex-column p-5 bg-white"
          >
            <PainelBarbearia />
          </Col>
          <Col md={9} className="rounded p-5 bg-light border">
            <div className="d-flex">
              <AiFillSchedule className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Agendas</h3>
            </div>

            <Container>
              <Row>

                <FullCalendar
                  className="p-0"
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  locale={ptBRLocale}
                  events={events}
                  eventTextColor="dark"
                  eventClick={handleEventClick} />
              </Row>
            </Container>

          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BrbAgendas;
