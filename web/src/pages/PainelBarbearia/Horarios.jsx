import { Button, Card, Col, Container, Modal, Row, Table } from "react-bootstrap";
import Header from "../../components/header/Header";
import PainelBarbearia from "../../components/PainelBarbearia";
import { MdOutlineForum } from "react-icons/md";
import Footer from "../../components/footer/Footer";
import profileEx from "../../assets/img/profileExample.jpg";
import { AiFillStar } from "react-icons/ai";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode"
import { BsClockHistory } from "react-icons/bs";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBRLocale from '@fullcalendar/core/locales/pt-br';

const Horarios = () => {

  const [selectedEvent, setSelectedEvent] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [eventsForFullCalendar, setEventsForFullCalendar] = useState([])
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"

  const mapEventToFullCalendarFormat = (event) => {
    return {
      id: event.id,
      title: event.horario,
      start: event.dataHorario,
      end: event.dataHorario,
    };
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setShowModal(true)
  }


  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${apiUrl}/painel-barbearia/${id}/horarios`,
        {

          withCredentials: true
        })
        if (res.data && res.data.length > 0) {
          const eventos = res.data.map(mapEventToFullCalendarFormat)
          setEventsForFullCalendar(eventos)
        }
       
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }
    fetchData()
  }, [])

  const handleRemoverHorario = async (id) => {
    try {
      await axios.delete(`${apiUrl}/painel-barbearia/${id}/remover-horario/${id}`)
      setShowModal(false)
      window.location.reload()
    } catch (error) {
      console.error('Erro ao excluir o horario:', error);
    }
  }

  const eventContent = (arg) => {
    return <div onClick={() => handleEventClick(arg.event)} style={{ cursor: 'pointer' }} className="fw-bold text-dark fs-6">{arg.event.title}</div>;
  }

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Detalhes do Horário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && (
            <div>
              
              <p><strong>Horário: </strong>{selectedEvent.title}</p>
              <p><strong>Data:</strong> {selectedEvent.start.toLocaleString()}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
        <Button className="bg-danger" onClick={() => handleRemoverHorario(selectedEvent.id)}>
            Remover horário
          </Button>
          <Button  onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <HeaderBarbearia />
      <Container className="default-margin">
        <Row className="justify-content-center shadow rounded bg-white">
          <Col
            md={3}
            className="col-auto d-flex flex-column p-5 rounded bg-white"
          >
            <PainelBarbearia />
          </Col>

          <Col md={9} className="p-5 border rounded bg-light">
            <div className="d-flex">
              <BsClockHistory className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Horários Disponíveis</h3>
            </div>
            <div>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale={ptBRLocale}
                events={eventsForFullCalendar}
                eventContent={eventContent}
              />
            </div>
            <Link to="./adicionar-horarios">
              <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 mb-5" type="submit">
                <HiOutlinePlusSm />
                Adicionar Horário
              </Button>
            </Link>


          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Horarios;
