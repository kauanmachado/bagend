import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import logoPreta from "../assets/img/logo1.png";
import axios from "axios";
import { useState } from "react";

const CadastroCliente = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleRegistrarCliente = async (event) => {
    await axios
      .post("http://localhost:8001/cadastrar-cliente", {
        nome_completo: nome,
        email: email,
        senha: senha,
        endereco: endereco,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          alert("Email ja cadastrado!");
        } else {
          alert("Cadastrado com sucesso");
          navigate("/");
        }
      })

      .catch((error) => alert("Erro ao cadastrar: ", error));
  };

  return (
    <>
      <Header />
      <Container className="mt-3 mb-5">
        <Row className="justify-content-center">
          <Col lg={5} md={8} className="shadow rounded mt-5 p-5">
            <img src={logoPreta} className="logo text-center" />
            <h2 className=" fw-bold  mt-5">Crie sua conta</h2>
            <p className="textP text-secondary mb-5">
              Ja possui conta? <Link to="/login-cliente">Entre</Link>
            </p>
            <Form onSubmit={handleRegistrarCliente}>
              <Row className="justify-content-center">
                <Col md={12}>
                  <Form.Label>E-mail</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <MdAlternateEmail />
                    </InputGroup.Text>
                    <Form.Control
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="cliente@exemplo.com"
                      required
                    />
                  </InputGroup>
                </Col>

                <Col md={12}>
                  <Form.Label>Nome completo</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <HiUser />
                    </InputGroup.Text>
                    <Form.Control
                      id="nomecompleto"
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Lucas Lima"
                      required
                    />
                  </InputGroup>
                </Col>

                <Col md={12}>
                  <Form.Label>Senha</Form.Label>
                  <InputGroup className="mb-3 shadow rounded">
                    <InputGroup.Text id="basic-addon1">
                      <RiLockPasswordFill />
                    </InputGroup.Text>
                    <Form.Control
                      id="senha"
                      onChange={(e) => setSenha(e.target.value)}
                      value={senha}
                      type="password"
                      placeholder="12345teste"
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
                      id="confirmsenha"
                      type="password"
                      placeholder="Digite a senha novamente"
                    />
                  </InputGroup>
                </Col>

                <Col md={12} className="">
                  <Form.Label>Endereco</Form.Label>
                  <InputGroup className="shadow rounded">
                    <Form.Control
                      type="text"
                      id="endereco"
                      placeholder="Digite o endereço"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      required
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

export default CadastroCliente;
