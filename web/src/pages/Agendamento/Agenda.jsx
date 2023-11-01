import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../components/footer/Footer";
import DataHorario from "./DataHorario";
import CorteEstilo from "./CorteEstilo";
import Profissional from "./Profissional";
import HeaderCliente from "../../components/HeaderCliente";
import { BsScissors } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";

const Agenda = () => {

  const { id } = useParams()
  const apiUrl = "http://localhost:8001"
  const [step, setStep] = useState(1)
  const [selectedCorteEstilo, setSelectedCorteEstilo] = useState("")
  const [selectedProfissional, setSelectedProfissional] = useState("")
  const [selectedDataHorario, setSelectedDataHorario] = useState("")
  const [agendamentoCompleto, setAgendamentoCompleto] = useState(false)
  const [data, setData] = useState([])


  const nextStep = () => {
    setStep(step + 1)
  };

  const prevStep = () => {
    setStep(step - 1)
  }

  const [formData, setFormData] = useState({
    // Inicialize aqui com os valores padrão ou vazios
    barbearia: "",
    dataHorario: "",
    corteEstilo: "",
    profissional: "",
  });

  const updateCorteEstilo = (corteEstilo) => {
    setSelectedCorteEstilo(corteEstilo)
    checkAgendamentoCompleto()
  }

  const updateProfissional = (profissional) => {
    setSelectedProfissional(profissional)
    checkAgendamentoCompleto()
  }

  const updateDataHorario = (dataHorario) => {
    setSelectedDataHorario(dataHorario)
    checkAgendamentoCompleto()
  }

  const checkAgendamentoCompleto = () => {
    if (selectedCorteEstilo && selectedProfissional && selectedDataHorario) {

      setAgendamentoCompleto(true)
    } else {
      setAgendamentoCompleto(false)
    }
  }

  const handleConfirm = async () => {
    try {

      // const dadosParaAPI = {
      //   dataHorario: formData.dataHorario,
      //   corteEstilo: formData.corteEstilo,
      //   profissional: formData.profissional,
      //   // Outros campos de dados dos outros componentes

      // }

      const res = await axios.post(`${apiUrl}`, dadosParaAPI, {
        withCredentials: true
      })



    } catch (error) {
      console.error('Erro ao enviar os dados para a API:', error)
    }
  }

  useEffect(() => {
    async function fetchBarbearia() {
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
      }
      catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      }
    }



    fetchBarbearia()
  }, [])


  console.log(selectedCorteEstilo.nome_corte)
  console.log(selectedDataHorario.horario)


  return (
    <>
      <HeaderCliente />
      <Container className="default-margin">
        <Row>
          {agendamentoCompleto ? (
            <Container className="default-margin">

              <Row className="d-flex justify-content-center">
                <Col md={9} className=" p-5 shadow rounded">
                  <Button className="float-end btn-prev text-dark fw-bold fs-6 rounded-pill" >
                    <MdOutlineArrowBackIos
                      style={{ fontSize: 15 }}
                      className="me-2"
                    />Voltar para horários</Button>

                  <div className="d-flex mt-3 mb-3">
                    <img
                      src={data.imagemUrl}
                      width="60"
                      height="60"
                      className="rounded-circle "
                    />
                    <div className=" ms-3 flex flex-column">
                      <h5 className=" mt-2 fw-bold text-capitalize">{data.nome_barbearia}</h5>
                      <span className="text-secondary">{data.endereco}</span>
                    </div>
                  </div>
                  <hr></hr>
                  <h3></h3>
                  <h3 className="fw-bold">Detalhes do Agendamento</h3>
                  {selectedDataHorario && (
                    <p>Data e Horário: {selectedDataHorario.horario}</p>
                  )}
                  {selectedCorteEstilo && (
                    <p>Corte ou Estilo: {selectedCorteEstilo.nome_corte}</p>
                  )}
                  {selectedProfissional && (
                    <p>Profissional: {selectedProfissional.nome_profissional}</p>
                  )}
                 










                </Col>

              </Row>
            </Container>
          ) : step === 1 ? (
            <DataHorario onNext={nextStep} updateDataHorario={updateDataHorario} />
          ) : step === 2 ? (
            <CorteEstilo onNext={nextStep} onPrev={prevStep} updateCorteEstilo={updateCorteEstilo} />
          ) : step === 3 ? (
            <Profissional onPrev={prevStep} updateProfissional={updateProfissional} />
          ) : null}






        </Row>
      </Container>

      <Footer />

    </>
  )
}


export default Agenda;
