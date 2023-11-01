import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBRLocale from '@fullcalendar/core/locales/pt-br';
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import { BsCalendar2Date, BsClockHistory } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const DataHorario = ({ onNext, updateDataHorario }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const apiUrl = "http://localhost:8001"
  const [selectedEvent, setSelectedEvent] = useState(null)

  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState({ horarios: [] })
  const [eventsForFullCalendar, setEventsForFullCalendar] = useState([])

  const handleEventClick = (event) => {
    setSelectedEvent(event)
    setShowModal(true)
    updateDataHorario(event)
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
        const eventos = barbearia.horarios.map((horario) => {
          return mapEventToFullCalendarFormat({
            id: horario.id,
            horario: horario.horario,
            dataHorario: horario.dataHorario,
          })
        })
        setEventsForFullCalendar(eventos)
      }
      catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }

    fetchBarbearia()
  }, [])
  const mapEventToFullCalendarFormat = (event) => {
    return {
      id: event.id,
      title: event.horario,
      start: event.dataHorario,
      end: event.dataHorario,
    }
  }



  const eventContent = (arg) => {
    return <div onClick={() => handleEventClick(arg.event)} style={{ cursor: 'pointer' }} className="fw-bold text-dark fs-6">{arg.event.title}</div>;
  }


  return (
    <Container className="default-margin">
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
            <BsClockHistory className="fs-2 text-secondary ms-1" />
            <h3 className="fw-bold mb-5 text-secondary ms-3">Horários Disponíveis</h3>
          </div>

          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale={ptBRLocale}
            events={eventsForFullCalendar}
            eventContent={eventContent} />

        </Col>

      </Row>
    </Container>


  )
}

export default DataHorario