import { Link } from "react-router-dom"
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { RiLockPasswordFill } from "react-icons/ri"
import { SlUser } from "react-icons/sl"
import { MdBusinessCenter } from "react-icons/md"
import logoPreta from "../assets/img/logo1.png"

const LoginBarbearia = () => {
    return (
        <>
            <Header />
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col lg={5} md={8} className="mt-5 p-5 shadow rounded">
          <img src={logoPreta} className="logo text-center"/>
            <h2 className=" fw-bold  mt-5">Seja bem-vindo</h2>
            <p className="mt-0 textP text-secondary mb-5">Nao possui conta? <Link to="/cadastro-barbearia">Cadastre-se</Link></p>
            <Form>
            <Form.Label>E-mail</Form.Label>
              <InputGroup className="mb-3 shadow rounded">
                
                <InputGroup.Text id="basic-addon1"><MdBusinessCenter/></InputGroup.Text>
                <Form.Control
                  placeholder="barbearia@exemplo.com"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <Form.Label>Senha</Form.Label>
              <InputGroup className="mb-3 shadow rounded">
                
                <InputGroup.Text id="basic-addon1"><RiLockPasswordFill/></InputGroup.Text>
                <Form.Control
                  placeholder="12345teste"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <p className="mt-0 textP text-secondary mb-5">Esqueceu sua senha?<Link to="/cadastro-cliente"> Clique aqui</Link></p>



              
              <Button variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0 w-100" type="submit">
                Entrar
              </Button>
            </Form>

            <p className="mt-0 textP fw-bold text-center mt-4">Ou</p>
            <Link to="/login-cliente">
            <Button variant="primary rounded-pill px-4 py-3 mt-3 shadow mx-0 btnEsc mb-3 w-100" type="submit">
              <SlUser/>
                Entrar como cliente
              </Button>
              </Link>
          </Col>
        </Row>
      </Container>
      <Footer/>
        </>
    )
}

export default LoginBarbearia