import { Button, Card, Col, Container, Row } from "react-bootstrap";
import HeaderClienteLogado from "../../components/HeaderCliente";
import Footer from "../../components/footer/Footer";
import PainelCliente from "../../components/PainelCliente";
import Cookies from "js-cookie";
import { BsBookmarkX, BsBookmarks, BsClock } from "react-icons/bs";
import exBarber from "../../assets/img/exBarber.png";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode"

const CliSalvos = () => {

  const [data, setData] = useState([]);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${apiUrl}/painel-cliente/${id}`, {
          withCredentials: true
        })
        const data = {
          salvos: res.data.salvos
        }
        console.log(data)
        setData(data)
      }
      catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }
    fetchData();
  }, [])

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
            {data && data.salvos && data.salvos.length === 0 ? (
              <h5 className="text-muted">Não há nenhuma barbearia salva.</h5>
            ) : (
              <Card
              style={{ width: "18rem" }}
              className="border-0 shadow m-1 p-3"
            >
              <Card.Body>
                <div className="d-flex mb-3">
                  <img
                    src={exBarber}
                    width="40"
                    height="40"
                    className="rounded-circle "
                  />
                  <h5 className="fw-bold ms-2 mt-2 fs-6">Mr Barba</h5>
                </div>
                <p className="endereco text-secondary">
                  Av. Flores da Cunha 000, Gravataí, Rio Grande do Sul
                </p>
                <Button variant="primary py-2 btnRed shadow rounded-pill mt-3">
                 <BsBookmarkX className="fs-6 m-0"/>
                </Button>
                <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 ms-2">
                  Marcar horário
                </Button>
              </Card.Body>
            </Card>
            )}
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CliSalvos;
