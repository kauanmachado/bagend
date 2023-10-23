 import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../components/footer/Footer";
import DataHorario from "./DataHorario";
import CorteEstilo from "./CorteEstilo";
import Profissional from "./Profissional";

const Agenda = () => {

  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };


  return (
  <>
    <Header />
    <Container className="default-margin">
      <Row>
      {step === 1 && <DataHorario onNext={nextStep} />}
      {step === 2 && <CorteEstilo onNext={nextStep} onPrev={prevStep} />}
      {step === 3 && <Profissional onPrev={prevStep} />}
      </Row>
    </Container>
    
    <Footer />

  </>
  )
}


export default Agenda;
