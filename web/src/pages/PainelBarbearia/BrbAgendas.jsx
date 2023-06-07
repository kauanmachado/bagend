import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import {
  MdBusinessCenter,
  MdFreeCancellation,
  MdDashboard,
} from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { BsScissors, BsClock } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import PainelBarbearia from "../../components/PainelBarbearia";
import { Card } from "react-bootstrap";

const BrbAgendas = () => {
  return (
    <>
      <Header />
      <Container className="default-margin">
        <Row className="justify-content-center shadow bg-white rounded">
          <Col
            md={3}
            className="rounded bg-light col-auto d-flex flex-column p-5 bg-white"
          >
            <PainelBarbearia />
          </Col>
          <Col md={9} className="rounded p-5 bg-light border">
            <div className="d-flex">
              <AiFillSchedule className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Agendas</h3>
            </div>
            <ListGroup horizontal variant="flush" className="d-flex">
              <Container>
                <Row>
                  <Card style={{ width: "18rem" }} className="border-0 shadow m-1 p-3">
                    <Card.Body>
                    <h5 className="fs-6">Kauan da Silva Machado</h5>
                    <hr></hr>
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

                  <Card style={{ width: "18rem" }} className="border-0 shadow m-1 p-3">
                    <Card.Body>
                    <h5 className="fs-6">Kauan da Silva Machado</h5>
                    <hr></hr>
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

                  <Card style={{ width: "18rem" }} className="border-0 shadow m-1 p-3">
                    <Card.Body>
                    <h5 className="fs-6">Kauan da Silva Machado</h5>
                    <hr></hr>
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
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BrbAgendas;
