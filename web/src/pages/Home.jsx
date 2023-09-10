import "../styles/home.css"
import imgHome from "../assets/img/barberbeard.png";
import imgHome2 from "../assets/img/imgBarbearia.jpg";
import Footer from "../components/footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import Cookies from "js-cookie";
import Header from "../components/header/Header";
import { FcBusiness } from "react-icons/fc"


const Home = () => {

  const Autenticado = Cookies.get('token')

  return (
    <>
      <Header/>
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

      {/* <Container className="mt-5 bgBarb mb-5" fluid>
        <Container>
        <Row className="justify-content-center">
        <Col md={6} >
        
          
        <img
              src={imgHome2}
              className="imgBarbearia mt-5 float-end shadow"
            /> 
          <FcBusiness className="fs-1 float-end" id="fcBusiness"/>
        </Col>
        <Col md={6}>
        <h1 className="titleBar ms-md-5">
              Gerencie seu
            </h1>
            <h1 className="titleBar2 fw-bold ms-md-5">
              Negócio
            </h1>
            <p className="ms-md-5 mt-4 textCli text-secondary">
              Cadastre sua barbearia e tenha uma plataforma gratuita onde<br />você
              pode gerenciar seu negócio de forma prática
            </p>
            <Link to="login-barbearia">
            <Button className="rounded-pill px-5  py-3 py-2 mt-3 ms-md-5 shadow btnH">
              Comece agora
            </Button>
            </Link>
        </Col>
          
        </Row>
        </Container>
      </Container> */}
      <Footer/>

    </>
  );
};

export default Home;
