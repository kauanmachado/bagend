import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import {
  MdBusinessCenter,
  MdFreeCancellation,
  MdDashboard,
} from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { BsScissors, BsClock } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import PainelBarbearia from "../../components/PainelBarbearia";
import { Card } from "react-bootstrap";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"
import axios from "axios";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBRLocale from '@fullcalendar/core/locales/pt-br';

const BrbAgendas = () => {

  const [data, setData] = useState([]);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  // console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"


  useEffect(() => {
    async function fetchData() {
        try {
          const res = await axios.get(`${apiUrl}/painel-barbearia/${id}`, {
            withCredentials: true
          })
           setData(data)
           console.log(data)
        } catch(error){
          console.error('Erro ao buscar dados da API:', error)
        }
    }
    fetchData()
  }, [])

  

    const handleEventoClicado = (info) => {
      // A função que será chamada quando um evento for clicado
      console.log('Evento clicado:', info.event.title);
    };
  

  return (
    <>
      <HeaderBarbearia />
      <Container className="default-margin">
        <Row className="justify-content-center shadow bg-white rounded">
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
                 locale={ptBRLocale}/>
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
