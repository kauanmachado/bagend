import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import {
  MdCoPresent,
  MdPerson,
  MdOutlineAlternateEmail,
  MdPersonPinCircle,
} from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";
import exBarber from "../../assets/img/exBarber.png";
import HeaderClienteLogado from "../../components/HeaderClienteLogado";
import Cookies from "js-cookie";

const CliGeral = () => {

  const Autenticado = Cookies.get('token')

  return (
    <>
      {Autenticado ? <HeaderClienteLogado /> : <Header/>}
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
                    <ListGroup.Item className="list-group-item-action bg-item text-light rounded-top ">
                      <MdCoPresent className="mb-1  me-2 fs-5" />
                      Geral
                    </ListGroup.Item>
                  </Link>
                  <Link to="agendas">
                    <ListGroup.Item className="list-group-item-action">
                      <FaUserCheck className="mb-1  me-2 fs-5" />
                      Agendas
                    </ListGroup.Item>
                  </Link>
                  <Link to="alterar-dados">
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
            <h5 className="fw-bold">Informações gerais</h5>
            <hr></hr>
            <p>
              <MdPerson /> Kauan Machado
            </p>
            <p>
              <MdOutlineAlternateEmail /> kauan.smachado0@gmail.com
            </p>
            <p>
              <MdPersonPinCircle /> Rua flor de lótus 334 | Gravataí
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CliGeral;
