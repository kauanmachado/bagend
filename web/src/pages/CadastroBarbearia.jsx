import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";;
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail, MdBusinessCenter } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import logoPreta from "../assets/img/logo1.png";
import Geocode from 'react-geocode';
import { useState } from "react";

Geocode.setLanguage("pt")
Geocode.setRegion("br")
Geocode.setApiKey("AIzaSyDPAo3s_G658gBCdfxq0wOjCkfj3u4GLow")
Geocode.setLocationType("ROOFTOP")
Geocode.enableDebug()

const CadastroBarbearia = () => {
  

  // --GEOCODE-- //
  const [endereco, setEndereco] = useState(null)
  // Busca endereço e retorna os seus dados
  const buscarEndereco = (e) => {
  e.preventDefault()
  Geocode.fromAddress(endereco).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location
      const enderecoFormatado = response.results[0].formatted_address;
      console.log(lat, lng);
      console.log(enderecoFormatado)
      
    },
    (error) => {
      console.error(error)
    }

    
  )
}
// --GEOCODE-- //


  return (
    <>
      <Header />
      <Container className="mt-3 mb-5">
        <Row className="justify-content-center">
          <Col lg={6} md={8} className="shadow rounded mt-5 p-5">
            <img src={logoPreta} className="logo text-center" />
            <h2 className=" fw-bold  mt-5">Crie sua conta</h2>
            <p className="textP text-secondary mb-5">
              Ja possui conta? <Link to="/login-cliente">Entre</Link>
            </p>
            <Form onSubmit={buscarEndereco}>
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

                <Col md={12} className="mt-5 mb-5">
                  <h4>Digite o endereço da sua barbearia</h4>
                  <InputGroup className=" mt-5 mb-3 shadow rounded buscarBarb">
                <Form.Control
                  type="text"
                  name="endereco"
                  id="endereco"
                  placeholder="Digite o endereço da barbearia"
                  aria-label="Username"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  aria-describedby="basic-addon1"
                  required
                />
                
              </InputGroup>
                </Col>

                <h5 className="text-center mt-3">Opcional</h5>
                <Form.Label>Foto de perfil da barbearia</Form.Label>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" accept="image/png,image/jpeg" />
                </Form.Group>

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
