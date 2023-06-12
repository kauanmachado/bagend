import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import HeaderClienteLogado from "../../components/HeaderClienteLogado";
import Cookies from "js-cookie";
import PainelCliente from "../../components/PainelCliente";
import { Card, Table } from "react-bootstrap";
import { AiFillSchedule } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { MdFreeCancellation } from "react-icons/md";

const CliAgendas = () => {
  const navigate = useNavigate();
  const Autenticado = Cookies.get("token");

  return (
    <>
      {Autenticado ? <HeaderClienteLogado /> : <Header />}
      <Container className="default-margin">
        <Row className="rounded shadow bg-white">
          <Col
            md={3}
            className="rounded bg-white col-auto d-flex flex-column p-5"
          >
            <PainelCliente />
          </Col>

          <Col md={9} className="border rounded bg-light p-5">
          <div className="d-flex">
              <AiFillSchedule className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Agendas</h3>
            </div>
          
              <Container>
                <Row className="d-flex justify-content-start">
                <Card style={{ width: "18rem" }} className="border-0 shadow m-1 p-3">
                    <Card.Body>
                    <h5 className="fw-bold fs-6">Corte degradê</h5>
                    <h5 className="text-success fs-6">R$30,00</h5>
                    <p className="fs-6">
                      <BsClock className="fs-6 fw-bold" /> 18:00 - 02/07/23
                    </p>
                    <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 w-100">
                      <MdFreeCancellation />
                      Cancelar horário
                    </Button>
                    </Card.Body>
                  </Card>

                  
                </Row>
              </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CliAgendas;
