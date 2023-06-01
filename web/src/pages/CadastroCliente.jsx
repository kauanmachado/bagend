import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Toast,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import {
  RiLockPasswordFill,
  RiErrorWarningFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import logoPreta from "../assets/img/logo1.png";
import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';

const CadastroCliente = () => {
  const navigate = useNavigate();
  const [toastErro, setToastErro] = useState(false);
  const [toastCheck, setToastCheck] = useState(false);
  const [toastSenha, setToastSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [endereco, setEndereco] = useState("");

  const exibirToastErro = () => {
    setToastErro(true);

    setTimeout(() => {
      setToastErro(false);
    }, 3000);
  };

  const exibirToastCheck = () => {
    setToastCheck(true);

    setTimeout(() => {
      setToastCheck(false);
    }, 3000);
  };

  const exibirToastSenha = () => {
    setToastSenha(true);

    setTimeout(() => {
      setToastSenha(false);
    }, 3000);
  };

  const handleRegistrarCliente = async (e) => {
    e.preventDefault();

    if (senha !== confirmSenha) {
      setSenha("")
      setConfirmSenha("")
      throw exibirToastSenha();
    }

    await axios
      .post(
        "http://localhost:8001/cadastrar-cliente",
        {
          nome_completo: nome,
          email: email,
          senha: senha,
          endereco: endereco,
        }
      )

      .then((response) => {
        console.log(response.data);

        const cookieExpiresInSeconds = 60 * 60 * 24 * 30

        if (response.data.error) {
          exibirToastErro();
          setEmail("");
        } else {
          exibirToastCheck();
          const token = response.data.token;
          Cookies.set('token', token, { expires: cookieExpiresInSeconds })
          setTimeout(() => {
            navigate("/barbearias");
          }, 2000);
        }
      })

      .catch((error) => alert("Erro ao cadastrar: ", error));
  };

  return (
    <>
      <Header />
      <Container className="mb-5 mt-3">
        <Row className="justify-content-center">

        
          <Toast
            show={toastErro}
            onClose={() => setToastErro(false)}
            className="position-absolute toastEmail bg-danger text-white"
            
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Email ja cadastrado!
            </Toast.Body>
          </Toast>
          <Toast
            show={toastSenha}
            onClose={() => setToastSenha(false)}
            className="position-absolute toastEmail bg-danger text-white"
            
          >
            <Toast.Body>
              <RiErrorWarningFill className="me-2" />
              Senhas não conferem!
            </Toast.Body>
          </Toast>
          <Toast
            show={toastCheck}
            onClose={() => setToastCheck(false)}
            className="position-absolute toastEmail bg-success text-white"
            
          >
            <Toast.Body>
              <RiCheckboxCircleFill className="me-2" />
              Cadastrado com sucesso!
            </Toast.Body>
          </Toast>


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
                      value={confirmSenha}
                      onChange={(e) => setConfirmSenha(e.target.value)}
                      placeholder="Digite a senha novamente"
                      required
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
