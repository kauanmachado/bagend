import "../styles/loginCliente.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri"
import { RxScissors } from "react-icons/rx";
import logoPreta from "../assets/img/logo1.png"




const LoginCliente = () => {
  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
        
          <Col lg={5} md={12} className="shadow rounded mt-5 p-5 justify-content-center">
            <img src={logoPreta} className="logo text-center"/>
            <h2 className=" fw-bold  mt-5">Seja bem-vindo</h2>
            <p className="mt-0 textP text-secondary mb-5">Nao possui conta? <Link to="/cadastro-cliente">Cadastre-se</Link></p>
            <Form>
            <Row className="justify-content-center">
            
            <Col md={12}>
            <Form.Label>E-mail</Form.Label>
              <InputGroup className="mb-3 shadow rounded">
                
                <InputGroup.Text id="basic-addon1"><HiUser/></InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="cliente@exemplo.com"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </Col>

              <Col md={12}>
              <Form.Label>Senha</Form.Label>
              <InputGroup className="mb-3 shadow rounded">
                
                <InputGroup.Text id="basic-addon1"><RiLockPasswordFill/></InputGroup.Text>
                <Form.Control
                type="password"
                  placeholder="12345teste"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              </Col>

              <p className="mt-0 textP text-secondary mb-5">Esqueceu sua senha?<Link to="/cadastro-cliente"> Clique aqui</Link></p>
              <Button variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0 w-100" type="submit">
                Entrar
              </Button>
              </Row>  
            </Form>

            <p className="mt-0 textP fw-bold text-center mt-4">Ou</p>
            <Link to="/login-barbearia">
            <Button variant="primary rounded-pill px-4 py-3 mt-3 shadow mx-0 btnEsc mb-3 w-100" type="submit">
              <RxScissors/>
                Entrar como barbearia
              </Button>
              </Link>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default LoginCliente;
