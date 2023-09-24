import { Col, Container, Row, Spinner } from "react-bootstrap"

const Loading = () => {
    return (
        <>
        <Container className="default-margin">
            <Row className="justify-content-center ">
            <Col md={5} className="d-flex">
            <Spinner animation="border" variant="primary me-3" />
            <h6 className="fw-bold mt-2">Carregando dados, aguarde um momento...</h6>
            </Col>
            </Row>
        </Container>
        </>
    )
}

export default Loading