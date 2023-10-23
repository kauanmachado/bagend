import { Button, Card, Col, Container, Row } from "react-bootstrap";
import HeaderClienteLogado from "../../components/HeaderCliente";
import Footer from "../../components/footer/Footer";
import PainelCliente from "../../components/PainelCliente";
import Cookies from "js-cookie";
import { BsBookmarkX, BsBookmarks, BsClock, BsFillPinMapFill } from "react-icons/bs";
import exBarber from "../../assets/img/exBarber.png";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode"
import { SlScreenSmartphone } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const CliSalvos = () => {

  const [barbeariasSalvas, setBarbeariasSalvas] = useState([]);
  const [deletedBarbearia, setDeletedBarbearia] = useState(null);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"


  useEffect(() => {
    async function fetchSalvos() {
      try {
        const res = await axios.get(`${apiUrl}/painel-cliente/${id}/salvos`, {
          withCredentials: true
        })
        console.log(res.data)
        setBarbeariasSalvas(res.data)
      }
      catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }
    fetchSalvos()

  }, [deletedBarbearia])

  const handleDelete = async (id) => {
    try {
    await axios.delete(`${apiUrl}/painel-cliente/salvos/${id}`);
    setDeletedBarbearia(id)
    
    ScrollToTop()
    window.location.reload()
    } catch (error) {
      console.error('Erro ao excluir o corte de estilo:', error);
    }
  }

  return (
    <>
      <HeaderClienteLogado />
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
            {barbeariasSalvas && barbeariasSalvas && barbeariasSalvas.length === 0 ? (
              <h5 className="text-muted">Você ainda não salvou nenhuma barbearia.</h5>
            ) : (
              barbeariasSalvas.map((barbearia) => (
                <Card
                  key={barbearia.idSalvo}
                  style={{ width: "18rem" }}
                  className="border-0 shadow m-1 p-3"
                >
                  <Card.Body>
                    <div className="d-flex mb-3">
                      <img
                        src={barbearia.imagemUrl}
                        width="40"
                        height="40"
                        className="rounded-circle "
                      />
                      <h5 className="fw-bold ms-2 mt-2 fs-6">{barbearia.nome_barbearia}</h5>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                    <p className=" text-secondary text-capitalize">
                    <BsFillPinMapFill className="endereco fs-5 me-2 text-dark" />{barbearia.endereco}
                    </p>
                    <p className=" text-secondary text-capitalize">
                    <SlScreenSmartphone className="fs-5 me-2 text-dark" />{barbearia.telefone}
                    </p>
                    <Link to={barbearia.link_instagram}>
                    <u className="text-dark fw-bold">
                    <AiOutlineInstagram className="fs-5 me-2 text-dark" />Ir para o Instagram
                    </u>
                    </Link>
                    
                    <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-4">
                      Marcar horário
                    </Button>
                    <Button onClick={() => handleDelete(barbearia.idSalvo)} variant="primary py-2 btnRed shadow rounded-pill mt-1">
                      Remover
                    </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))

            )}

          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CliSalvos;
