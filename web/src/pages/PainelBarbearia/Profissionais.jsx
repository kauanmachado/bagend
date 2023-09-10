import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import { Button, Col, Row, Container } from "react-bootstrap";
import PainelBarbearia from "../../components/PainelBarbearia";
import { Card } from "react-bootstrap";
import { ImUserTie } from "react-icons/im";
import { Link } from "react-router-dom";
import { HiOutlinePlusSm, HiUserRemove } from "react-icons/hi";
import profileEx from "../../assets/img/profileExample.jpg";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"
import axios from "axios";

const Profissionais = () => {

  const [data, setData] = useState([]);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  // console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"


  useEffect(() => {
    async function fetchData() {
        try {
          const res = await axios.get(`${apiUrl}/painel-barbearia/${id}`, {
            withCredentials: true
          })
           const data = {
              profissionais: res.data.profissionais
           }
           setData(data)
           console.log(data)
        } catch(error){
          console.error('Erro ao buscar dados da API:', error)
        }
    }
    fetchData()
  }, [])

  return (
    <>
      <HeaderBarbearia />
      <Container className="default-margin">
        <Row className="justify-content-center shadow rounded bg-white">
          <Col
            md={3}
            className="col-auto d-flex flex-column p-5 rounded bg-white"
          >
            <PainelBarbearia />
          </Col>

          <Col md={9} className="p-sm-5 p-3 border rounded bg-light">
            <div className="d-flex">
              <ImUserTie className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">
                Profissionais
              </h3>
            </div>
            <form>
            <div class="form-floating">
              <input
              style={{ width: "24rem" }}
                type="email"
                className="form-control  shadow"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput " className="text-secondary">Nome do profissional que deseja adicionar</label>
            </div>
            </form>
            <Link to="./adicionar-profissional">
              <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 mb-5">
                <HiOutlinePlusSm />
                Adicionar
              </Button>
            </Link>
            {data && data.profissionais && data.profissionais.length === 0 ? (
              <h5 className="text-muted">Não há nenhum profissional registrado.</h5>
            ) : (
              <Card
              style={{ width: "15rem" }}
              className="border-0 shadow m-1 p-1"
            >
              <Card.Body>
                <div className="d-flex align-items-center">
                  <img
                    src={profileEx}
                    width="40"
                    height="40"
                    className="rounded-circle "
                  />
                  <h5 className="fs-6 ms-3">Kauan da Silva Machado</h5>
                </div>
                <hr className="text-secondary" />
                <Button className="bg-danger px-4 py-2 btnRed shadow rounded-pill">
                  <HiUserRemove />
                  Remover
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

export default Profissionais;
