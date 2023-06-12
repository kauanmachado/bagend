import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import exBarber from "../assets/img/exBarber.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../components/footer/Footer";
import { BsClock } from "react-icons/bs";

const Agenda = () => {
  const [formData, setFormData] = useState({
    corte: "",
    data_horario: "",
    profissional: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
    if (date) {
      fetchAvailableTimes(moment(date).format("YYYY-MM-DD"));
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const renderAvailableTimes = () => {
    if (availableTimes.length === 0) {
      return <option>Nenhum horário disponível</option>;
    }

    return availableTimes.map((time) => (
      <option key={time} value={time}>
        {time}
      </option>
    ));
  };

  const AgendaMultiStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Container className="default-margin">
              <Row className="justify-content-center">
                <Col md={7} className="rounded shadow p-md-5">
                  <div className="text-decoration-none text-dark d-flex align-itemcenter ms-xl-3 mt-2">
                    <img
                      src={exBarber}
                      width="40"
                      height="40"
                      className="rounded-circle "
                    />
                    <span className="ms-2 mt-2 fw-bold">Mr Barba</span>
                  </div>

                  <hr className="text-muted" />
                  <h5 className="fw-bold text-secondary mb-4">
                    Data e horário
                  </h5>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    className="form-control mb-4"
                  />
                  <div className="form-floating mb-3">
                    <select
                      value={selectedTime}
                      onChange={(e) => handleTimeChange(e.target.value)}
                      className="form-select shadow"
                    >
                      <option value="">Selecione um horário</option>
                      {renderAvailableTimes()}
                    </select>
                    <label for="floatingSelect">Horários disponíveis</label>
                  </div>
                  <form></form>
                  <Button
                    onClick={nextStep}
                    className="primary px-4 py-2 agendar shadow rounded-pill mt-3"
                  >
                    Continuar
                  </Button>
                </Col>
              </Row>
            </Container>
          </>
        );
      case 2:
        return (
          <>
            <Container className="default-margin">
              <Row className="justify-content-center">
                <Col md={7} className="rounded shadow p-md-5 p-3">
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
                  <h5 className="fw-bold text-secondary mb-4 ms-xl-3">
                    Cortes e estilos
                  </h5>
                  <Container className="mb-5">
                    <Row className="justify-content-center">
                      <Card
                        style={{ width: "13rem" }}
                        className="border-0 m-1 shadow p-2"
                      >
                        <Card.Body>
                          <h5 className="fw-bold fs-6 text-uppercase">
                            Corte degradê
                          </h5>
                          <h5 className="text-success fs-6 fw-bold">R$30,00</h5>
                          <p className="">30 minutos</p>
                        </Card.Body>
                      </Card>
                      <Card
                        style={{ width: "13rem" }}
                        className="border-0 m-1 shadow p-2"
                      >
                        <Card.Body>
                          <h5 className="fw-bold fs-6 text-uppercase">
                            Corte degradê
                          </h5>
                          <h5 className="text-success fs-6 fw-bold">R$30,00</h5>
                          <p className="">30 minutos</p>
                        </Card.Body>
                      </Card>
                      <Card
                        style={{ width: "13rem" }}
                        className="border-0 m-1 shadow p-2"
                      >
                        <Card.Body>
                          <h5 className="fw-bold fs-6 text-uppercase">
                            Corte degradê
                          </h5>
                          <h5 className="text-success fs-6 fw-bold">R$30,00</h5>
                          <p className="">30 minutos</p>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Container>
                  <form></form>
                  <Button
                    onClick={prevStep}
                    className="primary px-4 py-2 agendar shadow rounded-pill ms-lg-3"
                  >
                    Voltar para horários
                  </Button>
                  <Button
                    onClick={nextStep}
                    className="primary px-4 py-2 agendar shadow rounded-pill ms-3"
                  >
                    Continuar
                  </Button>
                </Col>
              </Row>
            </Container>
          </>
        );
      case 3:
        return (
          <>
            <Container className="default-margin">
              <Row className="justify-content-center">
                <Col md={7} className="rounded shadow p-5">
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
                  <h5 className="fw-bold text-secondary mb-4">
                    Confirmar horário
                  </h5>
                  <form className="mb-5">
                    <h5 className="fw-bold fs-6 text-uppercase">
                      Corte degradê
                    </h5>
                    <h5 className="text-success fs-6 fw-bold">R$30,00</h5>
                    <p className="">30 minutos</p>

                    <p className="mt-2 fw-bold">
                      <BsClock className="me-2" />
                      13/08/23 - 14:00
                    </p>
                  </form>
                  <Button
                    onClick={prevStep}
                    className="primary px-4 py-2 agendar shadow rounded-pill"
                  >
                    Voltar
                  </Button>

                  <Button
                    onClick={prevStep}
                    className="primary px-4 py-2 agendar shadow rounded-pill ms-3"
                  >
                    Confirmar
                  </Button>
                </Col>
              </Row>
            </Container>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {AgendaMultiStep()}
      <Footer />
    </>
  );
};

export default Agenda;
