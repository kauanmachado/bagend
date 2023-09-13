import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';
import logoBranca from "../../assets/img/logo2.png";

const Footer = () => {
  return (
    <>
      <footer className="shadow">
        <Container fluid className="bg-dark shadow ">
        <Container className="p-5 bg-dark">
          <Row className="justify-content-center">
            <Col md={6}>
              <img src={logoBranca} className="logo"/>
              <p className="text-white mt-3">Desenvolvido e mantido por <p className="fw-bold text-white">Kauan da Silva Machado</p></p>
            </Col>
            <Col md={4} className="">
            <h4 className="text-white">Links</h4>
          <ul className="list-unstyled ">
            <li>
              <a href="/" className="text-decoration-none">Página Inicial</a>
            </li>
            <li>
              <a href="/barbearias" className="text-decoration-none">Procurar Barbearias</a>
            </li>
            <li>
              <a href="/login-cliente" className="text-decoration-none">Acessar conta</a>
            </li>
          </ul>
            </Col>
            {/* <Col md={2}>
              <BsLinkedin className="text-white me-3"/>
              <BsGithub className="text-white"/>
            </Col> */}
            <Col>
            
            </Col>
          </Row>
        </Container>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
