import "../styles/home.css"
import imgHome from "../assets/img/barberbeard.png";
import Footer from "../components/footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import Header from "../components/header/Header";
import CheckRole from "../components/CheckRole";
import HeaderBarbearia from "../components/HeaderBarbearia";
import HeaderCliente from "../components/HeaderCliente";


const Home = () => {

  const role = CheckRole()


  return (
    <>
      {role === "cliente" ? <HeaderCliente /> : role === "barbearia" ? <HeaderBarbearia /> : <Header />}

      <Container fluid className=" px-xl-5" id="containerHome">
        <Row>
          <Col sm={12} md={6} lg={6} className="">         
            <h1 className="titleCli  text-xl-end">
              Seja bem-vindo ao <br/>GoBarber
            </h1>
            <p className="ms-md-5 mt-4 textCli text-xl-end text-secondary">
              Encontre barbearias na sua região e<br />de qualquer lugar do brasil e  faça seu agendamento
            </p>
            <Link to="barbearias">
            <Button className="btn rounded-pill px-5  py-3 py-2 mt-3 ms-md-5 float-xl-end shadow">
              Saiba mais
            </Button>
            </Link>
          </Col>
          <Col md={6} className="pe-5 pt-5">
            <img
              src={imgHome}
              className="imgCliente mt-5  float-start"
            />
          </Col>
        </Row>
      </Container>
      <Footer/>

    </>
  );
};

export default Home;
