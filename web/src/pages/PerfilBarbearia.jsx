import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import exBarber from "../assets/img/exBarber.png";
import {
  AiFillStar,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BsBookmark} from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderCliente from "../components/HeaderCliente";
import HeaderBarbearia from "../components/HeaderBarbearia";
import CheckRole from "../components/CheckRole";

const PerfilBarbearia = () => {

  const role = CheckRole()
  const { id } = useParams()
  const [data, setData] = useState([]);
  const apiUrl = "http://localhost:8001"

  useEffect(() => {
    async function fetchData(){
      try {
        const res = await axios.get(`${apiUrl}/perfil-barbearia/${id}`, {
          withCredentials: true
        })
        const dados = res.data
        const barbearia = {
          ...dados,
          imagemUrl: `${apiUrl}/${dados.foto_perfil}`
        }
        setData(barbearia)  
      } catch(error) {
        console.error(`Erro ao buscar dados da API ${error}`)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      {role === "cliente" ? <HeaderCliente /> : role === "barbearia" ? <HeaderBarbearia /> : <Header />}
      <Container className="default-margin">
        <Row className="justify-content-center">
          <Col md={6} className="shadow rounded p-5">
          <Link
                  to="../barbearias"
                  id="linkBack"
                  className="me-5 py-1 fw-bold text-dark"
                >
                  <MdOutlineArrowBackIos
                    style={{ fontSize: 15 }}
                    className="me-2"
                  />
                  Voltar para navegação
                </Link>
            <div className="d-flex align-items-center mt-5">
              <img
                src={data.imagemUrl}
                width="120"
                height="120"
                className="rounded-circle me-2"
              />
              <div className="ms-3">
                <h5 className="fw-bold">{data.nome_barbearia}</h5>
                <p className="endereco text-secondary">
                  {data.endereco}
                </p>
                <p className="text-secondary">{data.telefone}</p>
                <div className="d-flex mt-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>

            <div className="d-flex ms-4 mt-2">
              <Link to={data.link_instagram}>
              <AiOutlineInstagram className="fs-3 ms-4" />
              </Link>

            </div>
            
            <Button className="primary  py-2 agendar shadow rounded-pill ms-3 mt-5 float-end">
            <BsBookmark className="fs-5 m-0"/>
            </Button>
            <Link to="/agenda">
            <Button className="primary px-4 py-2 agendar shadow rounded-pill ms-3 mt-5 float-end">
              Marcar horário
            </Button>
            </Link>
            <Link to="/perfil-barbearia/avaliar">
            <Button className="bg-white px-4 py-2 agendar shadow rounded-pill ms-3 mt-5 float-end text-primary">
              Fazer avaliação
            </Button>
            </Link>
            
            
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default PerfilBarbearia;
