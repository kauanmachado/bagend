import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import HeaderBarbearia from "../../components/HeaderBarbearia";
import PainelBarbearia from "../../components/PainelBarbearia";
import { RiCheckboxCircleFill, RiEditBoxFill, RiErrorWarningFill, RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail, MdBusinessCenter, MdPermMedia } from "react-icons/md";
import SelectCidadeEstado from "../../components/SelectCidadeEstado";
import { AiOutlineInstagram } from "react-icons/ai";
import MediaPicker from "../../components/MediaPicker";
import axios from "axios";
import Geocode from "react-geocode";
import { error } from "jquery";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import { Toast } from "react-bootstrap";

const BrbEditarDados = () => {

  Geocode.setLanguage("pt");
  Geocode.setRegion("br");
  Geocode.setApiKey("AIzaSyDPAo3s_G658gBCdfxq0wOjCkfj3u4GLow");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const apiUrl = 'http://localhost:8001'
  const token = Cookies.get('token')
  const decodedToken = jwt_decode(token)
  const id = decodedToken.id
  const navigate = useNavigate();
  const [toastErro, setToastErro] = useState(false);
  const [toastErroCnpj, setToastErroCnpj] = useState(false);
  const [toastCheck, setToastCheck] = useState(false);
  const [toastSenha, setToastSenha] = useState(false);
  const [toastErroEndereco, setToastErroEndereco] = useState(false)
  const [email, setEmail] = useState(null);
  const [nomeBarbearia, setNomeBarbearia] = useState(null);
  const [cnpj, setCnpj] = useState(null);
  const [senha, setSenha] = useState(null);
  const [confirmSenha, setConfirmSenha] = useState("");
  const [rua, setRua] = useState(null);
  const [numeroRua, setNumeroRua] = useState(null);
  const [cidadeEstado, setCidadeEstado] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [linkInsta, setLinkInsta] = useState(null);
  const [tel, setTel] = useState(null)

  const exibirToastSenha = () => {
    setToastSenha(true)

    setTimeout(() => {
      setToastSenha(false)
    }, 3000);
  };

  const exibirToastCheck = () => {
    setToastCheck(true)

    setTimeout(() => {
      setToastCheck(false)
    }, 3000);
  };

  const exibirToastErroCnpj = () => {
    setToastErroCnpj(true)

    setTimeout(() => {
      setToastErroCnpj(false)
    }, 3000);
  }

  const exibirToastErroEndereco = () => {
    setToastErroEndereco(true)

    setTimeout(() => {
      setToastErroEndereco(false)
    }, 3000);
  }


  const exibirToastErro = () => {
    setToastErro(true)

    setTimeout(() => {
      setToastErro(false)
    }, 3000);
  };


  const handleUpdate = async (e) => {

    e.preventDefault()

    if (senha !== confirmSenha) {
      ScrollToTop()
      setSenha("")
      setConfirmSenha("")
      throw exibirToastSenha()
    }
    const enderecoFormatado =
      rua + ", " + numeroRua + ", " + cidadeEstado
    console.log(enderecoFormatado)

    const obterLatELng = async (enderecoFormatado) => {
      try {
        const response = await Geocode.fromAddress(enderecoFormatado)
        console.log(response.status)
        const { lat, lng } = response.results[0].geometry.location


        console.log(enderecoFormatado)
        console.log(lat.toString(), lng.toString())

        return { lat: lat.toString(), lng: lng.toString() }
      } catch {
        console.error(error)
      }
    }

    const { lat, lng } = await obterLatELng(enderecoFormatado)


    try {
      const formData = new FormData()

      formData.append("nome_barbearia", nomeBarbearia)
      formData.append("email", email)
      formData.append("cnpj", cnpj)
      formData.append("senha", senha)
      formData.append("endereco", enderecoFormatado)
      formData.append("lat", lat)
      formData.append("lng", lng)
      formData.append("foto_perfil", selectedImage)
      formData.append("telefone", tel)
      formData.append("link_instagram", linkInsta)

      console.log(formData)

      const res = await axios.put(`${apiUrl}/painel-barbearia/${id}`, formData)
      console.log(res)
      ScrollToTop()
      exibirToastCheck()
      // setTimeout(() => {
      //   navigate("/painel-barbearia")
      // }, 2000)

    } catch (error) {
      console.error(`Erro ao atualizar barbearia: ${error}`)
     

    }
  }




  return (
    <>
      <HeaderBarbearia />
      <Container className="default-margin">
      <Toast
            show={toastErroEndereco}
            onClose={() => setToastErroEndereco(false)}
            className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-danger text-white scrollTop"
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Endereço não!
            </Toast.Body>
          </Toast>
      <Toast
            show={toastErro}
            onClose={() => setToastErro(false)}
            className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-danger text-white scrollTop"
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Email já cadastrado!
            </Toast.Body>
          </Toast>
          <Toast
            show={toastErroCnpj}
            onClose={() => setToastErroCnpj(false)}
            className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-danger text-white scrollTop"
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              CNPJ já está em uso!
            </Toast.Body>
          </Toast>
          <Toast
            show={toastSenha}
            onClose={() => setToastSenha(false)}
            className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-danger text-white scrollTop"
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Senhas não conferem!
            </Toast.Body>
          </Toast>
          <Toast
            show={toastCheck}
            onClose={() => setToastCheck(false)}
            className="position-absolute top-0 start-50 translate-middle-x mt-5 toastEmail bg-success text-white scrollTop"
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              Dados atualizados com sucesso!
            </Toast.Body>
          </Toast>
        <Row className="justify-content-center shadow rounded bg-white">
          <Col
            md={3}
            className="col-auto d-flex flex-column p-5 rounded bg-white"
          >
            <PainelBarbearia />
          </Col>

          <Col md={9} className="p-5 border rounded bg-light">
          <div className="d-flex mb-5">
              <RiEditBoxFill className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold text-secondary ms-3">Alterar dados</h3>
            </div>
            
            <form onSubmit={handleUpdate} >
              <Row className="justify-content-center d-flex">
                <Col md={6}>
                  <Col md={10}>
                    <div className="form-floating mb-4">
                      <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="barbearia@exemplo.com"
                        required
                        className="form-control shadow"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <MdAlternateEmail className="fs-3 me-2" />
                        barbearia@exemplo.com
                      </label>
                    </div>

                  </Col>

                  <Col md={10}>
                    <div className="form-floating mb-4">
                      <input
                        id="nomebarbearia"
                        name="nomebarbearia"
                        value={nomeBarbearia}
                        type="text"
                        onChange={(e) => setNomeBarbearia(e.target.value)}
                        placeholder="Mr Barba"
                        required
                        className="form-control shadow"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <MdBusinessCenter className="fs-3 me-2" />
                        Mr Barba
                      </label>
                    </div>



                    <div className="form-floating mb-4">
                      <input
                        id="cnpj"
                        name="cnpj"
                        value={cnpj}
                        type="c"
                        onChange={(e) => setCnpj(e.target.value)}
                        placeholder="00.000.000/0001-00"
                        required
                        className="form-control shadow"
                        minlength="14"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <MdBusinessCenter className="fs-3 me-2" />
                        00.000.000/0001-00
                      </label>
                    </div>



                    <div className="form-floating mb-4">
                      <input
                        id="senha"
                        name="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        type="password"
                        placeholder="12345teste"
                        required
                        className="form-control shadow"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <RiLockPasswordFill className="fs-3 me-2" />
                        12345teste
                      </label>
                    </div>

                  </Col>

                  <Col md={10}>
                    <div className="form-floating mb-4">
                      <input
                        id="confirmSenha"
                        name="confirmSenha"
                        type="password"
                        value={confirmSenha}
                        onChange={(e) => setConfirmSenha(e.target.value)}
                        placeholder="Digite a senha novamente"
                        required
                        className="form-control shadow"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <RiLockPasswordFill className="fs-3 me-2" />
                        Digite a senha novamente
                      </label>
                    </div>
                  </Col>
                </Col>

                <Col md={6}>
                  <Row>
                    <Col md={9} className="py-0">
                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          name="rua"
                          id="rua"
                          placeholder="Digite o nome da rua"
                          value={rua}
                          onChange={(e) => setRua(e.target.value)}
                          required
                          className="form-control shadow"
                        />
                        <label for="floatingInput" className="text-secondary">
                          {/* <RiLockPasswordFill className="fs-3 me-2" /> */}
                          Digite o nome da rua
                        </label>
                      </div>

                    </Col>

                    <Col md={3} className="py-0">
                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          name="numerorua"
                          id="numerorua"
                          value={numeroRua}
                          onChange={(e) => setNumeroRua(e.target.value)}
                          placeholder="Digite o número da rua"
                          data-maxlength="4"
                          min="0"
                          required
                          className="form-control shadow"
                        />
                        <label for="floatingInput" className="text-secondary">
                          {/* <RiLockPasswordFill className="fs-3 me-2" /> */}
                          Número
                        </label>
                      </div>
                    </Col>
                  </Row>

                  {/* <SelectCidadeEstado 
                 onSelectChange={handleSelectChange}
                  /> */}
                  <Col md={12}>
                    <div className="form-floating mb-4">
                      <input
                        id="cidadeEstado"
                        name="cidadeEstado"
                        value={cidadeEstado}
                        onChange={(e) => setCidadeEstado(e.target.value)}
                        type="text"
                        placeholder="C"
                        className="form-control shadow"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <AiOutlineInstagram className="fs-3 me-2" />
                        Cidade e estado. Ex: Gravataí, RS
                      </label>
                    </div>
                  </Col>

                  <Row>
                    <Col md={6}>
                      <div className="form-floating mb-4">
                        <input
                          id="linkinsta"
                          name="linkinsta"
                          value={linkInsta}
                          onChange={(e) => setLinkInsta(e.target.value)}
                          type="url"
                          placeholder="Instagram"
                          className="form-control shadow"
                        />
                        <label for="floatingInput" className="text-secondary">
                          <AiOutlineInstagram className="fs-3 me-2" />
                          Instagram
                        </label>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-floating mb-4">
                        <input
                          id="tel"
                          name="tel"
                          value={tel}
                          onChange={(e) => setTel(e.target.value)}
                          type="tel"
                          placeholder="Número de telefone"
                          className="form-control shadow"
                        />
                        <label for="floatingInput" className="text-secondary">
                          {/* <AiOutlineInstagram className="fs-3 me-2" />  */}
                          Número de telefone
                        </label>
                      </div>
                    </Col>
                  </Row>

                  <Form.Label
                    htmlFor="foto_profissional"
                    className=" d-flex rounded border p-5 justify-content-center mediaPicker"
                  >
                    <MdPermMedia className="icon me-2" /> {selectedImage ? selectedImage.name : "Selecione uma imagem"}
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
                </Col>

                <Col md={12}>
                  <Button
                    variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0"
                    type="submit"
                  >
                    Confirmar alteração
                  </Button>
                </Col>
              </Row>
            </form>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BrbEditarDados;
