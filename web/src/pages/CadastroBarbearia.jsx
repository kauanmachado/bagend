import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import React from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail, MdBusinessCenter } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import logoPreta from "../assets/img/logo1.png";
import Geocode from "react-geocode";
import { useState } from "react";
import MediaPicker from "../components/MediaPicker";
import SelectCidadeEstado from "../components/SelectCidadeEstado";
import axios from "axios";

const CadastroBarbearia = () => {
  Geocode.setLanguage("pt");
  Geocode.setRegion("br");
  Geocode.setApiKey("AIzaSyDPAo3s_G658gBCdfxq0wOjCkfj3u4GLow");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const [endereco, setEndereco] = useState(null);

  const handleRegistrarBarbearia = async () => {
    const rua = document.getElementById("rua").value;
    const numerorua = document.getElementById("numerorua").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    const enderecoFormatado =
      rua + ", " + numerorua + ", " + cidade + ", " + estado;
    Geocode.fromAddress(endereco).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        console.log(enderecoFormatado);
      },
      (error) => {
        console.error(error);
      }
    );

    try {
      const response = await axios.post(
        "http://localhost:8001/cadastrar-barbearia",
        {
          nome_barbearia,
          email,
          cnpj,
          senha,
          confirmarSenha,
          enderecoFormatado: enderecoFormatado,
          lat: lat,
          lng: lng,
          foto_perfil,
          telefone,
          link_instagram,
          link_facebook,
        }
      );

      console.log("Usuário cadastrado com sucesso!", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-3 mb-5">
        <Row className="justify-content-center">
          <Col lg={5} md={9} className="shadow rounded mt-5 p-5">
            <img src={logoPreta} className="logo text-center" />
            <h2 className=" fw-bold  mt-5">Crie sua conta</h2>
            <p className="textP text-secondary mb-5">
              Ja possui conta? <Link to="/login-barbearia">Entre</Link>
            </p>
            <Form onSubmit={handleRegistrarBarbearia}>
              <Row className="justify-content-center">
                <Col md={12}>
                  <Form.Label>E-mail</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdAlternateEmail />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="barbearia@exemplo.com"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </InputGroup>
                </Col>

                <Col md={12}>
                  <Form.Label>Nome da Barbearia</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdBusinessCenter />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Mr Barba"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </InputGroup>

                  <Form.Label>CNPJ</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdBusinessCenter />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="00.000.000/0001-00"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </InputGroup>

                  <Form.Label>Senha</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <RiLockPasswordFill />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="12345teste"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </InputGroup>
                </Col>

                <Col md={12}>
                  <Form.Label>Confirmar senha</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <RiLockPasswordFill />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Digite a senha novamente"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </InputGroup>
                </Col>

                <Col md={9} className="">
                  <Form.Label>Rua</Form.Label>
                  <InputGroup className="shadow rounded">
                    <Form.Control
                      type="text"
                      name="rua"
                      id="rua"
                      placeholder="Digite o nome da rua"
                      aria-label="Username"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      aria-describedby="basic-addon1"
                      required
                    />
                  </InputGroup>
                </Col>

                <Col md={3}>
                  <Form.Label>Número</Form.Label>
                  <InputGroup className="shadow rounded">
                    <Form.Control
                      type="number"
                      name="numerorua"
                      id="numerorua"
                      placeholder="Digite o número da rua"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      data-maxlength="4"
                      min="0"
                      required
                    />
                  </InputGroup>
                </Col>

                <SelectCidadeEstado />

                <Form.Label className="text-center mt-5">
                  Foto de perfil da barbearia ( Opcional )
                </Form.Label>
                <MediaPicker />

                <Form.Label className="text-center mt-5">
                  Redes sociais ( Opcional )
                </Form.Label>
                <Col md={6}>
                  <InputGroup className="mb-3 shadow">
                    <InputGroup.Text id="basic-addon1">
                      <AiOutlineInstagram />
                    </InputGroup.Text>
                    <Form.Control
                      type="url"
                      placeholder="Instagram"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>

                <Col md={6}>
                  <InputGroup className="mb-3 shadow">
                    <InputGroup.Text id="basic-addon1">
                      <AiOutlineFacebook />
                    </InputGroup.Text>
                    <Form.Control
                      type="url"
                      placeholder="Facebook"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Col>

                <Button
                  variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0"
                  type="submit"
                >
                  Cadastrar
                </Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default CadastroBarbearia;
