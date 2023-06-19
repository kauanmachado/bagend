import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import exBarber from "../assets/img/exBarber.png";
import {
  AiFillStar,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const PerfilBarbearia = () => {
  return (
    <>
      <Header />
      <Container className="default-margin">
        <Row className="justify-content-center">
          <Col md={6} className="shadow rounded p-5">
          <Link
                  to="../barbearias"
                  id="linkBack"
                  className="me-5 py-1 fw-bold text-dark"
                >
                  <MdOutlineArrowBackIos
                    style={{ fontSize: 15 }}
                    className="me-2"
                  />
                  Voltar para navegação
                </Link>
            <div className="d-flex align-items-center mt-5">
              <img
                src={exBarber}
                width="120"
                height="120"
                className="rounded-circle me-2"
              />
              <div className="ms-3">
                <h5 className="fw-bold">Mr Barba</h5>
                <p className="endereco text-secondary">
                  Av. Flores da Cunha 000, Gravataí, Rio Grande do Sul
                </p>
                <p className="text-secondary">(51)98000-0000</p>
                <div className="d-flex mt-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>

            <div className="d-flex ms-4 mt-2">
              <AiOutlineInstagram className="fs-3 ms-4" />

            </div>
            
            <Button className="primary  py-2 agendar shadow rounded-pill ms-3 mt-5 float-end">
            <BsBookmark className="fs-5 m-0"/>
            </Button>
            <Link to="/agenda">
            <Button className="primary px-4 py-2 agendar shadow rounded-pill ms-3 mt-5 float-end">
              Marcar horário
            </Button>
            </Link>
            <Link to="/perfil-barbearia/avaliar">
            <Button className="bg-white px-4 py-2 agendar shadow rounded-pill ms-3 mt-5 float-end text-primary">
              Fazer avaliação
            </Button>
            </Link>
            
            
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default PerfilBarbearia;
