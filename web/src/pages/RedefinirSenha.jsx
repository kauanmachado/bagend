import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const RedefinirSenha = () => {
  return (
    <>
      <Header />
      <Container className="default-margin">
        <Row className="justify-content-center">
          <Col md={6} className="shadow rounded p-5">
          <div className="d-flex mb-5">
                <h4 className="fw-bold text-muted">Redefinir senha</h4>
                
              </div>
              
            <form>
              <Row>
              <Col md={12}>
                  <div class="form-floating mb-4">
                    <input
                      id="email"
                      type="email"

                      placeholder="cliente@exemplo.com"
                      className="form-control shadow"
                      required
                      autoComplete="email"
                    />
                    <label for="floatingInput" className="text-secondary">
                      <MdAlternateEmail className="fs-3 me-2" />
                      Digite seu email
                    </label>
                  </div>

                
                </Col>
                <Col md={12}>
                  <div class="form-floating mb-4">
                    <input
                      id="email"
                      type="email"

                      placeholder="cliente@exemplo.com"
                      className="form-control shadow"
                      required
                      autoComplete="email"
                    />
                    <label for="floatingInput" className="text-secondary">
                      <RiLockPasswordFill className="fs-3 me-2" />
                      Digite sua nova senha
                    </label>
                  </div>

                
                </Col>
                <Col md={12}>
                <Button
                    variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0"
                    type="submit"
                  >
                    Confirmar nova senha
                  </Button>
                  </Col>
              </Row>

            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default RedefinirSenha;
