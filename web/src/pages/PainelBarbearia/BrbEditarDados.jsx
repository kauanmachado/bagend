import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../../styles/dashboard.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import HeaderBarbearia from "../../components/HeaderBarbearia";
import PainelBarbearia from "../../components/PainelBarbearia";
import { RiEditBoxFill, RiLockPasswordFill } from "react-icons/ri";
import { MdAlternateEmail, MdBusinessCenter } from "react-icons/md";
import SelectCidadeEstado from "../../components/SelectCidadeEstado";
import { AiOutlineInstagram } from "react-icons/ai";
import MediaPicker from "../../components/MediaPicker";

const BrbEditarDados = () => {
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

          <Col md={9} className="p-5 border rounded bg-light">
          <div className="d-flex mb-5">
              <RiEditBoxFill className="fs-2 text-secondary ms-1" />
              <h3 className="fw-bold text-secondary ms-3">Alterar dados</h3>
            </div>
            
              <form>
              
              <Row>
              <Col md={6}>
                  <Col md={12}>
                    <div className="form-floating mb-4">
                      <input
                        id="email"
                        name="email"
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

                  <Col md={12}>
                    <div className="form-floating mb-4">
                      <input
                        id="nomebarbearia"
                        name="nomebarbearia"
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
                        placeholder="00.000.000/0001-00"
                        required
                        className="form-control shadow"
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

                  <Col md={12}>
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
                          type="number"
                          name="numerorua"
                          id="numerorua"
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
