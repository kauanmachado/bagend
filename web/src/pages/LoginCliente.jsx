import "../styles/loginCliente.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Toast,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { RiCheckboxCircleFill, RiErrorWarningFill, RiLockPasswordFill } from "react-icons/ri";
import { RxScissors } from "react-icons/rx";
import logoPreta from "../assets/img/logo1.png";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const LoginCliente = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [toastErro, setToastErro] = useState(false);
  const [toastCheck, setToastCheck] = useState(false);

  const exibirToastErro = () => {
    setToastErro(true);

    setTimeout(() => {
      setToastErro(false);
    }, 3000);
  };

  const exibirToastCheck = () => {
    setToastCheck(true);

    setTimeout(() => {
      setToastCheck(false);
    }, 3000);
  };



  const handleFazerLogin = async (e) => {
    e.preventDefault();
    const cookieExpiresInSeconds = 60 * 60 * 24 * 30;
    await axios
      .post("http://localhost:8001/login-cliente", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        exibirToastCheck();
        const token = response.data.token;
        Cookies.set("token", token, { expires: cookieExpiresInSeconds });
        setTimeout(() => {
          navigate("/barbearias");
        }, 2000);
      })
      .catch(() => {
        exibirToastErro();
        setEmail("");
        setSenha("");
      });
  };

  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Toast
            show={toastErro}
            onClose={() => setToastErro(false)}
            className="position-absolute toastEmail bg-danger text-white"
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Credenciais Incorretas!
            </Toast.Body>
          </Toast>

          <Toast
            show={toastCheck}
            onClose={() => setToastCheck(false)}
            className="position-absolute toastEmail bg-success text-white"
            
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              Login realizado com sucesso!
            </Toast.Body>
          </Toast>
          <Col
            lg={5}
            md={12}
            className="shadow rounded mt-5 p-5 justify-content-center"
          >
            <img src={logoPreta} className="logo text-center" />
            <h2 className=" fw-bold  mt-5">Login do cliente</h2>
            <p className="mt-0 textP text-secondary mb-5">
              Nao possui conta? <Link to="/cadastro-cliente">Cadastre-se</Link>
            </p>
            <Form onSubmit={handleFazerLogin}>
              <Row className="justify-content-center">
                <Col md={12}>
                  <Form.Label>E-mail</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <HiUser />
                    </InputGroup.Text>
                    <Form.Control
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="cliente@exemplo.com"
                      required
                      autoComplete="email"
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
                      id="senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      type="password"
                      placeholder="12345teste"
                      required
                      autoComplete="senha"
                    />
                  </InputGroup>
                </Col>

                <p className="mt-0 textP text-secondary mb-5">
                  Esqueceu sua senha?
                  <Link to="/cadastro-cliente"> Clique aqui</Link>
                </p>
                <Button
                  variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0 w-100"
                  type="submit"
                >
                  Entrar
                </Button>
              </Row>
            </Form>

            <p className="mt-0 textP fw-bold text-center mt-4">Ou</p>
            <Link to="/login-barbearia">
              <Button
                variant="primary rounded-pill px-4 py-3 mt-3 shadow mx-0 btnEsc mb-3 w-100"
                type="submit"
              >
                <RxScissors />
                Entrar como barbearia
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LoginCliente;
