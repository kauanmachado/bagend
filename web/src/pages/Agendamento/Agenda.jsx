import { Button, Card, Col, Container, ListGroup, Modal, Row, Toast } from "react-bootstrap";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../components/footer/Footer";
import DataHorario from "./DataHorario";
import CorteEstilo from "./CorteEstilo";
import Profissional from "./Profissional";
import HeaderCliente from "../../components/HeaderCliente";
import { BsClockHistory, BsScissors } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBRLocale from '@fullcalendar/core/locales/pt-br';
import jwt_decode from "jwt-decode"
import { ImUserTie } from "react-icons/im";
import Cookies from "js-cookie";
import { RiCheckboxCircleFill, RiErrorWarningFill } from "react-icons/ri";
import ScrollToTop from "../../components/ScrollToTop";

const Agenda = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const idCliente = decodedToken.id
  const apiUrl = "http://localhost:8001"
  const [eventsForFullCalendar, setEventsForFullCalendar] = useState([])
  const [data, setData] = useState({ cortesestilos: [] })
  const [profissionais, setProfissionais] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCorteEstilo, setSelectedCorteEstilo] = useState(null);
  const [selectedProfissional, setSelectedProfissional] = useState(null);
  const [toastCheck, setToastCheck] = useState(false)
  const [toastErro, setToastErro] = useState(false)

  

  const handleEventClick = (event) => {
    setSelectedEvent(event)
  }


  const exibirToastCheck = () => {
    setToastCheck(true)

    setTimeout(() => {
      setToastCheck(false)
    }, 3000)
  }

  const exibirToastErro = () => {
    setToastErro(true)

    setTimeout(() => {
      setToastErro(false)
    }, 3000)
  }
  

  const handleConfirmAgendamento = async () => {

    if (!selectedEvent || !selectedCorteEstilo || !selectedProfissional) {
      exibirToastErro()
      ScrollToTop()
    } 
    try {
    const res = await axios.post(`${apiUrl}/agendar`, {
      id_cliente: idCliente,
      id_barbearia: id,
      id_datahorario: selectedEvent.id,
      id_corteestilo: selectedCorteEstilo.id,
      id_profissional: selectedProfissional.id,
    })
    exibirToastCheck()
    ScrollToTop()
    setTimeout(() => {
      navigate(`../painel-cliente/agendas/${idCliente}`);
    }, 3000);
    console.log(res)
  } catch (error) {
    console.error(error)
  }
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
    <>
      <HeaderCliente />
      <Container className="default-margin">
        <Row className="justify-content-center">
        <Toast
            show={toastErro}
            onClose={() => setToastErro(false)}
            className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-danger text-white w-auto"
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Todas as informações devem ser preenchidas!
            </Toast.Body>
          </Toast>
        <Toast
            show={toastCheck}
            onClose={() => setToastCheck(false)}
            className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-success text-white"
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              Agendamento realizado com sucesso!
              Mais detalhes estão disponíveis no painel.
            </Toast.Body>
          </Toast>
          <Container className="default-margin">

            <Row className="d-flex justify-content-center">
              <Col md={9} className=" p-5 shadow rounded">
                <Button className="float-end btn-prev text-dark fw-bold fs-6 rounded-pill" >
                  <MdOutlineArrowBackIos
                    style={{ fontSize: 15 }}
                    className="me-2"
                  />Voltar para o mapa de barbearias</Button>

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
                {/* Passo 1 - Data Horario */}
                <div className="d-flex mt-5">
                  <BsClockHistory className="fs-2 text-secondary ms-1" />
                  <h3 className="fw-bold mb-4 text-secondary ms-3">Horários Disponíveis</h3>
                </div>
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  locale={ptBRLocale}
                  events={eventsForFullCalendar}
                  eventContent={eventContent} />
                <hr></hr>
                <div className="d-flex mt-5 mb-4">
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
                            <Button className="btnEsc py-3 shadow rounded-pill" onClick={() => {
                              setSelectedCorteEstilo(corteEstilo)
                            }}>Selecionar</Button>
                          </Card>
                        ))
                      )}
                    </Row>
                  </Container>
                </ListGroup>
                <hr></hr>
                <div className="d-flex mt-5 mb-4">
                  <ImUserTie className="fs-2 text-secondary ms-1" />
                  <h3 className="fw-bold mb-3 text-secondary ms-3">Profissional</h3>
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

                            </Card.Body><Button className="btnEsc py-3 shadow rounded-pill" onClick={() => setSelectedProfissional(profissional)}>Selecionar</Button>

                          </Card>
                        ))
                      )}
                    </Row>
                  </Container>
                </ListGroup>
                <hr></hr>
                <h2 className="fw-bold mt-4 mb-5">Detalhes do agendamento</h2>
                <h5 className="fw-bold me-2 mb-4"><BsClockHistory className="fs-2 text-secondary me-2" />{selectedEvent?.title}</h5>
                <h5 className="fw-bold me-2 mb-4"><BsScissors className="fs-2 text-secondary me-2" />{selectedCorteEstilo?.nome_corte} - <span className="text-success">R${selectedCorteEstilo?.preco}</span></h5>
                <h5 className="fw-bold me-2 mb-4"><ImUserTie className="fs-2 text-secondary me-2" />{selectedProfissional?.nome_profissional}</h5>
                <Button className="mt-4 px-4 py-3 shadow rounded-pill" onClick={handleConfirmAgendamento}>Confirmar agendamento</Button>










              </Col>

            </Row>
          </Container>





        </Row>
      </Container>

      <Footer />

    </>
  )
}


export default Agenda;
