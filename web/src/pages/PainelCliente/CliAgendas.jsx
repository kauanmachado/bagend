import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { MdCoPresent, MdFreeCancellation } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";
import HeaderClienteLogado from "../../components/HeaderClienteLogado";
import Cookies from "js-cookie";
import PainelCliente from "../../components/PainelCliente";
import { Card, Table } from "react-bootstrap";

const CliAgendas = () => {
  const navigate = useNavigate();
  const Autenticado = Cookies.get("token");

  return (
    <>
      {Autenticado ? <HeaderClienteLogado /> : <Header />}
      <Container className="default-margin">
        <Row className=" shadow">
          <Col
            md={3}
            className="border bg-light col-auto d-flex flex-column p-5"
          >
            <PainelCliente />
          </Col>

          <Col md={9} className="border p-5">
            <h3 className="fw-bold mb-5">Agendas</h3>
            <ListGroup horizontal variant="flush" className="d-flex">
              <Container>
                <Row className="d-flex justify-content-start">
                  <Card className="border mx-4">
                    <Card.Body className="p-4">
                      <Card.Title className="fw-bold mb-3">Mr Barba</Card.Title>
                      <hr className="text-secondary" />
                      <p>Corte degradê</p>
                      <p>12h00 - 29/07/23</p>
                      <p className="text-success">R$30,00</p>
                      <Link to="/" className="fw-bold text-danger">
                      <Button className=" px-4 py-2  shadow rounded-pill">Cancelar horário</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  <Card className="border mx-4">
                    <Card.Body className="p-4">
                      <Card.Title className="fw-bold mb-3">Mr Barba</Card.Title>
                      <hr className="text-secondary" />
                      <p>Corte degradê</p>
                      <p>12h00 - 29/07/23</p>
                      <p className="text-success">R$30,00</p>
                      <Link to="/" className="fw-bold text-danger">
                      <Button className=" px-4 py-2  shadow rounded-pill">Cancelar horário</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  <Card className="border mx-4">
                    <Card.Body className="p-4">
                      <Card.Title className="fw-bold mb-3">Mr Barba</Card.Title>
                      <hr className="text-secondary" />
                      <p>Corte degradê</p>
                      <p>12h00 - 29/07/23</p>
                      <p className="text-success">R$30,00</p>
                      <Link to="/" className="fw-bold text-danger">
                      <Button className=" px-4 py-2  shadow rounded-pill">Cancelar horário</Button>
                      </Link>
                    </Card.Body>
                  </Card>

                  
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
