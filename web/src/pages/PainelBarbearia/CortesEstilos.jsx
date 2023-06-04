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
import PainelBarbearia from "../../components/PainelBarbearia";

const CortesEstilos = () => {
    return(
        <>
        <Header />
      <Container className="mt-5 mb-3">
        <Row className="justify-content-center">
        
        
          <Col md={3} className="border bg-light col-auto d-flex flex-column p-5">
              <PainelBarbearia />
          </Col>
          


          <Col md={9} className="border p-5">
          <h3 className="fw-bold mb-5">Cortes e Estilos</h3>
          <Link to="./adicionar-corteestilo">
          <Button variant="primary px-4 py-2 agendar shadow rounded mt-3 "><AiOutlinePlus/>Adicionar</Button>
          </Link>
          <ListGroup horizontal variant="flush" className="mt-3 d-flex">
            <Container>
            
            <Row className="justify-content-center d-flex">
            
            
            <ListGroup.Item className="p-3 rounded mx-2 mb-3 text-start">
                <hr></hr>
                <h5 className="fw-bold fs-6 text-uppercase">Corte degradê</h5>
                <h5 className="text-success fs-6">R$30,00</h5>
                <p className="">Tempo estimado: 30 minutos</p>
                <Button className="bg-danger px-4 py-2 btnRed shadow rounded mt-xl-5 me-xl-2 "><MdFreeCancellation/>Remover</Button>
                <Button className="bg-dark px-4 py-2  btnDark shadow rounded mt-xl-5 "><AiOutlineEdit/>Editar</Button>
              </ListGroup.Item>
              <ListGroup.Item className="p-3 rounded  mx-2 mb-3 text-start">
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