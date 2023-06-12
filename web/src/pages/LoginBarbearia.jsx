import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { RiLockPasswordFill } from "react-icons/ri";
import { SlUser } from "react-icons/sl";
import { MdBusinessCenter } from "react-icons/md";
import logoPreta from "../assets/img/logo1.png";

const LoginBarbearia = () => {
  return (
    <>
      <Header />
      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col lg={5} md={8} className="mt-5 p-sm-5 p-4 shadow rounded">
            <img src={logoPreta} className="logo text-center" />
            <h3 className=" fw-bold  mt-5">
              Acesse sua conta para gerenciar clientes e agendamentos
            </h3>
            <p className="mt-0 textP text-secondary mb-5">
              Nao possui conta?{" "}
              <Link to="/cadastro-barbearia">Cadastre-se</Link>
            </p>
            <Form>
              <Row className="justify-content-center">
                <Col md={12}>
                  <div class="form-floating mb-4">
                    <input
                      id="email"
                      type="email"
                      value=""
                      onChange=""
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
                      value=""
                      onChange=""
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
