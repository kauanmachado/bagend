import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Row, Col, Form, InputGroup, Button, Toast } from "react-bootstrap";
import { RiCheckboxCircleFill, RiErrorWarningFill, RiLockPasswordFill } from "react-icons/ri";
import { SlUser } from "react-icons/sl";
import { MdBusinessCenter } from "react-icons/md";
import logoPreta from "../assets/img/logo1.png";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const LoginBarbearia = () => {

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

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
      .post("http://localhost:8001/login-barbearia", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        scrollToTop();
        exibirToastCheck();
        const token = response.data.token;
        Cookies.set("token", token, { expires: cookieExpiresInSeconds });
        setTimeout(() => {
          navigate("/painel-barbearia");
        }, 2000);
      })
      .catch(() => {
        scrollToTop();
        exibirToastErro();
        setEmail("");
        setSenha("");
      });
  };

  return (
    <>
      <Header />
      <Container className="mb-5">
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
          <Col lg={5} md={8} className="mt-5 p-sm-5 p-4 shadow rounded">
            <img src={logoPreta} className="logo text-center" />
            <h3 className=" fw-bold  mt-5">
              Acesse sua conta para gerenciar clientes e agendamentos
            </h3>
            <p className="mt-0 textP text-secondary mb-5">
              Nao possui conta?{" "}
              <Link to="/cadastro-barbearia">Cadastre-se</Link>
            </p>
            <Form onSubmit={handleFazerLogin}>
              <Row className="justify-content-center">
                <Col md={12}>
                  <div class="form-floating mb-4">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="cliente@exemplo.com"
                      className="form-control shadow"
                      required
                      autoComplete="email"
                    />
                    <label for="floatingInput" className="text-secondary">
                      <MdBusinessCenter className="fs-3 me-2" />
                      cliente@exemplo.com
                    </label>
                  </div>
                </Col>

                <Col md={12}>
                  <div class="form-floating mb-4">
                    <input
                      id="senha"
                      type="password"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="cliente@exemplo.com"
                      className="form-control shadow"
                      required
                      autoComplete="senha"
                    />
                    <label for="floatingInput" className="text-secondary">
                      <RiLockPasswordFill className="fs-3 me-2" />
                      12345teste
                    </label>
                  </div>
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

            <p className=" textP fw-bold text-center mt-3">Ou</p>
            <Link to="/login-cliente">
              <Button
                variant="primary rounded-pill px-4 py-3 mt-2 shadow mx-0 btnEsc mb-3 w-100"
                type="submit"
              >
                Entrar como cliente
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default LoginBarbearia;
