import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import Footer from "../../components/footer/Footer";
import PainelBarbearia from "../../components/PainelBarbearia";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { HiOutlinePlusSm } from "react-icons/hi";
import { ImUserTie } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import MediaPicker from "../../components/MediaPicker";
import jwt_decode from "jwt-decode"
import { MdPermMedia } from "react-icons/md";

const AdicionarProfissional = () => {

    const navigate = useNavigate()
    const token = Cookies.get('token')
    const decodedToken = jwt_decode(token)
    const id = decodedToken.id
    const apiUrl = `http://localhost:8001/painel-barbearia/${id}/adicionar-profissional`
    const [selectedImage, setSelectedImage] = useState(null);


    const [nomeProfissional, setNomeProfissional] = useState()


    const handleAdicionarProfissional = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData()

            formData.append("foto_profissional", selectedImage);
            formData.append("id_barbearia", id); // Adicione o ID aqui
            formData.append("nome_profissional", nomeProfissional);
            const fileName = formData.name
            console.log(fileName)
            const res = await axios.post(`${apiUrl}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                navigate('/painel-barbearia/profissionais')
            console.log(res)

        } catch (error) {
            console.error(`Erro ao enviar dados para a API: ${error}`)
        }
    }

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
                    <Col md={9} className="p-sm-5 p-3 border rounded bg-light">
                        <div className="d-flex">
                            <ImUserTie className="fs-2 text-secondary ms-1" />
                            <h3 className="fw-bold mb-5 text-secondary ms-3">
                                Adicionar Profissional
                            </h3>
                        </div>
                        <Col md={6}>
                            <Form onSubmit={handleAdicionarProfissional}>
                                <div class="form-floating mb-3">
                                    <input
                                        id="nomeProfissional"
                                        type="text"
                                        value={nomeProfissional}
                                        onChange={(e) => setNomeProfissional(e.target.value)}
                                        className="form-control  shadow"
                                        placeholder="name@example.com"
                                    />
                                    <label for="floatingInput " className="text-secondary">Nome do profissional que deseja adicionar</label>
                                </div>
                                <Form.Label
                                    htmlFor="foto_profissional"
                                    className=" d-flex rounded border p-5 justify-content-center mediaPicker"
                                >
                                    <MdPermMedia className="icon me-2" /> Selecione uma imagem
                                </Form.Label>
                                <Form.Group
                                    className="mb-3 justify-content-center d-flex"
                                >
                                    <Form.Control
                                        type="file"
                                        accept="image/png,image/jpeg"
                                        className="d-none"
                                        id="foto_profissional"
                                        onChange={(e) => setSelectedImage(e.target.files[0])}
                                    />
                                </Form.Group>
                                <Button variant="primary px-4 py-2 agendar shadow rounded-pill mt-3 mb-5" type="submit">
                                    <HiOutlinePlusSm />
                                    Adicionar
                                </Button>
                            </Form>
                        </Col>



                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default AdicionarProfissional