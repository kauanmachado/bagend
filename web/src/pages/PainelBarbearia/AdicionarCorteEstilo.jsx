import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import { InputGroup, Form, Col, Row, Container, Navbar, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import { MdBusinessCenter, MdDashboard, MdAttachMoney, MdOutlineArrowBackIos } from "react-icons/md";
import { BsScissors, BsClock } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { AiFillSchedule, AiOutlinePlus } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import HeaderClienteLogado from "../../components/HeaderCliente";
import PainelBarbearia from "../../components/PainelBarbearia";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useState } from "react"
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"
import CustomToastCheck from "../../components/toasts/CustomToastCheck";

const AdicionarCorteEstilo = () => {

  const navigate = useNavigate()
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001/painel-barbearia/${id}/adicionar-corteestilo"

  const [nomeCorte, setNomeCorte] = useState(null)
  const [tempoEstimado, setTempoEstimado] = useState(null)
  const [preco, setPreco] = useState(null)
  const [isValid, setIsValid] = useState(true);
  const [unit, setUnit] = useState('minutes');

  const handleChangeTime = (event) => {
    setTempoEstimado(event.target.value);
  };

  

  const handleChange = (e) => {
    const inputValue = e.target.value;

    const regex = /^\d{0,6}(\.\d{0,2})?$/;
    const isPriceValid = regex.test(inputValue);


    setIsValid(isPriceValid);

    if (isPriceValid) {
      setPreco(parseFloat(inputValue));
    }
  }

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`, // Use "Bearer" para tokens JWT, ajuste conforme necessário
      'Content-Type': 'application/json', // Tipo de conteúdo JSON
    }
  };
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const exibirToastCheck = (message, duration) => {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, duration);
  };

  const handleCriarCorteEstilo = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${apiUrl}`, {
        id_barbearia: id, 
        nome_corte: nomeCorte,
        tempo_estimado: tempoEstimado,
        preco: preco
      }, config)
      exibirToastCheck('Adicionado com sucesso', 2000)
      navigate('/painel-barbearia/cortes-estilos')
    } catch (error) {
      console.error("Erro ao cadastrar corte ou estilo:", error);
    }
  }
  

  return (
    <>
      <HeaderBarbearia />
      <Container className="default-margin">
      {showToast && (
        <CustomToastCheck
        message={toastMessage}
        duration={2000}
        />
      )}
      
        
        <Row className="justify-content-center shadow bg-white rounded">
          <Col
            md={3}
            className="rounded bg-light col-auto d-flex flex-column p-5 bg-white"
          >
            <PainelBarbearia />
          </Col>
          <Col md={9} className="rounded p-5 bg-light border">
          <div className="d-flex justify-content-between">
              
              <h3 className="fw-bold text-secondary  mb-5">
              <BsScissors className="fs-2 text-secondary me-3 mb-1" />
                Cortes e Estilos
              </h3>
              <Link
                    to="../painel-barbearia/cortes-estilos"
                    id="linkBack"
                    className="me-5 py-1 fw-bold text-dark mb-5"
                  >
                    <MdOutlineArrowBackIos
                      style={{ fontSize: 18 }}
                      className="me-2"
                    />
                    Voltar
                  </Link>
            </div>
            <Container>
              <Form onSubmit={handleCriarCorteEstilo}>
                <Row>
                  

                  <Col md={6}>
                    <div class="form-floating mb-4">
                      <input
                        id="corte"
                        type="text"
                        value={nomeCorte} 
                        onChange={(e) => setNomeCorte(e.target.value)}
                        placeholder="12345teste"
                        className="form-control shadow"
                        maxLength="30"
                        required
                        autoComplete="senha"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <BsScissors className="fs-3 me-2" />
                        Ex. Corte degradê
                      </label>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div class="form-floating mb-4">
                      <input
                        id="preco"
                        type="number"
                        onChange={handleChange}
                        placeholder="12345teste"
                        className="form-control shadow"
                        required
                        autoComplete="senha"
                        maxLength="5"
                      />
                      {!isValid && <p style={{ color: 'red' }}>Digite um preço válido</p>}
                      <label for="floatingInput" className="text-secondary">
                        <MdAttachMoney className="fs-3 me-2" />

                        Ex. 40
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div class="form-floating mb-4">
                      <input
                        id="tempoEstimado"
                        type="number"
                        value={tempoEstimado}
                        onChange={(e) => setTempoEstimado(e.target.value)}
                        className="form-control shadow"
                        placeholder="Tempo estimado em minutos"
                        maxLength={"3"}
                        required
                        autoComplete="senha"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <BsClock className="fs-3 me-2" />
                        Tempo estimado em minutos
                      </label>
                    </div>
                  </Col>
                  <Col md={12}>
                    <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-4 float-xl-end" type="submit">
                      <HiOutlinePlusSm />
                      Adicionar
                    </Button>
                  </Col>

                </Row>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdicionarCorteEstilo;
