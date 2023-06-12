import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { MdPerson, MdAlternateEmail } from "react-icons/md";
import { RiEditBoxFill, RiLockPasswordFill } from "react-icons/ri";
import HeaderClienteLogado from "../../components/HeaderClienteLogado";
import PainelCliente from "../../components/PainelCliente";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { BsFillPinMapFill } from "react-icons/bs";

const CliEditarDados = () => {

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [endereco, setEndereco] = useState("");

  const handleRegistrarCliente = async (e) => {
    e.preventDefault();

    if (senha !== confirmSenha) {
      setSenha("");
      setConfirmSenha("");
      throw exibirToastSenha();
    }

    await axios
      .post("http://localhost:8001/cadastrar-cliente", {
        nome_completo: nome,
        email: email,
        senha: senha,
        endereco: endereco,
      })

      .then((response) => {
        console.log(response.data);

        const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

        if (response.data.error) {
          exibirToastErro();
          setEmail("");
        } else {
          exibirToastCheck();
          const token = response.data.token;
          Cookies.set("token", token, { expires: cookieExpiresInSeconds });
          setTimeout(() => {
            navigate("/barbearias");
          }, 2000);
        }
      })

      .catch((error) => alert("Erro ao cadastrar: ", error));
  };




  return (
    <>
      <HeaderClienteLogado />
      <Container className="default-margin">
        <Row className="shadow rounded bg-white">
          <Col
            md={3}
            className="bg-white rounded col-auto d-flex flex-column p-5"
          >
            <PainelCliente />
          </Col>

          <Col md={9} className="border rounded bg-light p-sm-5 p-3">
            <div className="d-flex">
              <RiEditBoxFill className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold text-secondary ms-3">Alterar dados</h3>
            </div>
            <p className="textP text-secondary mb-5">
              Deseja redefinir sua senha?{" "}
              <Link to="/login-cliente">Clique aqui</Link>
            </p>
            <Container>
              <Row>
                <Form onSubmit={handleRegistrarCliente}>
                    <Col md={8}>
                      <div class="form-floating mb-4">
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="cliente@exemplo.com"
                          required
                          className="form-control shadow"
                        />
                        <label for="floatingInput" className="text-secondary">
                          <MdAlternateEmail className="fs-3 me-2" />
                          cliente@exemplo.com
                        </label>
                      </div>
                    </Col>

                    <Col md={8}>
                      <div class="form-floating mb-4">
                        <input
                          id="nomecompleto"
                          type="text"
                          value={nome}
                          onChange={(e) => setNome(e.target.value)}
                          placeholder="Lucas Lima"
                          required
                          className="form-control shadow"
                        />
                        <label for="floatingInput" className="text-secondary">
                          <HiUser className="fs-3 me-2" />
                          Lucas Lima
                        </label>
                      </div>
                    </Col>

                    <Col md={8}>
                      <div class="form-floating mb-4">
                        <input
                          id="senha"
                          onChange={(e) => setSenha(e.target.value)}
                          value={senha}
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

                    <Col md={8}>
                      <div class="form-floating mb-4">
                        <input
                          id="confirmsenha"
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

                    <Col md={8} className="">
                      <div class="form-floating mb-4">
                        <input
                          type="text"
                          id="endereco"
                          placeholder="Digite o seu endereço"
                          value={endereco}
                          onChange={(e) => setEndereco(e.target.value)}
                          required
                          className="form-control shadow"
                        />
                        <label for="floatingInput" className="text-secondary">
                          <BsFillPinMapFill className="fs-3 me-2" />
                          Digite o seu endereço
                        </label>
                      </div>
                    </Col>
                    <Col md={12}>
                      <Button
                        variant="primary rounded-pill px-5 py-3 mt-3 shadow mx-0"
                        type="submit"
                      >
                        Cadastrar
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

export default CliEditarDados;
