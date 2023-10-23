import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap"
import HeaderBarbearia from "../../components/HeaderBarbearia"
import Footer from "../../components/footer/Footer"
import PainelBarbearia from "../../components/PainelBarbearia"
import { BsClockHistory } from "react-icons/bs"
import { HiOutlinePlusSm } from "react-icons/hi"
import TimePicker from 'react-time-picker'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import ScrollToTop from "../../components/ScrollToTop"
import { RiErrorWarningFill } from "react-icons/ri"

const AdicionarHorarios = () => {

    const [horariosExistem, setHorariosExistem] = useState(false)
    const navigate = useNavigate()
    const token = Cookies.get('token')
    const decodedToken = jwt_decode(token)
    const id = decodedToken.id
    const apiUrl = `http://localhost:8001/painel-barbearia/${id}/adicionar-horario`

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`, // Use "Bearer" para tokens JWT, ajuste conforme necessário
            'Content-Type': 'application/json', // Tipo de conteúdo JSON
        }
    };

    const [toastErro, setToastErro] = useState(false)
    const [horarioSelecionado, setHorarioSelecionado] = useState()
    const [dataSelecionada, setDataSelecionada] = useState()

    const exibirToastErro = () => {
        setToastErro(true);

        setTimeout(() => {
            setToastErro(false);
        }, 3000);
    };

    const handleHorarioChange = (horario) => {
        setHorarioSelecionado(horario)
    };
    const handleDataChange = (data) => {
        setDataSelecionada(data)
    };
    const handleAdicionarHorario = async (e) => {
        e.preventDefault()

        if (!dataSelecionada || !horarioSelecionado) {
            console.log("Data e horário são obrigatórios.");
            return
        }

        const dataSplit = dataSelecionada.toISOString().split('T')[0]
        const dataFormatada = `${dataSplit}T${horarioSelecionado}:00`

            try {
                const res = await axios.post(`${apiUrl}`, {
                    id_barbearia: id,
                    dataHorario: dataFormatada,
                    horario: horarioSelecionado
                }, config);
            
                navigate('/painel-barbearia/horarios');
            } catch (error) {
                
                if (error.response.data = "Horário já existe.") {
                    ScrollToTop()
                    exibirToastErro()
                }

                console.error(`Erro ao adicionar novo horário: ${error}`)
            }
            
            
            
            
            
            
            

    }

    const dataAtual = new Date()
    dataAtual.setHours(0, 0, 0, 0)


    return (
        <div>
            <HeaderBarbearia />
            <Container className="default-margin">
                <Row className="justify-content-center shadow rounded bg-white">
                    <Toast
                        show={toastErro}
                        onClose={() => setToastErro(false)}
                        className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-danger text-white"
                    >
                        <Toast.Body>
                            <RiErrorWarningFill className="me-2" />
                            Horário já existente!
                        </Toast.Body>
                    </Toast>
                    <Col
                        md={3}
                        className="col-auto d-flex flex-column p-5 rounded bg-white"
                    >
                        <PainelBarbearia />
                    </Col>

                    <Col md={9} className="p-5 border rounded bg-light ">
                        <div className="d-flex">
                            <BsClockHistory className="fs-2 text-secondary ms-1" />
                            <h3 className="fw-bold mb-5 text-secondary ms-3">Adicionar Horário</h3>
                        </div>
                        <Col md={5}>
                            <form onSubmit={handleAdicionarHorario}>
                                <Form.Group controlId="horarioSelecionado" className="mb-4">
                                    <Form.Label><h5 className="fw-bold">Selecione um horário</h5></Form.Label>
                                    <TimePicker
                                        onChange={handleHorarioChange}
                                        value={horarioSelecionado}
                                        format="HH:mm"
                                        disableClock={true}
                                        clearIcon={null}
                                        className="form-control shadow border-0 bg-white"
                                        required
                                    />
                                    <i><p className="fw-bold">Horário selecionado: {horarioSelecionado}</p></i>
                                </Form.Group>

                                <DatePicker
                                    selected={dataSelecionada}
                                    onChange={handleDataChange}
                                    minDate={dataAtual}
                                    openToDate={dataAtual}
                                    required
                                />
                                <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-5 mb-5" type="submit">
                                    <HiOutlinePlusSm />
                                    Adicionar Horário
                                </Button>
                            </form>
                        </Col>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default AdicionarHorarios
