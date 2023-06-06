import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdBusinessCenter, MdDashboard } from "react-icons/md";
import { BsScissors } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillSchedule,
} from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";

import exBarber from "../../assets/img/exBarber.png";
import PainelBarbearia from "../../components/PainelBarbearia";

const Geral = () => {
  return (
    <>
      <Header />
      <Container className="mt-5 mb-3">
        <Row className="justify-content-center shadow">
          <Col md={3} className="border bg-light col-auto d-flex flex-column p-5">
            <PainelBarbearia />
          </Col>

          <Col md={9} className="p-5 border">
            <img src={exBarber} className="logo rounded-circle" />
            <h3 className=" mt-3 fw-bold title">Mr Barba</h3>
            <p className="endereco mt-4">Gravataí, Rio Grande do Sul</p>
            <p className="endereco text-secondary">Av. Flores da Cunha 000</p>

            <p>
              <AiOutlineInstagram />: instagram.com/mrbarba
            </p>
            <p>
              <AiOutlineFacebook />: facebook.com/mrbarba
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Geral;
