import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdBusinessCenter, MdFreeCancellation, MdDashboard  } from "react-icons/md"
import { AiFillSchedule, AiOutlinePlus, AiOutlineEdit } from "react-icons/ai"
import { BsScissors } from "react-icons/bs"
import { RiEditBoxFill } from "react-icons/ri"
import { IoLogOutOutline } from "react-icons/io5"
import { TiThMenu } from "react-icons/ti"

const CortesEstilos = () => {
    return(
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
                <ListGroup.Item className="list-group-item-action  rounded-top ">
                  <MdBusinessCenter className="mb-1  me-2 fs-5"/>
                   Geral
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/agendas">
                <ListGroup.Item className="list-group-item-action">
                  <AiFillSchedule  className="mb-1  me-2 fs-5"/>
                   Agendas
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/dashboard">
                <ListGroup.Item className="list-group-item-action">
                  <MdDashboard   className="mb-1  me-2 fs-5"/>
                   Dashboard
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/cortes-estilos">
                <ListGroup.Item className="list-group-item-action bg-item text-light">
                  <BsScissors  className="mb-1  me-2 fs-5"/>
                   Painel de cortes / estilos
                </ListGroup.Item>
              </Link>
              <Link to="../painel-barbearia/alterar-dados">
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
          


          <Col md={8} className=" mt-2  justify-content-center text-center">
          <Link to="./adicionar-corteestilo">
          <Button variant="primary px-4 py-2 agendar shadow rounded mt-3 "><AiOutlinePlus/>Adicionar novo corte / estilo</Button>
          </Link>
          <ListGroup horizontal variant="flush" className="mt-3 d-flex">
            <Container>
            
            <Row className="justify-content-center d-flex">
            
            
            <ListGroup.Item className="p-3 rounded shadow mx-2 mb-3 col-5 text-start">
                <hr></hr>
                <h5 className="fw-bold fs-6 text-uppercase">Corte degradê</h5>
                <h5 className="text-success fs-6">R$30,00</h5>
                <p className="">Tempo estimado: 30 minutos</p>
                <Button className="bg-danger px-4 py-2 btnRed shadow rounded mt-xl-5 me-xl-2 "><MdFreeCancellation/>Remover</Button>
                <Button className="bg-dark px-4 py-2  btnDark shadow rounded mt-xl-5 "><AiOutlineEdit/>Editar</Button>
              </ListGroup.Item>
              <ListGroup.Item className="p-3 rounded shadow mx-2 mb-3 col-5 text-start">
                <hr></hr>
                <h5 className="fw-bold fs-6 text-uppercase">Corte degradê</h5>
                <h5 className="text-success fs-6">R$30,00</h5>
                <p className="">Tempo estimado: 30 minutos</p>
                <Button className="bg-danger px-4 py-2 btnRed shadow rounded mt-xl-5 me-xl-2 "><MdFreeCancellation/>Remover</Button>
                <Button className="bg-dark px-4 py-2  btnDark shadow rounded mt-xl-5 "><AiOutlineEdit/>Editar</Button>
              </ListGroup.Item>
              
              
              
              
             
              
              
              </Row>
              </Container>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default CortesEstilos