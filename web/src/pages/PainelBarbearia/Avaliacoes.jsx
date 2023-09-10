import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import PainelBarbearia from "../../components/PainelBarbearia";
import { MdOutlineForum } from "react-icons/md";
import Footer from "../../components/footer/Footer";
import profileEx from "../../assets/img/profileExample.jpg";
import { AiFillStar } from "react-icons/ai";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode"

const Avaliacoes = () => {

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
              avaliacoes: res.data.avaliacoes
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

          <Col md={9} className="p-5 border rounded bg-light">
            <div className="d-flex">
              <MdOutlineForum className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Avaliações</h3>
            </div>
            {data && data.avaliacoes && data.avaliacoes.length === 0 ? (<h5 className="text-muted">Não há avaliações sobre sua barbearia.</h5>) :(
              <Card className="border-0 shadow m-1 p-3">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <h5 className="fs-6">Kauan da Silva Machado</h5>
                </div>

                <p className="text-secondary mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <div className="d-flex mt-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
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

export default Avaliacoes;
