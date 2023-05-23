import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdBusinessCenter, MdAttachMoney, MdDashboard } from "react-icons/md";
import { AiFillSchedule, AiOutlineSchedule } from "react-icons/ai";
import { BsScissors } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container className="mt-5 mb-3">
        <div>
          <h4 className="text-center fw-bold">
            Bem vindo, <strong className="text-primary">Mr Barba!</strong>
          </h4>
          <hr></hr>
        </div>
        <Row className="justify-content-center">
          <Col md={3} className="mb-5">
            <Navbar expand="lg">
              <Navbar.Toggle
                aria-controls="navbarScroll"
                className="w-100 navtoggle"
              >
                <TiThMenu className=" float-start thmenu text-dark" />
              </Navbar.Toggle>
              <Navbar.Collapse id="navbarScroll" className="">
                <ListGroup className="shadow">
                  <Link to="../painel-barbearia">
                    <ListGroup.Item className="list-group-item-action  rounded-top ">
                      <MdBusinessCenter className="mb-1  me-2 fs-5" />
                      Geral
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-barbearia/agendas">
                    <ListGroup.Item className="list-group-item-action">
                      <AiFillSchedule className="mb-1  me-2 fs-5" />
                      Agendas
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-barbearia/dashboard">
                    <ListGroup.Item className="list-group-item-action bg-item text-light">
                      <MdDashboard className="mb-1  me-2 fs-5" />
                      Dashboard
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-barbearia/cortes-estilos">
                    <ListGroup.Item className="list-group-item-action">
                      <BsScissors className="mb-1  me-2 fs-5" />
                      Painel de cortes / estilos
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-barbearia/alterar-dados">
                    <ListGroup.Item className="list-group-item-action">
                      <RiEditBoxFill className="mb-1  me-2 fs-5" />
                      Alterar dados
                    </ListGroup.Item>
                  </Link>
                  <Link to="/">
                    <ListGroup.Item className="list-group-item-action rounded-bottom">
                      <IoLogOutOutline className="mb-1  me-2 fs-5" />
                      Sair
                    </ListGroup.Item>
                  </Link>
                </ListGroup>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col md={8} className=" mt-2">
          <Row className="justify-content-center">
            <ListGroup className="col-5">
              
                <h4 className="fw-bold mt-3 mb-3">Vendas</h4>
                <ListGroup.Item className="col-5 shadow rounded listItemDash py-4 w-100">
                  <div className="d-flex">
                    <p className="titleDash fw-bold">Mês</p>
                    <MdAttachMoney className="ms-auto dashLogo" />
                  </div>
                  <p className="fs-5 fw-bold">R$2,000,00</p>
                </ListGroup.Item>
                <ListGroup.Item className="col-5 shadow rounded listItemDash py-4 mt-2 w-100">
                  <div className="d-flex">
                    <p className="titleDash fw-bold">Semana</p>
                    <MdAttachMoney className="ms-auto dashLogo" />
                  </div>
                  <p className="fs-5 fw-bold">R$2,000,00</p>
                </ListGroup.Item>
                <ListGroup.Item className="col-5 shadow rounded listItemDash py-4 mt-2 w-100">
                  <div className="d-flex">
                    <p className="titleDash fw-bold">Dia</p>
                    <MdAttachMoney className="ms-auto dashLogo" />
                  </div>
                  <p className="fs-5 fw-bold">R$2,000,00</p>
                </ListGroup.Item>
              
            </ListGroup>

            <ListGroup className="col-5">
              
                <h4 className="fw-bold mt-3 mb-3">Agendamentos</h4>
                <ListGroup.Item className="col-5 shadow rounded listItemDashAgen py-4 w-100">
                  <div className="d-flex">
                    <p className="text-primary fw-bold">Mês</p>
                    <AiOutlineSchedule className="ms-auto dashLogo" />
                  </div>
                  <p className="fs-5 fw-bold">R$2,000,00</p>
                </ListGroup.Item>
                <ListGroup.Item className="col-5 shadow rounded listItemDashAgen py-4 mt-2 w-100">
                  <div className="d-flex">
                    <p className="text-primary fw-bold">Semana</p>
                    <AiOutlineSchedule className="ms-auto dashLogo" />
                  </div>
                  <p className="fs-5 fw-bold">R$2,000,00</p>
                </ListGroup.Item>
                <ListGroup.Item className="col-5 shadow rounded listItemDashAgen py-4 mt-2 w-100">
                  <div className="d-flex">
                    <p className="text-primary fw-bold">Dia</p>
                    <AiOutlineSchedule className="ms-auto dashLogo" />
                  </div>
                  <p className="fs-5 fw-bold">R$2,000,00</p>
                </ListGroup.Item>
              
            </ListGroup>
           
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
