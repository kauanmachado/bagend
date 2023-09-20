import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PainelBarbearia from "../../components/PainelBarbearia";
import { AiFillSchedule } from "react-icons/ai";
import { BsClock, BsScissors } from "react-icons/bs";
import { MdAttachMoney, MdOutlineArrowBackIos } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";

const EditarCorteEstilo = () => {
  const { id } = useParams()
  console.log(id)
  const navigate = useNavigate()

  const [nomeCorte, setNomeCorte] = useState(null)
  const [tempoEstimado, setTempoEstimado] = useState(null)
  const [preco, setPreco] = useState(null)
  const [isValid, setIsValid] = useState(true);

  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const idBarbearia = decodedToken.id
  const apiUrl = "http://localhost:8001"

  const handleChange = (e) => {
    const inputValue = e.target.value

    const regex = /^\d{0,6}(\.\d{0,2})?$/
    const isPriceValid = regex.test(inputValue)


    setIsValid(isPriceValid)

    if (isPriceValid) {
      setPreco(parseFloat(inputValue))
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
    const res = await axios.put(`${apiUrl}/painel-barbearia/atualizar-corteestilo/${id}`, {
      nome_corte: nomeCorte,
      preco: preco,
      tempo_estimado: tempoEstimado
    })
  
    navigate('/painel-barbearia/cortes-estilos')
    } catch (error) {
      console.error(`Erro ao atualizar corte / estilo ${error}`)
    }
  }
  return (
    <>
      <Header />
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
                <Form onSubmit={handleUpdate}>
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
                        placeholder="12345teste"
                        onChange={handleChange}
                        className="form-control shadow"
                        required
                        autoComplete="senha"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <MdAttachMoney className="fs-3 me-2" />
                        Ex. 40
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div class="form-floating mb-4">
                      <input
                        id="tempoestimado"
                        type="number"
                        value={tempoEstimado}
                        onChange={(e) => setTempoEstimado(e.target.value)}
                        placeholder="Tempo estimado em minutos"
                        className="form-control shadow"
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
                    <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 " type="submit">
                      <HiOutlinePlusSm />
                      Salvar alterações
                    </Button>
                  </Col>
                </Form>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default EditarCorteEstilo;
