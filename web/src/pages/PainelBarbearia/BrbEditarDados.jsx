import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { AiFillSchedule } from "react-icons/ai"
import { RiEditBoxFill } from "react-icons/ri"
import { IoLogOutOutline } from "react-icons/io5"
import { TiThMenu } from "react-icons/ti"
import { MdAlternateEmail, MdDashboard, MdBusinessCenter } from "react-icons/md";
import { BsFillPinMapFill, BsScissors  } from "react-icons/bs";

const BrbEditarDados = () => {
    return(
        <>
            <Header/>
            <Container className="mt-5 mb-3">
        <div>
        <h4 className="text-center fw-bold">Bem vindo, <strong className="text-primary">Mr Barba!</strong></h4>
        <hr></hr>
        </div>
        <Row className="justify-content-center">
        
        
          <Col md={3} className="mb-5">
          <Navbar expand="lg">
          
          <Navbar.Toggle aria-controls="navbarScroll" className="w-100 navtoggle"><TiThMenu className=" float-start thmenu text-dark"/></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className="">

            <ListGroup className="shadow">
              <Link to="../painel-barbearia">
                <ListGroup.Item className="list-group-item-action  rounded-top ">
                  <MdBusinessCenter className="mb-1  me-2 fs-5"/>
                   Geral
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/agendas">
                <ListGroup.Item className="list-group-item-action">
                  <AiFillSchedule  className="mb-1  me-2 fs-5"/>
                   Agendas
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/dashboard">
                <ListGroup.Item className="list-group-item-action">
                  <MdDashboard   className="mb-1  me-2 fs-5"/>
                   Dashboard
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/cortes-estilos">
                <ListGroup.Item className="list-group-item-action">
                  <BsScissors  className="mb-1  me-2 fs-5"/>
                   Painel de cortes / estilos
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/alterar-dados">
                <ListGroup.Item className="list-group-item-action bg-item text-light" >
                  <RiEditBoxFill  className="mb-1  me-2 fs-5"/>
                   Alterar dados
                </ListGroup.Item>
              </Link>
              <Link to="/">
                
                <ListGroup.Item className="list-group-item-action rounded-bottom">
                  <IoLogOutOutline  className="mb-1  me-2 fs-5"/>
                   Sair
                </ListGroup.Item>
              </Link>
            </ListGroup>
            </Navbar.Collapse>
            </Navbar>
          </Col>
          


          <Col md={8} className=" mt-2 shadow rounded border p-5">
            <h4 className="fw-bold">Alterar dados</h4>
            <p className="mt-0 textP text-secondary mb-5">Deseja redefinir a senha? <Link to="/redefinir-senha">Clique aqui</Link></p>
            <Form>
              <Form.Label>E-mail</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <MdAlternateEmail />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="barbearia@exemplo.com"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Label>Nome da Barbearia</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <MdBusinessCenter />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Mr Barba"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Label>CNPJ</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <MdBusinessCenter />
                </InputGroup.Text>
                <Form.Control
                  placeholder="00.000.000/0001-00"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Label>Estado</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3 shadow"
              >
                <option>Selecione o estado</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Label>Cidade</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3 shadow"
              >
                <option>Selecione a cidade</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Label>Endereço</Form.Label>
              <InputGroup className="mb-3 shadow">
                <InputGroup.Text id="basic-addon1">
                  <BsFillPinMapFill />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Av. Flores da Cunha 000"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              
              <Form.Label>Foto de perfil da barbearia</Form.Label>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
              </Form.Group>

              <Button
                variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0"
                type="submit"
              >
                Salvar alterações
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer/>
        </>
    )
}

export default BrbEditarDados