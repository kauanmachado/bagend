import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import {
  MdBusinessCenter,
  MdFreeCancellation,
  MdDashboard,
} from "react-icons/md";
import { AiFillSchedule, AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { BsScissors } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import PainelBarbearia from "../../components/PainelBarbearia";
import { Card } from "react-bootstrap";

const CortesEstilos = () => {
  return (
    <>
      <Header />
      <Container className="default-margin">
        <Row className="justify-content-center shadow rounded bg-white">
          <Col
            md={3}
            className="bg-light col-auto d-flex flex-column p-5 rounded bg-white"
          >
            <PainelBarbearia />
          </Col>

          <Col md={9} className="border p-5 rounded bg-light">
            <div className="d-flex">
              <BsScissors className="fs-2 text-secondary" />
              <h3 className="fw-bold text-secondary ms-3 mb-5">
                Cortes e Estilos
              </h3>
            </div>
            <Link to="./adicionar-corteestilo">
              <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 ">
                <AiOutlinePlus />
                Adicionar
              </Button>
            </Link>
            <ListGroup horizontal variant="flush" className="mt-3 d-flex">
              <Container>
                <Row>
                  <Card
                    style={{ width: "18rem" }}
                    className="border-0 shadow m-1 p-3"
                  >
                    <Card.Body>
                      <h5 className="fw-bold fs-6 text-uppercase">
                        Corte degradê
                      </h5>
                      <h5 className="text-success fs-6">R$30,00</h5>
                      <p className="">Tempo estimado: 30 minutos</p>
                      <Button className="bg-danger px-4 py-2 btnRed shadow rounded-pill w-100 mt-3 mb-1">
                        <MdFreeCancellation />
                        Remover
                      </Button>
                      <Button className="bg-dark px-4 py-2  btnDark shadow rounded-pill w-100">
                        <AiOutlineEdit />
                        Alterar
                      </Button>
                    </Card.Body>
                  </Card>

                  <Card
                    style={{ width: "18rem" }}
                    className="border-0 shadow m-1 p-3"
                  >
                    <Card.Body>
                      <h5 className="fw-bold fs-6 text-uppercase">
                        Corte degradê
                      </h5>
                      <h5 className="text-success fs-6">R$30,00</h5>
                      <p className="">Tempo estimado: 30 minutos</p>
                      <Button className="bg-danger px-4 py-2 btnRed shadow rounded-pill w-100 mt-3 mb-1">
                        <MdFreeCancellation />
                        Remover
                      </Button>
                      <Button className="bg-dark px-4 py-2  btnDark shadow rounded-pill w-100">
                        <AiOutlineEdit />
                        Alterar
                      </Button>
                    </Card.Body>
                  </Card>

                  <Card
                    style={{ width: "18rem" }}
                    className="border-0 shadow m-1 p-3"
                  >
                    <Card.Body>
                      <h5 className="fw-bold fs-6 text-uppercase">
                        Corte degradê
                      </h5>
                      <h5 className="text-success fs-6">R$30,00</h5>
                      <p className="">Tempo estimado: 30 minutos</p>
                      <Button className="bg-danger px-4 py-2 btnRed shadow rounded-pill w-100 mt-3 mb-1">
                        <MdFreeCancellation />
                        Remover
                      </Button>
                      <Button className="bg-dark px-4 py-2  btnDark shadow rounded-pill w-100">
                        <AiOutlineEdit />
                        Alterar
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

export default CortesEstilos;
