import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import { InputGroup, Form, Col, Row, Container, Navbar, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdBusinessCenter, MdDashboard, MdAttachMoney, MdOutlineArrowBackIos } from "react-icons/md";
import { BsScissors, BsClock } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { AiFillSchedule, AiOutlinePlus } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";

const AdicionarCorteEstilo = () => {
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
                    <ListGroup.Item className="list-group-item-action rounded-top ">
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
                    <ListGroup.Item className="list-group-item-action">
                      <MdDashboard className="mb-1  me-2 fs-5" />
                      Dashboard
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-barbearia/cortes-estilos">
                    <ListGroup.Item className="list-group-item-action bg-item text-light">
                      <BsScissors className="mb-1  me-2 fs-5" />
                      Painel de cortes / estilos
                    </ListGroup.Item>
                  </Link>
                  <Link to="alterar-dados">
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

          <Col md={8} className=" ms-md-0 mt-2">
          <Form>
          <Link to="../painel-barbearia/cortes-estilos" id="linkBack" className="me-5 py-1 fw-bold text-dark">
          <MdOutlineArrowBackIos style={{fontSize: 15}} className="me-2"/>
              Voltar para cortes e estilos
            </Link>
            <Row className=" shadow rounded p-4 w-auto mt-3">
            
              <Col md={6}>
                <Form.Label>Nome do corte</Form.Label>
                <InputGroup className="mb-3 shadow rounded">
                  <InputGroup.Text id="basic-addon1"><BsScissors/></InputGroup.Text>
                  <Form.Control
                    placeholder="Ex. Corte degradê"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                </Col>

                <Col md={3}>
                <Form.Label>Valor</Form.Label>
                <InputGroup className="mb-3 shadow rounded">
                  <InputGroup.Text id="basic-addon1"><MdAttachMoney/></InputGroup.Text>
                  <Form.Control
                    placeholder="Ex. 40"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                </Col>

                <Col md={5}>
                <Form.Label>Tempo estimado</Form.Label>
                <InputGroup className="mb-3 shadow rounded">
                  <InputGroup.Text id="basic-addon1"><BsClock/></InputGroup.Text>
                  <Form.Control
                    placeholder="Ex. 40"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                </Col>

                <Col md={12}>
                <Button variant="primary px-4 py-2 agendar shadow rounded mt-3 "><AiOutlinePlus/>Adicionar</Button>
                </Col>
              
            </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdicionarCorteEstilo;
