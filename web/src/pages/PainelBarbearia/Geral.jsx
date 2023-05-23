import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdBusinessCenter, MdDashboard } from "react-icons/md"
import { BsScissors } from "react-icons/bs"
import { RiEditBoxFill } from "react-icons/ri"
import { IoLogOutOutline } from "react-icons/io5"
import { AiOutlineInstagram, AiOutlineFacebook, AiFillSchedule} from "react-icons/ai"
import { TiThMenu } from "react-icons/ti"

import exBarber from "../../assets/img/exBarber.png"

const Geral = () => {
  return (
    <>
      <Header />
      <Container className="mt-5 mb-3">
        <div>
        <h4 className="text-center fw-bold">Bem vindo, <strong className="text-primary">Mr Barba!</strong></h4>
        <hr></hr>
        </div>
        <Row className="justify-content-center">
        
        
          <Col md={3} className="mb-5">
          <Navbar expand="lg">
          
          <Navbar.Toggle aria-controls="navbarScroll" className="w-100 navtoggle"><TiThMenu className=" float-start thmenu text-dark"/></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll" className="">

            <ListGroup className="shadow">
              <Link to="../painel-barbearia">
                <ListGroup.Item className="list-group-item-action bg-item text-light rounded-top ">
                  <MdBusinessCenter className="mb-1  me-2 fs-5"/>
                   Geral
                </ListGroup.Item>
              </Link>
              <Link to="agendas">
                <ListGroup.Item className="list-group-item-action">
                  <AiFillSchedule  className="mb-1  me-2 fs-5"/>
                   Agendas
                </ListGroup.Item>
              </Link>
              <Link to="dashboard">
                <ListGroup.Item className="list-group-item-action">
                  <MdDashboard   className="mb-1  me-2 fs-5"/>
                   Dashboard
                </ListGroup.Item>
              </Link>
              <Link to="cortes-estilos">
                <ListGroup.Item className="list-group-item-action">
                  <BsScissors  className="mb-1  me-2 fs-5"/>
                   Painel de cortes / estilos
                </ListGroup.Item>
              </Link>
              <Link to="alterar-dados">
                <ListGroup.Item className="list-group-item-action">
                  <RiEditBoxFill  className="mb-1  me-2 fs-5"/>
                   Alterar dados
                </ListGroup.Item>
              </Link>
              <Link to="/">
                <ListGroup.Item className="list-group-item-action rounded-bottom">
                  <IoLogOutOutline  className="mb-1  me-2 fs-5"/>
                   Sair
                </ListGroup.Item>
              </Link>
            </ListGroup>
            </Navbar.Collapse>
            </Navbar>
          </Col>
          


          <Col md={8} className="ms-5  ms-md-0 mt-2">
            <img src={exBarber} className="logo rounded-circle"/>
          <h3 className=" mt-3 fw-bold title">Mr Barba</h3>
            <p className="endereco mt-4">Gravataí, Rio Grande do Sul</p>
            <p className="endereco text-secondary">Av. Flores da Cunha 000</p>
            
            <p><AiOutlineInstagram/>: instagram.com/mrbarba</p>
            <p><AiOutlineFacebook/>: facebook.com/mrbarba</p>
            
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Geral;
