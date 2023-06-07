import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import exBarber from "../assets/img/exBarber.png";

const Agenda = () => {
  return (
    <>
      <Header />
      <Container className="default-margin">
        <Row className="justify-content-center">
          <Col md={6} className="rounded shadow p-5">
            <a className="text-decoration-none text-dark d-flex align-itemcenter ms-3 mt-2">
              <img
                src={exBarber}
                width="40"
                height="40"
                className="rounded-circle "
              />
              <span className="ms-2 mt-2 fw-bold">Mr Barba</span>
            </a>
            <hr className="text-muted" />
            <form>
                
            </form>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Agenda;
