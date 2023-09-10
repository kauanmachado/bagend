import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import { InputGroup, Form, Col, Row, Container, Navbar, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
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

const AdicionarCorteEstilo = () => {

  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const id = decodedToken.id
  const apiUrl = "http://localhost:8001"

  const [nomeCorte, setNomeCorte] = useState(null)
  const [tempoEstimado, setTempoEstimado] = useState(null)
  const [preco, setPreco] = useState(null)
  const [isValid, setIsValid] = useState(true);
  const [unit, setUnit] = useState('minutes');

  const handleChangeTime = (event) => {
    setTempoEstimado(event.target.value);
  };

  const handleChangeUnit = (event) => {
    setUnit(event.target.value);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;

    const regex = /^\d{0,6}(\.\d{0,2})?$/;
    const isPriceValid = regex.test(inputValue);


    setIsValid(isPriceValid);

    if (isPriceValid) {
      setPreco(inputValue);
    }
  }

  

  const handleCriarCorteEstilo = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${apiUrl}/adicionar-corteestilo`, {
        id_barbearia: id, 
        nome_corte: nomeCorte,
        tempo_estimado: tempoEstimado,
        preco: preco
      })

      console.log(res)
    } catch (error) {
      console.error("Erro ao cadastrar corte ou estilo:", error);
    }
  }

  return (
    <>
      <HeaderBarbearia />
      <Container className="default-margin">
        <Row className="justify-content-center shadow bg-white rounded">
          <Col
            md={3}
            className="rounded bg-light col-auto d-flex flex-column p-5 bg-white"
          >
            <PainelBarbearia />
          </Col>
          <Col md={9} className="rounded p-5 bg-light border">
            <Container>
              <Form onSubmit={handleCriarCorteEstilo}>
                <Row>
                  <Link
                    to="../painel-barbearia/cortes-estilos"
                    id="linkBack"
                    className="me-5 py-1 fw-bold text-dark mb-5"
                  >
                    <MdOutlineArrowBackIos
                      style={{ fontSize: 15 }}
                      className="me-2"
                    />
                    Voltar para cortes e estilos
                  </Link>

                  <Col md={6}>
                    <div class="form-floating mb-4">
                      <input
                        id="corte"
                        type="text"
                        value={nomeCorte}
                        onChange={(e) => setNomeCorte(e.target.value)}
                        placeholder="12345teste"
                        className="form-control shadow"
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
                      />
                      {!isValid && <p style={{ color: 'red' }}>Digite um preço válido</p>}
                      <label for="floatingInput" className="text-secondary">
                        <MdAttachMoney className="fs-3 me-2" />

                        Ex. 40
                      </label>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div class="form-floating mb-4">
                      <input
                        id="tempoEstimado"
                        type="text"
                        onChange={handleChangeTime}
                        className="form-control shadow"
                        placeholder="Tempo estimado"
                        required
                        autoComplete="senha"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <BsClock className="fs-3 me-2" />
                        Tempo estimado
                      </label>
                    </div>
                    <select value={unit} onChange={handleChangeUnit} className="form-select shadow">
                      <option value="minutes">Minutos</option>
                      <option value="hours">Horas</option>
                    </select>
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
