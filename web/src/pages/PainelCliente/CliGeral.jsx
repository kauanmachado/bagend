import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  MdPerson,
  MdOutlineAlternateEmail,
  MdPersonPinCircle,
} from "react-icons/md";
import HeaderClienteLogado from "../../components/HeaderCliente";
import Cookies from "js-cookie";
import PainelCliente from "../../components/PainelCliente.jsx";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"
import axios from "axios";

const CliGeral = () => {

  const [data, setData] = useState([]);
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  console.log(decodedToken)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"


    useEffect(() => {
      async function fetchData(){
        try {
          
          const res = await axios.get(`${apiUrl}/painel-cliente/${id}`, {
          withCredentials: true
        })
        
          const data = {
            nomecompleto: res.data.nome_completo,
            email: res.data.email,
            endereco: res.data.endereco,
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
              <MdPerson className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold mb-5 text-secondary ms-3">Visão Geral</h3>
            </div>
            <p className="text-capitalize">
              <MdPerson className="fs-2"/> {data.nomecompleto}
            </p>
            <p className="">
              <MdOutlineAlternateEmail className="fs-2"/> {data.email}
            </p>
            <p className="text-capitalize">
              <MdPersonPinCircle className="fs-2"/> {data.endereco}
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CliGeral;
