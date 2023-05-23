import "../../styles/dashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaUser } from "react-icons/fa";
import logoPreta from "../../assets/img/logo1.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../styles/dashboard.css";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdBusinessCenter } from "react-icons/md"
import { AiFillSchedule } from "react-icons/ai"
import { MdDashboard } from "react-icons/md"
import { BsScissors } from "react-icons/bs"
import { RiEditBoxFill } from "react-icons/ri"
import { IoLogOutOutline } from "react-icons/io5"
import exBarber from "../../assets/img/exBarber.png"



const PainelBarbearia = () => {
    return(
        <>
            <Container className="mt-5 mb-5">
      <div className="d-flex mb-3">
      <img src={exBarber} className="fotoBarbearia rounded-circle "/>
        <h5 className="fw-bold ms-3 align-middle mt-4">Mr Barba</h5>
      </div>

        <Row className="gx-3">
          <Col md={4}>
            <ListGroup className="shadow">
              <Link to="/cliente_dados.html">
                <ListGroup.Item className="list-group-item-action bg-item text-light rounded-top ">
                  <MdBusinessCenter className="mb-1  me-2 fs-5"/>
                   Geral
                </ListGroup.Item>
              </Link>
              <Link to="/cliente_dados.html">
                <ListGroup.Item className="list-group-item-action">
                  <AiFillSchedule  className="mb-1  me-2 fs-5"/>
                   Agendas
                </ListGroup.Item>
              </Link>
              <Link to="/cliente_dados.html">
                <ListGroup.Item className="list-group-item-action">
                  <MdDashboard   className="mb-1  me-2 fs-5"/>
                   Dashboard
                </ListGroup.Item>
              </Link>
              <Link to="/cliente_dados.html">
                <ListGroup.Item className="list-group-item-action">
                  <BsScissors  className="mb-1  me-2 fs-5"/>
                   Painel de cortes e estilos
                </ListGroup.Item>
              </Link>
              <Link to="/cliente_dados.html">
                <ListGroup.Item className="list-group-item-action">
                  <RiEditBoxFill  className="mb-1  me-2 fs-5"/>
                   Alterar dados
                </ListGroup.Item>
              </Link>
              <Link to="/cliente_dados.html">
                <ListGroup.Item className="list-group-item-action rounded-bottom">
                  <IoLogOutOutline  className="mb-1  me-2 fs-5"/>
                   Sair
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </Col>
        </Row>
      </Container>
        </>
    )
}

export default PainelBarbearia