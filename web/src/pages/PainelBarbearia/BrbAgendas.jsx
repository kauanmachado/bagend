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
import { MdBusinessCenter, MdFreeCancellation, MdDashboard  } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { BsScissors, BsClock } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti"
import PainelBarbearia from "../../components/PainelBarbearia";

const BrbAgendas = () => {
  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center shadow">
        <Col md={3} className="border bg-light col-auto d-flex flex-column p-5">
          <PainelBarbearia />
          </Col>
          <Col md={9} className="border p-5">
          <h3 className="fw-bold mb-5">Agendas</h3>
            <ListGroup horizontal variant="flush" className="d-flex">
            <Container>
            <Row>

              <ListGroup.Item className="p-3 rounded  mx-2 mb-3">
                <h5 className="fs-6">Kauan da Silva Machado</h5>
                <hr></hr>
                <h5 className="fw-bold fs-6">Corte degradê</h5>
                <h5 className="text-success fs-6">R$30,00</h5>
                <p className="fs-6"><BsClock className="fs-6 fw-bold"/> 18:00</p>
                <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 "><MdFreeCancellation/>Cancelar horário</Button>
              </ListGroup.Item>
              <ListGroup.Item className="p-3 rounded  mx-2 mb-3">
                <h5 className="fs-6">Kauan da Silva Machado</h5>
                <hr></hr>
                <h5 className="fw-bold fs-6">Corte degradê</h5>
                <h5 className="text-success fs-6">R$30,00</h5>
                <p className="fs-6"><BsClock className="fs-6 fw-bold"/> 18:00</p>
                <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 "><MdFreeCancellation/>Cancelar horário</Button>
              </ListGroup.Item>
              
              </Row>
              </Container>
            </ListGroup>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default BrbAgendas;
