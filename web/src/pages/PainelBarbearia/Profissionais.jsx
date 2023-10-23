import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import { Button, Col, Row, Container, Toast } from "react-bootstrap";
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
import { RiCheckboxCircleFill } from "react-icons/ri";
import ScrollToTop from "../../components/ScrollToTop";

const Profissionais = () => {

  const [profissionais, setProfissionais] = useState([]);
  const [deletedProfissional, setDeletedProfissional] = useState(null)
  
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  // console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"

  const [toastCheck, setToastCheck] = useState(false);

  const exibirToastCheck = () => {
    setToastCheck(true);

    setTimeout(() => {
      setToastCheck(false);
    }, 3000);
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${apiUrl}/painel-barbearia/${id}/profissionais`, {
          withCredentials: true
        })
        const profissionaisComImagens = res.data.map((profissional) => {
          return {
            ...profissional,
            imagemUrl: `http://localhost:8001/${profissional.foto_profissional}` // Substitua pela URL correta do servidor
          };
        });
        setProfissionais(profissionaisComImagens)
        console.log(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }
    fetchData()
  }, [deletedProfissional])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/painel-barbearia/${id}/profissionais/${id}`);
      setDeletedProfissional(id)
      ScrollToTop()
      exibirToastCheck()
    } catch (error) {
      console.error('Erro ao excluir o profissional:', error);
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
              Profissional excluído com sucesso!
            </Toast.Body>
          </Toast>
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
            <Link to="./adicionar-profissional">
              <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 mb-5">
                <HiOutlinePlusSm />
                Adicionar
              </Button>
            </Link>
            {profissionais.length === 0 ? (
              <h5 className="text-muted">Não há nenhum profissional registrado.</h5>
            ) : (
              profissionais.map((profissional) => (
                <Card
                  key={profissional.id}
                  style={{ width: "15rem" }}
                  className="border-0 shadow m-1 p-1"
                >
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <img
                        src={profissional.imagemUrl}
                        width="40"
                        height="40"
                        className="rounded-circle "
                      />
                      <h5 className="fs-6 ms-3">{profissional.nome_profissional}</h5>
                    </div>
                    <hr className="text-secondary" />
                    <Button onClick={() => handleDelete(profissional.id)} className="bg-danger px-4 py-2 btnRed shadow rounded-pill">
                      <HiUserRemove />
                      Remover
                    </Button>
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

export default Profissionais;
