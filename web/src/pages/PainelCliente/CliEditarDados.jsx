import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import {
  MdCoPresent,
  MdPerson,
  MdAlternateEmail,
  MdPersonPinCircle,
} from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";
import exBarber from "../../assets/img/exBarber.png";
import HeaderClienteLogado from "../../components/HeaderClienteLogado";



const CliEditarDados = () => {
    return(
        <>
            <HeaderClienteLogado />
      <Container className="mt-5 mb-3">
        <div>
          <h4 className="text-center fw-bold">
            Bem vindo, <strong className="text-primary">Kauan Machado!</strong>
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
                <ListGroup className="shadow w-100">
                  <Link to="../painel-cliente">
                    <ListGroup.Item className="list-group-item-action rounded-top ">
                      <MdCoPresent className="mb-1  me-2 fs-5" />
                      Geral
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-cliente/agendas">
                    <ListGroup.Item className="list-group-item-action">
                      <FaUserCheck className="mb-1  me-2 fs-5" />
                      Agendas
                    </ListGroup.Item>
                  </Link>
                  <Link to="../painel-cliente/alterar-dados">
                    <ListGroup.Item className="list-group-item-action  bg-item text-light">
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

          <Col md={8} className="ms-5 ms-md-0 mt-2 shadow rounded border p-5">
          <h4 className=" fw-bold  mt-5">Alterar dados</h4>
          <p className="textP text-secondary mb-5">
                Deseja redefinir sua senha? <Link to="/login-cliente">Clique aqui</Link>
              </p>
            <Form>
              <Form.Label>E-mail</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <MdAlternateEmail/>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="cliente@exemplo.com"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Label>Nome completo</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <MdPerson />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Lucas Lima"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Label>Senha</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="12345teste"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Label>Confirmar senha</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <RiLockPasswordFill />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Digite a senha novamente"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

             

              

              <Button
                variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0 mb-3"
                type="submit"
              >
                Salvar alterações
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default CliEditarDados