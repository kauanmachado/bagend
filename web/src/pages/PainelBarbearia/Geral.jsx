import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdBusinessCenter, MdDashboard } from "react-icons/md";
import { BsScissors } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillSchedule,
  AiFillStar,
} from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import jwt_decode from "jwt-decode"
import exBarber from "../../assets/img/exBarber.png";
import PainelBarbearia from "../../components/PainelBarbearia";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Geral = () => {

  const [data, setData] = useState([]);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  // console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"


    useEffect(() => {
      async function fetchData(){
        try {
        const res = await axios.get(`${apiUrl}/painel-barbearia/${id}`, {
          withCredentials: true
        })
          console.log(res)
          const data = {
            nomebarbearia: res.data.nome_barbearia,
            email: res.data.email,
            cnpj: res.data.cnpj,
            endereco: res.data.endereco,
            telefone: res.data.telefone,
            link_instagram: res.data.link_instagram,
            foto_perfil: res.data.foto_perfil
          }
          setData(data)
          // console.log(data)
    
      }
        catch(error) {
          console.error('Erro ao buscar dados da API:', error)
        }
      }
      fetchData();
    },[])
    
  

  
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
              <MdBusinessCenter className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Visão Geral</h3>
            </div>
            <img src={data.foto_perfil} className="logo rounded-circle" />

            <h3 className=" mt-3 fw-bold title">{data.nomebarbearia}</h3>
            <div className="d-flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="endereco mt-4"></p>
            <p className="endereco text-secondary">
              {data.endereco}
            </p>
            <p className="endereco text-muted">
              {data.telefone}
            </p>

            <p>
              <AiOutlineInstagram className="fs-3" />{data.link_instagram}
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Geral;
