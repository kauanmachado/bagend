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
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md"
import logoPreta from "../assets/img/logo1.png"

const CadastroCliente = () => {
  return (
    <>
      <Header />
      <Container className="mt-3 mb-5">
        <Row className="justify-content-center">
          <Col lg={5} md={8} className="shadow rounded mt-5 p-5">
            <img src={logoPreta} className="logo text-center" />
            <h2 className=" fw-bold  mt-5">Crie sua conta</h2>
            <p className="textP text-secondary mb-5">
              Ja possui conta? <Link to="/login-cliente">Entre</Link>
            </p>
            <Form>
              <Row className="justify-content-center">
                <Col md={12}>
                  <Form.Label>E-mail</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdAlternateEmail />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="cliente@exemplo.com"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>

                <Col md={12}>
                  <Form.Label>Nome completo</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <HiUser />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Lucas Lima"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>

                <Col md={12}>
                  <Form.Label>Senha</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
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
                </Col>

                <Col md={12}>
                  <Form.Label>Confirmar senha</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
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
                </Col>
                <Button
                  variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0"
                  type="submit"
                >
                  Cadastrar
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CadastroCliente;
