import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Form, Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const Avaliar = () => {
  return (
    <>
      <Header />
      <Container className="default-margin">
        <Row className="justify-content-center">
          <Col md={6} className="shadow rounded p-5">
            <Link
              to="../perfil-barbearia"
              id="linkBack"
              className="me-5 py-1 fw-bold text-dark"
            >
              <MdOutlineArrowBackIos
                style={{ fontSize: 15 }}
                className="me-2"
              />
              Voltar
            </Link>
            <form className="mt-5">
              <div class="form-floating mb-4">
                <textarea
                  id="email"
                  type="email"
                  placeholder="cliente@exemplo.com"
                  className="form-control shadow"
                  required
                  autoComplete="email"
                  style={{ height: 200 }}
                />
                <label for="floatingInput" className="text-secondary">
                  Insira seu comentário aqui
                </label>
              </div>
              <div className="d-flex">
                <AiOutlineStar className="fs-5" />
                <AiOutlineStar className="fs-5" />
                <AiOutlineStar className="fs-5" />
                <AiOutlineStar className="fs-5" />
                <AiOutlineStar className="fs-5" />
              </div>
            </form>
            <Button className="primary px-4 py-2 agendar shadow rounded-pill ms-3 mt-5 float-end">
              Confirmar avaliação
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Avaliar;
