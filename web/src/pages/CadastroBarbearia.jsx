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
  const [email, setEmail] = useState(null);
  const [nomeBarbearia, setNomeBarbearia] = useState(null);
  const [cnpj, setCnpj] = useState(null);
  const [senha, setSenha] = useState(null);
  const [rua, setRua] = useState(null);
  const [numeroRua, setNumeroRua] = useState(null);
  const [linkInsta, setLinkInsta] = useState("");
  const [linkFacebook, setLinkFacebook] = useState("");

  const handleRegistrarBarbearia = async (e) => {
    e.preventDefault();
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

    await axios.post("http://localhost:8001/cadastrar-barbearia", {
      nome_barbearia: nomeBarbearia,
      email: email,
      cnpj: cnpj,
      senha: senha,
      enderecoFormatado: enderecoFormatado,
      lat: lat,
      lng: lng,
      foto_perfil: fotoPerfil,
      telefone,
      link_instagram: linkInsta,
      link_facebook: linkFacebook,
    });
  };

  return (
    <>
      <Header />
      <Container className="mt-3 mb-5">
        <Row className="justify-content-center">
          <Col lg={10} md={9} className="shadow rounded mt-5 p-sm-5 p-4">
            <img src={logoPreta} className="logo text-center" />
            <h3 className=" fw-bold  mt-5">
             Cadastre sua barbearia e aumente sua visibilidade</h3>
            <p className="textP text-secondary mb-5">
              Ja possui conta? <Link to="/login-barbearia">Entre</Link>
            </p>
            <Form onSubmit={handleRegistrarBarbearia}>
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
                    {/* <Form.Label>E-mail</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdAlternateEmail />
                    </InputGroup.Text>
                    <Form.Control
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="barbearia@exemplo.com"
                      required
                    />
                  </InputGroup> */}
                  </Col>

                  <Col md={10}>
                    <div className="form-floating mb-4">
                      <input
                        id="nomebarbearia"
                        name="nomebarbearia"
                        value={nomeBarbearia}
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

                    {/* <Form.Label>Nome da Barbearia</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdBusinessCenter />
                    </InputGroup.Text>
                    <Form.Control
                      id="nomebarbearia"
                      name="nomebarbearia"
                      value={nomeBarbearia}
                      onChange={(e) => setNomeBarbearia(e.target.value)}
                      placeholder="Mr Barba"
                      required
                    />
                  </InputGroup> */}

                    <div className="form-floating mb-4">
                      <input
                        id="cnpj"
                        name="cnpj"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        placeholder="00.000.000/0001-00"
                        required
                        className="form-control shadow"
                      />
                      <label for="floatingInput" className="text-secondary">
                        <MdBusinessCenter className="fs-3 me-2" />
                        00.000.000/0001-00
                      </label>
                    </div>

                    {/* <Form.Label>CNPJ</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdBusinessCenter />
                    </InputGroup.Text>
                    <Form.Control
                      id="cnpj"
                      name="cnpj"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                      placeholder="00.000.000/0001-00"
                      required
                    />
                  </InputGroup> */}

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
                    {/* <Form.Label>Senha</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <RiLockPasswordFill />
                    </InputGroup.Text>
                    <Form.Control
                      id="senha"
                      name="senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      type="password"
                      placeholder="12345teste"
                      required
                    />
                  </InputGroup> */}
                  </Col>

                  <Col md={10}>
                    <div className="form-floating mb-4">
                      <input
                        id="confirmSenha"
                        name="confirmSenha"
                        type="password"
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
                      {/* <Form.Label>Rua</Form.Label>
                  <InputGroup className="shadow rounded">
                    <Form.Control
                      type="text"
                      name="rua"
                      id="rua"
                      placeholder="Digite o nome da rua"
                      value={rua}
                      onChange={(e) => setRua(e.target.value)}
                      required
                    />
                  </InputGroup> */}
                    </Col>

                    <Col md={3} className="py-0">
                      <div className="form-floating mb-4">
                        <input
                          type="number"
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

                  <SelectCidadeEstado />
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
                          value={linkInsta}
                          onChange={(e) => setLinkInsta(e.target.value)}
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

                  <MediaPicker />
                </Col>

                <Col md={12}>
                  <Button
                    variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0"
                    type="submit"
                  >
                    Cadastrar
                  </Button>
                </Col>
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
