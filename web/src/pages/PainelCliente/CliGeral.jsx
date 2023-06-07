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

  const Autenticado = Cookies.get('token')

  return (
    <>
    
    {Autenticado ? <HeaderClienteLogado /> : <Header/>}
      <Container className="default-margin">
        <Row className="shadow">
          <Col md={3} className=" border bg-light col-auto d-flex flex-column p-5">
          <PainelCliente />
          </Col>
          <Col md={9} className=" border p-5">
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
