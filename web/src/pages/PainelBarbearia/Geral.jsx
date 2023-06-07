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
      <Container className="default-margin">
      <Row className="justify-content-center shadow rounded bg-white">
      <Col md={3} className="col-auto d-flex flex-column p-5 rounded bg-white">
          <PainelBarbearia />
          </Col>

          
          
          <Col md={9} className="p-5 border rounded bg-light">
          <div className="d-flex">
                            <MdBusinessCenter className="fs-2 text-secondary ms-1" />
                            <h3 className="fw-bold mb-5 text-secondary ms-3">Visão Geral</h3>
          </div>
            <img src={exBarber} className="logo rounded-circle" />
            <h3 className=" mt-3 fw-bold title">Mr Barba</h3>
            <p className="endereco mt-4"></p>
            <p className="endereco text-secondary">Av. Flores da Cunha 000, Gravataí, Rio Grande do Sul</p>

            <p>
              <AiOutlineInstagram className="fs-3"/> instagram.com/mrbarba
            </p>
            <p>
              <AiOutlineFacebook className="fs-3"/> facebook.com/mrbarba
            </p>
          </Col>
        </Row>
        
      </Container>
      <Footer />
    </>
  );
};

export default Geral;
