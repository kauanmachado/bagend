import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBRLocale from '@fullcalendar/core/locales/pt-br';
import { Button, Col, Container, Row } from "react-bootstrap"
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";

const DataHorario = ({ onNext }) => {
    return (
        <Container className="default-margin">
            <Row className="d-flex justify-content-center">
                <Col md={8} className=" p-5 shadow rounded">
                    <div className="d-flex justify-content-between mb-5">
                        <h3 className="fw-bold mb-5 text-secondary ms-3"><BsCalendar2Date className="me-3" />Escolha uma data</h3>
                        <MdOutlineArrowBackIos
                            className="me-2 fs-3"
                        />
                    </div>
                    <input type="time" id="horario" name="horario" />
                    <div>
                        <input
                            type="datetime-local"
                            placeholder="Data e Hora do Agendamento"
                            value="{dataAgendamento}"
                            onChange="{handleDataChange}"
                        />
                        <button onClick="{handleAgendamentoSubmit}">Agendar</button>
                    </div>

                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        locale={ptBRLocale} />
                    <Button variant="primary px-5 py-3 agendar shadow rounded-pill mt-3" type="submit">
                        Continuar
                    </Button>
                </Col>

            </Row>
        </Container>


    )
}

export default DataHorario