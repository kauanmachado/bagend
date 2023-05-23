import Header from "../components/header/Header";
import "../styles/perfilcliente.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import userPhoto from "../assets/img/userfoto.png";
import { BsPersonFillGear } from "react-icons/bs";

const PerfilCliente = () => {

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={1}>
            <img src={userPhoto} className="userPhoto float-xl-end"></img>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mt-2">Kauan da Silva Machado</h5>
            <span className="text-secondary">Gravataí, RS</span>
          </Col>
          <Col md={2}>
            <Button variant="btn shadow rounded-pill float-xl-end text-white mx-1">
              <BsPersonFillGear />
              Editar
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={4} className="text-center px-5">
            <Link to="/perfil-barbearia" id="linksPerfil" className="py-1">
              Seguindo
            </Link>
            <Link
              to="/perfil-barbearia/avaliacoes"
              id="linksPerfil"
              className="py-1 ms-5"
            >
              Salvos
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
  
    
          </Col>
        </Row>
      </Container>
    </>
  );
};


    
  


export default PerfilCliente;
