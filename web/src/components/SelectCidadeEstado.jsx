import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import useEstados from "../hooks/useEstados";
import useCidades from "../hooks/useCidades";

const SelectCidadeEstado = () => {
  const { estados } = useEstados();
  const [selectedEstado, setSelectedEstado] = useState("");
  const { cidades } = useCidades({ uf: selectedEstado });
  const [cidade, setCidade] = useState(null);

  const handleEstadoUpdate = (event) => {
    setSelectedEstado(event.target.value);
  };

  const handleCidadeUpdate = (event) => {
    setCidade(event.target.value);
  };

  const select = {
    fontSize: "14px",
  };

  return (
    <>
      <Container className="mt-3 mb-3">
        <Row className="d-flex">
          <Col md={6} className="ps-0">
            <div class="form-floating">
              <select
                id="estado"
                name="estado"
                style={select}
                value={selectedEstado}
                onChange={handleEstadoUpdate}
                className="form-select shadow"
              >
                {estados.map((estado) => (
                <option key={estado.id} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
              </select>
              <label for="floatingSelect">Estado</label>
            </div>
            {/* <Form.Label>Estado</Form.Label>
            <Form.Select className="shadow">
              {estados.map((estado) => (
                <option key={estado.id} value={estado.sigla}>
                  {estado.nome}
                </option>
              ))}
            </Form.Select> */}
          </Col>

          <Col md={6} className="pe-0">
            <div class="form-floating">
              <select
                id="cidade"
                name="cidade"
                style={select}
                value={cidade}
                onChange={handleCidadeUpdate}
                placeholder="Selecione uma cidade"
                className="form-select shadow"
              >
                {cidades.map((cidade) => (
                  <option key={cidade.codigo_ibge}>{cidade.nome}</option>
                ))}
              </select>
              <label for="floatingSelect">Cidade</label>
            </div>
            {/* <Form.Select
              id="cidade"
              name="cidade"
              style={select}
              value={cidade}
              onChange={handleCidadeUpdate}
              className="shadow"
              placeholder="Selecione uma cidade"
            >
              {cidades.map((cidade) => (
                <option key={cidade.codigo_ibge}>{cidade.nome}</option>
              ))}
            </Form.Select> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SelectCidadeEstado;
