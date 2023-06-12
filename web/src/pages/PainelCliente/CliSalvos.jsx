import { Button, Card, Col, Container, Row } from "react-bootstrap";
import HeaderClienteLogado from "../../components/HeaderClienteLogado";
import Footer from "../../components/footer/Footer";
import PainelCliente from "../../components/PainelCliente";
import Cookies from "js-cookie";
import { BsBookmarks, BsClock } from "react-icons/bs";
import exBarber from "../../assets/img/exBarber.png";

const CliSalvos = () => {
  const Autenticado = Cookies.get("token");

  return (
    <>
      {Autenticado ? <HeaderClienteLogado /> : <Header />}
      <Container className="default-margin">
        <Row className="shadow rounded bg-white">
          <Col
            md={3}
            className="bg-white rounded col-auto d-flex flex-column p-5"
          >
            <PainelCliente />
          </Col>
          <Col md={9} className="p-5 rounded border bg-light">
            <div className="d-flex">
              <BsBookmarks className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Salvos</h3>
            </div>

            <Card
              style={{ width: "18rem" }}
              className="border-0 shadow m-1 p-3"
            >
              <Card.Body>
                <div className="d-flex mb-3">
                  <img
                    src={exBarber}
                    width="40"
                    height="40"
                    className="rounded-circle "
                  />
                  <h5 className="fw-bold ms-2 mt-2 fs-6">Mr Barba</h5>
                </div>
                <p className="endereco text-secondary">
                  Av. Flores da Cunha 000, Gravataí, Rio Grande do Sul
                </p>
                <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3">
                  Agendar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CliSalvos;
