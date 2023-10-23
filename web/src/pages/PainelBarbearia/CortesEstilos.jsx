import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import { Container, Row, Col, ListGroup, Button, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MdBusinessCenter,
  MdFreeCancellation,
  MdDashboard,
} from "react-icons/md";
import { AiFillSchedule, AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { BsScissors } from "react-icons/bs";
import { RiCheckboxCircleFill, RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import PainelBarbearia from "../../components/PainelBarbearia";
import { Card } from "react-bootstrap";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode"
import ScrollToTop from "../../components/ScrollToTop";
import CustomToastCheck from "../../components/toasts/CustomToastCheck";


const CortesEstilos = () => {
  const [toastCheck, setToastCheck] = useState(false);

  const exibirToastCheck = () => {
    setToastCheck(true);

    setTimeout(() => {
      setToastCheck(false);
    }, 3000);
  };

  const [cortesEstilos, setCortesEstilo] = useState([]);
  const [deletedCorteEstilo, setDeletedCorteEstilo] = useState(null);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  // console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${apiUrl}/painel-barbearia/${id}/corteestilos`, {
          withCredentials: true
        })
        setCortesEstilo(res.data)
        ScrollToTop()
        // console.log(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }
    fetchData()
  }, [deletedCorteEstilo])

  const handleDelete = async (id) => {
    try {
    await axios.delete(`${apiUrl}/painel-barbearia/${id}/corteestilos/${id}`);
    setDeletedCorteEstilo(id)
    ScrollToTop()
    exibirToastCheck()
    } catch (error) {
      console.error('Erro ao excluir o corte de estilo:', error);
    }
  }

  return (
    <>
      <HeaderBarbearia />
      <Container className="default-margin">
        <Row className="justify-content-center shadow rounded bg-white">
        
        <Toast
            show={toastCheck}
            onClose={() => setToastCheck(false)}
            className="position-absolute top-0 start-50 translate-middle-x toastEmail bg-success text-white mt-5"
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              Corte / Estilo excluído com sucesso!
            </Toast.Body>
          </Toast>
          <Col
            md={3}
            className="bg-light col-auto d-flex flex-column p-5 rounded bg-white"
          >
            <PainelBarbearia />
          </Col>

          <Col md={9} className="border p-5 rounded bg-light">
            <div className="d-flex">
              <BsScissors className="fs-2 text-secondary" />
              <h3 className="fw-bold text-secondary ms-3 mb-5">
                Cortes e Estilos
              </h3>
            </div>
            <Link to="./adicionar-corteestilo">
              <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 ">
                <HiOutlinePlusSm />
                Adicionar
              </Button>
            </Link>
            <ListGroup horizontal className="mt-3 d-flex">
              <Container>
                <Row>

                  {cortesEstilos.length === 0 ? (
                    <h5 className="text-muted mt-4 p-0">Não há nenhum corte ou estilo registrado.</h5>
                  ) : (
                    cortesEstilos.map((corteEstilo) => (
                      <Card
                        style={{ width: "18rem" }}
                        className="border-0 shadow m-1 p-3"
                        key={corteEstilo.id}
                      >
                        <Card.Body>
                          <h5 className="fw-bold fs-6 text-uppercase">
                            {corteEstilo.nome_corte}
                          </h5>
                          <h5 className="text-success fs-5 fw-bold">R${corteEstilo.preco}</h5>
                          <p className="">Tempo estimado: {corteEstilo.tempo_estimado} Minutos</p>
                          <Button onClick={() => handleDelete(corteEstilo.id)}className="bg-danger px-4 py-2 btnRed shadow rounded-pill w-100 mt-3 mb-1">
                            <MdFreeCancellation />
                            Remover
                          </Button>
                          <Link to={`./editar-corteestilo/${corteEstilo.id}`} className="mx-auto">
                            <Button className="bg-dark px-4 py-2  btnDark shadow rounded-pill w-100">
                              <AiOutlineEdit />
                              Alterar
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    ))

                  )}







                </Row>
              </Container>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CortesEstilos;
