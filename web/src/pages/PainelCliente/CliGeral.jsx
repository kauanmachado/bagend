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
import PainelCliente from "../../components/PainelCliente.jsx";

const CliGeral = () => {
  const Autenticado = Cookies.get("token");

  return (
    <>
      {Autenticado ? <HeaderClienteLogado /> : <Header />}
      <Container className="default-margin">
        <Row className="shadow rounded bg-white">
          <Col
            md={3}
            className="bg-white rounded col-auto d-flex flex-column p-5"
          >
            <PainelCliente />
          </Col>
          <Col md={9} className="p-5 rounded border bg-light">
            <div className="d-flex">
              <MdPerson className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Visão Geral</h3>
            </div>
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
      <Footer />
    </>
  );
};

export default CliGeral;
