import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import {
  MdCoPresent,
  MdFreeCancellation
} from "react-icons/md";
import { BsClock } from "react-icons/bs"
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";

const CliAgendas = () => {
  return (
    <>
      <Header />
      <Container className="mt-5 mb-3">
        <div>
          <h4 className="text-center fw-bold">
            Bem vindo, <strong className="text-primary">Kauan Machado!</strong>
          </h4>
          <hr></hr>
        </div>
        <Row className="justify-content-center">
          <Col md={3} className="mb-5">
            <Navbar expand="lg">
              <Navbar.Toggle
                aria-controls="navbarScroll"
                className="w-100 navtoggle"
              >
                <TiThMenu className=" float-start thmenu text-dark" />
              </Navbar.Toggle>
              <Navbar.Collapse id="navbarScroll" className="">
                <ListGroup className="shadow w-100">
                  <Link to="../painel-cliente">
                    <ListGroup.Item className="list-group-item-action rounded-top ">
                      <MdCoPresent className="mb-1  me-2 fs-5" />
                      Geral
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-cliente/agendas">
                    <ListGroup.Item className="list-group-item-action bg-item text-light ">
                      <FaUserCheck className="mb-1  me-2 fs-5" />
                      Agendas
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-cliente/alterar-dados">
                    <ListGroup.Item className="list-group-item-action">
                      <RiEditBoxFill className="mb-1  me-2 fs-5" />
                      Alterar dados
                    </ListGroup.Item>
                  </Link>
                  <Link to="/">
                    <ListGroup.Item className="list-group-item-action rounded-bottom">
                      <IoLogOutOutline className="mb-1  me-2 fs-5" />
                      Sair
                    </ListGroup.Item>
                  </Link>
                </ListGroup>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col md={8} className="ms-5  ms-md-0 mt-2">
          <ListGroup horizontal variant="flush" className="d-flex">
            <Container>
            <Row>

              <ListGroup.Item className="p-3 rounded shadow mx-2 mb-3 col-5">
                <h5 className="fs-6">Mr Barba</h5>
                <hr></hr>
                <h5 className="fw-bold fs-6">Corte degradê</h5>
                <h5 className="text-success fs-6">R$30,00</h5>
                <p className="fs-6">Tempo estimado: 15 minutos</p>
                <p className="fs-6"><BsClock className="fs-6 fw-bold"/> 18:00</p>
                <Button variant="primary px-4 py-2 agendar shadow rounded mt-3 "><MdFreeCancellation/>Cancelar horário</Button>
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

export default CliAgendas;
